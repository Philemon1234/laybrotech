import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { AlertCircle, ArrowLeft, CheckCircle2, ImageIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { calculateReadTime, formatDate, getApprovedComments, getPublicCategories, getPublicPostBySlug, getRelatedPosts, submitPendingComment } from '@/lib/supabaseBlog';
import type { PublicBlogCategory, PublicBlogComment, PublicBlogPost } from '@/types/supabaseBlog';

type CommentErrors = Partial<Record<'name' | 'email' | 'comment', string>>;

export function BlogArticlePage() {
  const { slug = '' } = useParams();
  const [post, setPost] = useState<PublicBlogPost | null>(null);
  const [related, setRelated] = useState<PublicBlogPost[]>([]);
  const [comments, setComments] = useState<PublicBlogComment[]>([]);
  const [categories, setCategories] = useState<PublicBlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useState<CommentErrors>({});
  const [message, setMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const loaded = await getPublicPostBySlug(slug);
      setPost(loaded);
      if (loaded) {
        const [commentData, relatedData, categoryData] = await Promise.all([getApprovedComments(loaded.id), getRelatedPosts(loaded, 5), getPublicCategories()]);
        setComments(commentData);
        setRelated(relatedData);
        setCategories(categoryData);
        const title = loaded.seo_title || loaded.title;
        const description = loaded.meta_description || loaded.excerpt || '';
        document.title = title + ' | Laybrotech';
        setMeta('meta[name="description"]', 'name', 'description', description);
        setMeta('meta[property="og:title"]', 'property', 'og:title', title);
        setMeta('meta[property="og:description"]', 'property', 'og:description', description);
        if (loaded.featured_image_url) setMeta('meta[property="og:image"]', 'property', 'og:image', loaded.featured_image_url);
        if (loaded.canonical_url) setCanonical(loaded.canonical_url);
      }
      setLoading(false);
    }
    void load().catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <><section className="bg-white px-5 py-28 sm:px-6 lg:py-32"><div className="mx-auto max-w-[46rem] text-center"><p className="type-eyebrow">Loading Article</p><h1 className="mt-4 text-[2.45rem] font-semibold leading-tight text-[#18181b]">Preparing this insight.</h1></div></section><Footer /></>;
  if (!post) return <><section className="bg-white px-5 py-28 sm:px-6 lg:py-32"><div className="mx-auto max-w-[46rem] text-center"><p className="type-eyebrow">Article Not Found</p><h1 className="mt-4 text-[2.45rem] font-semibold leading-tight text-[#18181b]">This article is not available.</h1><Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f25a05]" to="/blog"><ArrowLeft className="size-4" />Back to Blog</Link></div></section><Footer /></>;

  const currentPost = post;
  const category = currentPost.blog_categories;

  function updateValue(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setMessage('');
    setSubmitError('');
  }

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const nextErrors: CommentErrors = {};
    const name = values.name.trim();
    const email = values.email.trim();
    const comment = values.comment.trim();

    if (!name) nextErrors.name = 'Name is required.';
    if (!email) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email.';
    if (!comment) nextErrors.comment = 'Comment is required.';
    else if (comment.length > 1200) nextErrors.comment = 'Comment must be 1200 characters or fewer.';

    setErrors(nextErrors);
    setMessage('');
    setSubmitError('');
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    try {
      await submitPendingComment({ postId: currentPost.id, name, email, comment });
      setValues({ name: '', email: '', comment: '' });
      setMessage('Thanks. Your comment has been submitted for review.');
    } catch {
      setSubmitError("We couldn't submit your comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <article className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1360px] gap-12 lg:grid-cols-[minmax(0,0.64fr)_minmax(22rem,0.36fr)] lg:items-start xl:gap-16">
          <div className="min-w-0">
            <FeaturedImage post={currentPost} />
            <header className="mt-8 max-w-[820px]">
              {category ? <CategoryChip category={category} /> : null}
              <h1 className="mt-4 text-[clamp(2.35rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-normal text-[#18181b]">{currentPost.title}</h1>
              {currentPost.excerpt ? <p className="mt-5 text-[1.08rem] leading-8 text-[#5f5a56] sm:text-[1.15rem]">{currentPost.excerpt}</p> : null}
              <ArticleMeta post={currentPost} />
            </header>
            <div className="admin-article-body mt-12 max-w-[820px] text-[1.08rem] leading-8 text-[#332f2b] sm:text-[1.13rem] sm:leading-9" dangerouslySetInnerHTML={{ __html: currentPost.content ?? '' }} />
          </div>
          {related.length || categories.length ? <TrendingSidebar posts={related} categories={categories} /> : null}
        </div>
      </article>
      {currentPost.allow_comments ? <CommentsSection comments={comments} errors={errors} message={message} submitError={submitError} submitting={submitting} values={values} onChange={updateValue} onSubmit={submitComment} /> : null}
      <FinalCTA heading="Need Help With Your Digital Project?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" /><Footer />
    </>
  );
}

function FeaturedImage({ post }: { post: PublicBlogPost }) {
  if (!post.featured_image_url) return <div className="grid aspect-[16/10] w-full place-items-center rounded-[0.85rem] bg-[#f7f7f6] text-[#766e67]"><ImageIcon className="size-10" aria-hidden="true" /><span className="sr-only">No featured image available</span></div>;
  return <img className="aspect-[16/10] w-full rounded-[0.85rem] object-cover object-center" src={post.featured_image_url} alt={post.featured_image_alt || post.title} loading="eager" decoding="async" />;
}

function ArticleMeta({ post }: { post: PublicBlogPost }) {
  const author = post.author_name || 'Laybrotech Team';
  return (
    <div className="mt-7 flex flex-col gap-4 border-y border-[#e8e8e8] py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fff0e8] text-sm font-bold uppercase text-[#b84608]" aria-hidden="true">{getInitials(author)}</div>
        <div>
          <p className="text-sm font-bold text-[#18181b]">{author}</p>
          <p className="mt-0.5 text-sm text-[#766e67]">Laybrotech Team</p>
        </div>
      </div>
      <p className="text-sm font-bold uppercase leading-6 text-[#766e67]">{formatDate(post.published_at ?? post.scheduled_at)} · {calculateReadTime(post.content)} min read</p>
    </div>
  );
}

function CategoryChip({ category }: { category: NonNullable<PublicBlogPost['blog_categories']> }) {
  return <Link className="inline-flex rounded-full bg-[#fff0e8] px-3 py-1.5 text-xs font-bold uppercase tracking-normal text-[#d94f04] transition-colors hover:bg-[#f25a05] hover:text-white" to={`/blog/category/${category.slug}`}>{category.name}</Link>;
}

function TrendingSidebar({ posts, categories }: { posts: PublicBlogPost[]; categories: PublicBlogCategory[] }) {
  return (
    <aside className="lg:sticky lg:top-24" aria-labelledby="trending-articles-heading">
      <div className="overflow-hidden rounded-[0.75rem] bg-[#18181b]">
        <div className="bg-[linear-gradient(135deg,#f25a05_0%,#c94305_46%,#18181b_46%,#18181b_100%)] px-5 py-6">
          <h2 id="trending-articles-heading" className="max-w-[13rem] text-2xl font-semibold leading-tight text-white">Trending on Laybrotech</h2>
        </div>
      </div>
      {posts.length ? <div className="mt-5 divide-y divide-[#e8e8e8]">
        {posts.map((post) => <TrendingItem key={post.id} post={post} />)}
      </div> : null}
      {categories.length ? <CategoryShortcuts categories={categories} /> : null}
    </aside>
  );
}

function CategoryShortcuts({ categories }: { categories: PublicBlogCategory[] }) {
  return (
    <section className="mt-8 border-t border-[#e8e8e8] pt-6" aria-labelledby="article-categories-heading">
      <h2 id="article-categories-heading" className="text-lg font-semibold text-[#18181b]">Categories</h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => <Link key={category.id} className="rounded-full bg-[#fff0e8] px-3 py-1.5 text-xs font-bold uppercase tracking-normal text-[#d94f04] transition-colors hover:bg-[#f25a05] hover:text-white" to={`/blog/category/${category.slug}`}>{category.name}</Link>)}
      </div>
    </section>
  );
}
function TrendingItem({ post }: { post: PublicBlogPost }) {
  const category = post.blog_categories;
  return (
    <article>
      <Link className="group grid cursor-pointer gap-4 py-5 first:pt-0 md:grid-cols-[9.5rem_minmax(0,1fr)] lg:grid-cols-[8.5rem_minmax(0,1fr)] xl:grid-cols-[10rem_minmax(0,1fr)]" to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        <span className="overflow-hidden rounded-[0.5rem] bg-[#f7f7f6]"><img className="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.018]" src={post.featured_image_url ?? ''} alt={post.featured_image_alt || post.title} loading="lazy" decoding="async" /></span>
        <span className="min-w-0">
          <span className="line-clamp-3 block text-[1rem] font-bold leading-6 text-[#18181b] transition-colors group-hover:text-[#f25a05]">{post.title}</span>
          <span className="mt-2 block text-xs font-bold uppercase leading-5 text-[#766e67]">{formatDate(post.published_at ?? post.scheduled_at)} · {calculateReadTime(post.content)} min read</span>
          {category ? <span className="mt-2 inline-flex text-xs font-bold text-[#f25a05]">{category.name}</span> : null}
        </span>
      </Link>
    </article>
  );
}

