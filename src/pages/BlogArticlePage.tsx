import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/sections/home/FinalCTA';
import type { BlogComment, BlogPost } from '@/data/blogData';
import { addPendingComment, calculateReadTime, findPostBySlug, formatDate, getApprovedComments, getCategoryById, getRelatedPosts } from '@/lib/blogStore';


type CommentErrors = Partial<Record<'name' | 'email' | 'comment', string>>;

export function BlogArticlePage() {
  const { slug = '' } = useParams();
  const post = findPostBySlug(slug);
  const [comments, setComments] = useState<BlogComment[]>(post ? getApprovedComments(post.id) : []);
  const [values, setValues] = useState({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useState<CommentErrors>({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!post) return;
    const title = post.seoTitle || post.title;
    const description = post.seoDescription || post.excerpt;
    document.title = title + ' | Laybrotech';
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:image"]', 'property', 'og:image', post.featuredImageUrl);
  }, [post]);

  if (!post) {
    return <><section className="bg-white px-5 py-28 sm:px-6 lg:py-32"><div className="mx-auto max-w-[46rem] text-center"><p className="type-eyebrow">Article Not Found</p><h1 className="mt-4 text-[2.45rem] font-semibold leading-tight text-[#18181b]">This article is not available.</h1><Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f25a05]" to="/blog"><ArrowLeft className="size-4" />Back to Blog</Link></div></section><Footer /></>;
  }

  const currentPost = post;
  const category = getCategoryById(currentPost.categoryId);
  const related = getRelatedPosts(currentPost, 4);

  function updateValue(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setMessage('');
  }

  function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: CommentErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) nextErrors.email = 'Enter a valid email.';
    if (!values.comment.trim()) nextErrors.comment = 'Comment is required.';
    else if (values.comment.length > 1200) nextErrors.comment = 'Comment must be 1200 characters or fewer.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    addPendingComment({ postId: currentPost.id, name: values.name.trim(), email: values.email.trim(), comment: values.comment.trim() });
    setValues({ name: '', email: '', comment: '' });
    setComments(getApprovedComments(currentPost.id));
    setMessage('Thanks. Your comment will appear after review.');
  }

  return (
    <>
      <article>
        <section className="bg-[#18181b]" aria-labelledby="article-heading">
          <div className="relative flex min-h-[78vh] w-full items-center justify-center overflow-hidden bg-[#18181b] sm:min-h-[82vh] lg:min-h-[calc(90vh-80px)]">
            <img className="absolute inset-0 h-full w-full object-cover object-center" src={currentPost.featuredImageUrl} alt="" loading="eager" decoding="async" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_10_10/0.38)_0%,rgb(10_10_10/0.54)_52%,rgb(10_10_10/0.68)_100%)]" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-[58rem] px-6 py-14 text-center sm:px-10">
              <p className="text-xs font-bold uppercase tracking-normal text-[#ff7a2b]">{category?.name ?? 'Insights'}</p>
              <h1 id="article-heading" className="mt-4 text-[clamp(2.6rem,8vw,4.4rem)] font-semibold leading-[1.05] text-white">{currentPost.title}</h1>
              <p className="mx-auto mt-5 max-w-[45rem] text-base leading-7 text-[#f4ebe4] sm:text-lg sm:leading-8">{currentPost.excerpt}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-normal text-[#d8d0c8]">{currentPost.authorName} - {formatDate(currentPost.publishedAt)} - {calculateReadTime(currentPost.content)} min read</p>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto grid w-full max-w-container gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(17rem,0.3fr)] lg:items-start">
            <div className="min-w-0 text-[1.06rem] leading-8 text-[#332f2b] sm:text-[1.1rem] sm:leading-9">
              {renderContent(currentPost.content)}
            </div>
            {related.length ? <RelatedSidebar posts={related} /> : null}
          </div>
        </section>
      </article>

      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24" aria-labelledby="comment-form-heading">
        <div className="mx-auto w-full max-w-[46rem]">
          {comments.length ? <div className="mb-10 grid gap-4">{comments.map((comment) => <div className="border-b border-[#ead8c8] pb-5" key={comment.id}><p className="font-bold text-[#18181b]">{comment.name}</p><p className="mt-1 text-xs font-bold uppercase text-[#766e67]">{formatDate(comment.createdAt)}</p><p className="mt-3 text-sm leading-6 text-[#5f5a56]">{comment.comment}</p></div>)}</div> : null}
          <form onSubmit={submitComment} noValidate>
            <h2 id="comment-form-heading" className="text-[1.8rem] font-semibold leading-tight text-[#18181b]">Leave a Comment</h2>
            <CommentField label="Name" error={errors.name}><input className={fieldClass(Boolean(errors.name))} value={values.name} autoComplete="name" onChange={(event) => updateValue('name', event.target.value)} /></CommentField>
            <CommentField label="Email" error={errors.email}><input className={fieldClass(Boolean(errors.email))} type="email" value={values.email} autoComplete="email" onChange={(event) => updateValue('email', event.target.value)} /></CommentField>
            <CommentField label="Comment" error={errors.comment}><textarea className={fieldClass(Boolean(errors.comment), true)} value={values.comment} maxLength={1200} onChange={(event) => updateValue('comment', event.target.value)} /></CommentField>
            {message ? <p className="mt-4 rounded-[0.85rem] border border-[#ead8c8] bg-white px-4 py-3 text-sm font-bold text-[#5f5a56]">{message}</p> : null}
            <button className="mt-6 inline-flex h-12 items-center justify-center rounded-button bg-[#f25a05] px-6 text-sm font-bold text-white transition-colors duration-smooth hover:bg-[#d94f04]" type="submit">Submit Comment</button>
          </form>
        </div>
      </section>

      <FinalCTA heading="Need Help With Your Digital Project?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

function RelatedSidebar({ posts }: { posts: BlogPost[] }) {
  return (
    <aside className="lg:sticky lg:top-28" aria-labelledby="related-articles-heading">
      <p className="type-eyebrow" id="related-articles-heading">Related Articles</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {posts.map((post) => <RelatedCard key={post.id} post={post} />)}
      </div>
    </aside>
  );
}

function RelatedCard({ post }: { post: BlogPost }) {
  const category = getCategoryById(post.categoryId);
  return (
    <Link className="group overflow-hidden rounded-[1rem] border border-[#e7e2dd] bg-white transition-colors duration-smooth hover:border-[#f25a05]/40" to={`/blog/${post.slug}`}>
      <img className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.018]" src={post.featuredImageUrl} alt="" loading="lazy" decoding="async" />
      <span className="block p-4">
        <span className="text-[0.67rem] font-bold uppercase tracking-normal text-[#f25a05]">{category?.name ?? 'Insights'}</span>
        <span className="mt-2 block text-sm font-semibold leading-5 text-[#18181b]">{post.title}</span>
        <span className="mt-2 block text-[0.72rem] font-bold uppercase text-[#766e67]">{formatDate(post.publishedAt)} - {calculateReadTime(post.content)} min read</span>
      </span>
    </Link>
  );
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, index) => renderBlock(block.trim(), index)).filter(Boolean);
}

