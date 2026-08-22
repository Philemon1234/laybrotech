import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { calculateReadTime, formatDate, getCategoryById, getPublishedPosts } from '@/lib/blogStore';
import type { BlogPost } from '@/data/blogData';

export function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24" aria-label="Blog articles">
        <div className="mx-auto w-full max-w-container">
          {posts.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          ) : <EmptyBlogState compact />}
        </div>
      </section>

      <FinalCTA heading="Need Help With Your Digital Project?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  const category = getCategoryById(post.categoryId);
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#e7e2dd] bg-white shadow-[0_14px_36px_rgb(24_24_27/0.05)] transition-colors duration-200 hover:border-[#f25a05]/35">
      <Link className="overflow-hidden bg-[#f7f7f6]" to={`/blog/${post.slug}`}><img className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.018]" src={post.featuredImageUrl} alt="" loading="lazy" decoding="async" /></Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-normal text-[#f25a05]">{category?.name ?? 'Insights'}</p>
        <h3 className="mt-3 text-[1.35rem] font-semibold leading-tight text-[#18181b]"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p className="mt-3 text-sm leading-6 text-[#5f5a56]">{post.excerpt}</p>
        <p className="mt-4 text-xs font-bold uppercase text-[#766e67]">{formatDate(post.publishedAt)} - {calculateReadTime(post.content)} min read</p>
        <Link className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]" to={`/blog/${post.slug}`}>Read Article<ArrowRight className="size-4 transition-transform duration-smooth group-hover/link:translate-x-1" aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

function EmptyBlogState({ compact = false }: { compact?: boolean }) {
  return <div className={'mx-auto max-w-[42rem] rounded-[1.35rem] border border-[#ead8c8] bg-white p-8 text-center shadow-[0_18px_45px_rgb(63_45_30/0.06)] ' + (compact ? 'mt-10' : 'my-20')}><Search className="mx-auto size-10 text-[#f25a05]" aria-hidden="true" /><h2 className="mt-4 text-2xl font-semibold text-[#18181b]">No published articles yet.</h2><p className="mt-3 text-base leading-7 text-[#5f5a56]">Published Laybrotech insights will appear here.</p></div>;
}