function CommentsSection({ comments, errors, message, submitError, submitting, values, onChange, onSubmit }: { comments: PublicBlogComment[]; errors: CommentErrors; message: string; submitError: string; submitting: boolean; values: { name: string; email: string; comment: string }; onChange: (field: keyof typeof values, value: string) => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return (
    <section className="bg-white px-5 pb-16 sm:px-6 sm:pb-20 lg:pb-24" aria-labelledby="comments-heading">
      <div className="mx-auto w-full max-w-[820px] border-t border-[#eaeaea] pt-12 sm:pt-14">
        <h2 id="comments-heading" className="text-[1.75rem] font-semibold leading-tight text-[#18181b]">Comments{comments.length ? ` (${comments.length})` : ''}</h2>
        <div className="mt-6">{comments.length ? <div className="divide-y divide-[#eaeaea]">{comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)}</div> : <p className="text-[1rem] leading-7 text-[#5f5a56]">No comments yet. Be the first to share your thoughts.</p>}</div>
        <form className="mt-10" onSubmit={onSubmit} noValidate>
          <div><h3 className="text-[1.55rem] font-semibold leading-tight text-[#18181b]">Leave a Comment</h3><p className="mt-2 text-sm leading-6 text-[#766e67]">Your email address will not be published.</p></div>
          <div aria-live="polite" className="mt-6 space-y-3">{message ? <p className="inline-flex items-start gap-2 rounded-[0.75rem] border border-[#b8e2c2] bg-[#f0fbf3] px-4 py-3 text-sm font-bold leading-6 text-[#166534]"><CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{message}</p> : null}{submitError ? <p className="inline-flex items-start gap-2 rounded-[0.75rem] border border-[#f3c4be] bg-[#fff5f4] px-4 py-3 text-sm font-bold leading-6 text-[#b42318]"><AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{submitError}</p> : null}</div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2"><CommentField label="Name" error={errors.name}><input className={fieldClass(Boolean(errors.name))} value={values.name} placeholder="Your name" autoComplete="name" onChange={(event) => onChange('name', event.target.value)} /></CommentField><CommentField label="Email" error={errors.email}><input className={fieldClass(Boolean(errors.email))} type="email" value={values.email} placeholder="you@example.com" autoComplete="email" onChange={(event) => onChange('email', event.target.value)} /></CommentField></div>
          <CommentField label="Comment" error={errors.comment}><textarea className={fieldClass(Boolean(errors.comment), true)} value={values.comment} placeholder="Share your thoughts..." maxLength={1200} onChange={(event) => onChange('comment', event.target.value)} /></CommentField>
          <button className="mt-6 inline-flex h-11 items-center justify-center rounded-[0.65rem] bg-[#f25a05] px-5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#d94f04] disabled:cursor-not-allowed disabled:bg-[#f6b38c]" type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Comment'}</button>
        </form>
      </div>
    </section>
  );
}