function renderBlock(block: string, index: number) {
  if (!block) return null;
  if (block.startsWith('## ')) return <h2 className="mb-5 mt-12 text-[1.85rem] font-semibold leading-tight text-[#18181b] first:mt-0" key={index}>{renderInline(block.replace('## ', ''))}</h2>;
  if (block.startsWith('### ')) return <h3 className="mb-4 mt-9 text-[1.35rem] font-semibold leading-tight text-[#18181b]" key={index}>{renderInline(block.replace('### ', ''))}</h3>;
  if (block.startsWith('> ')) return <blockquote className="my-8 border-l-4 border-[#f25a05] bg-[#fff4ed] px-5 py-4 font-semibold text-[#332f2b]" key={index}>{renderInline(block.replace(/^>\s?/gm, ''))}</blockquote>;
  if (block.startsWith('![')) return renderImage(block, index);
  if (isTable(block)) return renderTable(block, index);
  if (/^-\s+/m.test(block) && block.split('\n').every((line) => line.startsWith('- '))) return <ul className="my-7 list-disc space-y-2 pl-6" key={index}>{block.split('\n').map((item) => <li key={item}>{renderInline(item.replace('- ', ''))}</li>)}</ul>;
  if (/^\d+\.\s+/m.test(block) && block.split('\n').every((line) => /^\d+\.\s+/.test(line))) return <ol className="my-7 list-decimal space-y-2 pl-6" key={index}>{block.split('\n').map((item) => <li key={item}>{renderInline(item.replace(/^\d+\.\s+/, ''))}</li>)}</ol>;
  if (block.startsWith('```')) return <pre className="my-8 overflow-x-auto rounded-[1rem] bg-[#18181b] p-5 text-sm leading-6 text-[#fffaf5]" key={index}><code>{block.replace(/^```\w*\n?/, '').replace(/```$/, '')}</code></pre>;
  return <p className="mb-6 max-w-[48rem]" key={index}>{renderInline(block)}</p>;
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code className="rounded bg-[#fff4ed] px-1.5 py-0.5 text-[0.95em] text-[#18181b]" key={index}>{part.slice(1, -1)}</code>;
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) return <a className="font-bold text-[#f25a05] underline decoration-[#f25a05]/30 underline-offset-4 hover:text-[#d94f04]" href={link[2]} key={index}>{link[1]}</a>;
    return part;
  });
}

function isTable(block: string) {
  const lines = block.split('\n').filter(Boolean);
  return lines.length >= 2 && lines.every((line) => line.includes('|')) && /^\|?\s*:?-{3,}:?/.test(lines[1].trim());
}

function renderTable(block: string, index: number) {
  const rows = block.split('\n').map((line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim()));
  const header = rows[0];
  const body = rows.slice(2);
  return <div className="my-9 overflow-x-auto rounded-[1rem] border border-[#ead8c8]" key={index}><table className="min-w-[42rem] w-full border-collapse bg-white text-left text-sm leading-6"><thead className="bg-[#fff4ed] text-[#18181b]"><tr>{header.map((cell) => <th className="border-b border-[#ead8c8] px-4 py-3 font-bold" key={cell}>{renderInline(cell)}</th>)}</tr></thead><tbody>{body.map((row, rowIndex) => <tr className="border-b border-[#f0e2d6] last:border-b-0" key={rowIndex}>{row.map((cell, cellIndex) => <td className="px-4 py-3 align-top text-[#5f5a56]" key={cellIndex}>{renderInline(cell)}</td>)}</tr>)}</tbody></table></div>;
}

function renderImage(block: string, index: number) {
  const match = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(block);
  if (!match) return <p className="mb-6" key={index}>{block}</p>;
  return <img className="my-9 w-full rounded-[1.25rem] object-cover" src={match[2]} alt={match[1]} key={index} loading="lazy" decoding="async" />;
}

function CommentField({ label, error, children }: { label: string; error?: string; children: ReactNode }) { return <label className="mt-5 block"><span className="text-sm font-bold text-[#18181b]">{label}</span><span className="mt-2 block">{children}</span>{error ? <span className="mt-2 block text-sm font-bold text-[#b42318]">{error}</span> : null}</label>; }
function fieldClass(error: boolean, multiline = false) { return 'w-full rounded-[0.9rem] border bg-white px-4 text-sm font-semibold text-[#18181b] outline-none transition-colors focus:border-[#f25a05] focus:ring-4 focus:ring-[#f25a05]/10 ' + (multiline ? 'min-h-[9rem] py-3 ' : 'h-12 ') + (error ? 'border-[#b42318]' : 'border-[#e5ded6]'); }
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) { let el = document.head.querySelector<HTMLMetaElement>(selector); if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); } el.setAttribute('content', content); }