function CommentItem({ comment }: { comment: PublicBlogComment }) {
  return <article className="flex gap-4 py-6 first:pt-0"><div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff0e8] text-sm font-bold uppercase text-[#b84608]" aria-hidden="true">{getInitials(comment.name)}</div><div className="min-w-0"><div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 className="text-[1rem] font-bold leading-6 text-[#18181b]">{comment.name}</h3><p className="text-sm text-[#766e67]">{formatDate(comment.created_at)}</p></div><p className="mt-2 text-[1rem] leading-7 text-[#332f2b]">{comment.comment}</p></div></article>;
}

function CommentField({ label, error, children }: { label: string; error?: string; children: ReactNode }) { return <label className="mt-5 block"><span className="text-sm font-bold text-[#18181b]">{label}</span><span className="mt-2 block">{children}</span>{error ? <span className="mt-2 block text-sm font-bold text-[#b42318]">{error}</span> : null}</label>; }
function fieldClass(error: boolean, multiline = false) { return 'w-full rounded-[0.65rem] border bg-white px-4 text-[0.95rem] font-medium text-[#18181b] outline-none transition-colors placeholder:text-[#aaa29a] focus:border-[#f25a05] focus:ring-2 focus:ring-[#f25a05]/10 ' + (multiline ? 'min-h-[9rem] resize-y py-3 leading-7 ' : 'h-11 ') + (error ? 'border-[#b42318]' : 'border-[#e1ddd8]'); }
function getInitials(name: string) { const parts = name.trim().split(/\s+/).filter(Boolean); return ((parts[0]?.[0] ?? '?') + (parts[1]?.[0] ?? '')).toUpperCase(); }
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) { let el = document.head.querySelector<HTMLMetaElement>(selector); if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); } el.setAttribute('content', content); }
function setCanonical(href: string) { let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]'); if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); } el.href = href; }




