import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Edit, MessageSquare, Plus, Trash2 } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import type { BlogCategory, BlogComment, BlogPost, BlogStatus, CommentStatus } from '@/data/blogData';
import { calculateReadTime, dateValue, deleteComment, deletePost, findPostById, formatDate, getBlogCategories, getBlogComments, getBlogPosts, getCategoryById, saveBlogCategories, setCommentStatus, setPostStatus, slugify, uniqueSlug, upsertPost } from '@/lib/blogStore';
import { cn } from '@/lib/cn';

const adminNav = [
  { label: 'Overview', href: '/admin/blog' },
  { label: 'New Post', href: '/admin/blog/new' },
  { label: 'Categories', href: '/admin/blog/categories' },
  { label: 'Comments', href: '/admin/blog/comments' },
];

export function AdminHomePage() { return <AdminShell title="Admin Dashboard" eyebrow="Laybrotech Admin"><div className="rounded-[1.35rem] border border-[#ead8c8] bg-white p-7"><h2 className="text-2xl font-semibold text-[#18181b]">Blog Management</h2><p className="mt-3 text-[#5f5a56]">Manage posts, categories, and moderated comments.</p><Link className="mt-6 inline-flex items-center gap-2 rounded-button bg-[#f25a05] px-5 py-3 text-sm font-bold text-white" to="/admin/blog">Open Blog Admin<ArrowRight className="size-4" /></Link></div></AdminShell>; }

export function AdminBlogPage() {
  const [posts, setPosts] = useState(getBlogPosts());
  const comments = getBlogComments();
  const stats = [
    ['Total Posts', posts.length], ['Published', posts.filter((p) => p.status === 'published').length], ['Drafts', posts.filter((p) => p.status === 'draft').length], ['Pending Comments', comments.filter((c) => c.status === 'pending').length],
  ];
  function remove(id: string) { if (window.confirm('Delete this post? Comments for this post will also be removed.')) { deletePost(id); setPosts(getBlogPosts()); } }
  function toggle(post: BlogPost) { setPostStatus(post.id, post.status === 'published' ? 'draft' : 'published'); setPosts(getBlogPosts()); }
  return <AdminShell title="Blog Overview" eyebrow="Admin Blog"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([label, value]) => <div className="rounded-[1.1rem] border border-[#ead8c8] bg-white p-5" key={label}><p className="text-xs font-bold uppercase text-[#f25a05]">{label}</p><p className="mt-2 text-3xl font-semibold text-[#18181b]">{value}</p></div>)}</div><div className="mt-8 overflow-x-auto rounded-[1.35rem] border border-[#ead8c8] bg-white"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#fbf7f2] text-xs uppercase text-[#766e67]"><tr><th className="p-4">Title</th><th>Category</th><th>Status</th><th>Published</th><th>Updated</th><th>Actions</th></tr></thead><tbody>{posts.sort((a,b)=>dateValue(b.updatedAt)-dateValue(a.updatedAt)).map((post) => <tr className="border-t border-[#ead8c8]" key={post.id}><td className="p-4 font-bold text-[#18181b]">{post.title}</td><td>{getCategoryById(post.categoryId)?.name ?? 'Uncategorised'}</td><td><span className={cn('rounded-full px-2.5 py-1 text-xs font-bold uppercase', post.status === 'published' ? 'bg-[#ecfdf3] text-[#15803d]' : 'bg-[#fff4ed] text-[#b84608]')}>{post.status}</span></td><td>{formatDate(post.publishedAt)}</td><td>{formatDate(post.updatedAt)}</td><td><div className="flex flex-wrap gap-2"><Link className="text-[#f25a05]" to={`/admin/blog/${post.id}/edit`}>Edit</Link><Link className="text-[#f25a05]" to={`/blog/${post.slug}`}>Preview</Link><button className="text-[#f25a05]" type="button" onClick={() => toggle(post)}>{post.status === 'published' ? 'Unpublish' : 'Publish'}</button><button className="text-[#b42318]" type="button" onClick={() => remove(post.id)}>Delete</button></div></td></tr>)}</tbody></table></div></AdminShell>;
}

export function AdminBlogEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const existing = id ? findPostById(id) : undefined;
  const categories = getBlogCategories();
  const [titleTouched, setTitleTouched] = useState(Boolean(existing));
  const [values, setValues] = useState<BlogPost>(existing ?? { id: 'post-' + Date.now(), title: '', slug: '', excerpt: '', content: '', featuredImageUrl: '', status: 'draft', categoryId: categories[0]?.id ?? '', authorName: 'Laybrotech Team', publishedAt: '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), seoTitle: '', seoDescription: '', isFeatured: false });
  function update(field: keyof BlogPost, value: string | boolean) { setValues((current) => ({ ...current, [field]: value })); }
  function submit(status: BlogStatus) {
    const now = new Date().toISOString();
    const slug = uniqueSlug(values.slug || values.title, values.id);
    upsertPost({ ...values, slug, status, publishedAt: status === 'published' && !values.publishedAt ? now : values.publishedAt, updatedAt: now });
    navigate('/admin/blog');
  }
  function handleTitle(value: string) { update('title', value); if (!titleTouched && !existing) update('slug', slugify(value)); }
  return <AdminShell title={existing ? 'Edit Blog Post' : 'Create Blog Post'} eyebrow="Blog Editor"><form className="grid gap-6 rounded-[1.35rem] border border-[#ead8c8] bg-white p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}><div className="grid gap-5 lg:grid-cols-2"><AdminField label="Title"><input className={inputClass} value={values.title} onChange={(e) => handleTitle(e.target.value)} required /></AdminField><AdminField label="Slug"><input className={inputClass} value={values.slug} onFocus={() => setTitleTouched(true)} onChange={(e) => update('slug', slugify(e.target.value))} /></AdminField></div><AdminField label="Excerpt"><textarea className={textareaClass} value={values.excerpt} onChange={(e) => update('excerpt', e.target.value)} /></AdminField><div className="grid gap-5 lg:grid-cols-2"><AdminField label="Featured Image URL"><input className={inputClass} value={values.featuredImageUrl} onChange={(e) => update('featuredImageUrl', e.target.value)} placeholder="Use a storage/public image URL" /></AdminField><AdminField label="Category"><select className={inputClass} value={values.categoryId} onChange={(e) => update('categoryId', e.target.value)}>{categories.map((cat) => <option value={cat.id} key={cat.id}>{cat.name}</option>)}</select></AdminField></div><div className="grid gap-5 lg:grid-cols-2"><AdminField label="Author"><input className={inputClass} value={values.authorName} onChange={(e) => update('authorName', e.target.value)} /></AdminField><AdminField label="Status"><select className={inputClass} value={values.status} onChange={(e) => update('status', e.target.value as BlogStatus)}><option value="draft">Draft</option><option value="published">Published</option></select></AdminField></div><AdminField label="Article Content (Markdown-style headings, lists and quotes)"><textarea className={textareaClass + ' min-h-[22rem]'} value={values.content} onChange={(e) => update('content', e.target.value)} /></AdminField><div className="grid gap-5 lg:grid-cols-2"><AdminField label="SEO Title"><input className={inputClass} value={values.seoTitle ?? ''} onChange={(e) => update('seoTitle', e.target.value)} /></AdminField><AdminField label="SEO Description"><input className={inputClass} value={values.seoDescription ?? ''} onChange={(e) => update('seoDescription', e.target.value)} /></AdminField></div><label className="flex items-center gap-3 text-sm font-bold text-[#18181b]"><input type="checkbox" checked={Boolean(values.isFeatured)} onChange={(e) => update('isFeatured', e.target.checked)} /> Featured Post</label>{values.featuredImageUrl ? <img className="max-h-[18rem] rounded-[1rem] object-cover" src={values.featuredImageUrl} alt="Featured preview" /> : null}<div className="flex flex-col gap-3 sm:flex-row"><button className="rounded-button border border-[#ead8c8] px-5 py-3 text-sm font-bold" type="button" onClick={() => submit('draft')}>Save Draft</button><button className="rounded-button bg-[#f25a05] px-5 py-3 text-sm font-bold text-white" type="button" onClick={() => submit('published')}>Publish</button><span className="text-sm text-[#766e67] sm:ml-auto">Approx. {calculateReadTime(values.content)} min read</span></div></form></AdminShell>;
}

export function AdminBlogCategoriesPage() {
  const [categories, setCategories] = useState(getBlogCategories());
  const [name, setName] = useState('');
  const posts = getBlogPosts();
  function add() { if (!name.trim()) return; const next = [...categories, { id: 'cat-' + Date.now(), name: name.trim(), slug: slugify(name), createdAt: new Date().toISOString() }]; saveBlogCategories(next); setCategories(next); setName(''); }
  function rename(id: string, value: string) { const next = categories.map((cat) => cat.id === id ? { ...cat, name: value, slug: slugify(value) } : cat); saveBlogCategories(next); setCategories(next); }
  function remove(id: string) { if (posts.some((post) => post.categoryId === id)) { alert('This category has posts. Reassign or delete those posts first.'); return; } const next = categories.filter((cat) => cat.id !== id); saveBlogCategories(next); setCategories(next); }
  return <AdminShell title="Blog Categories" eyebrow="Admin Blog"><div className="rounded-[1.35rem] border border-[#ead8c8] bg-white p-6"><div className="flex flex-col gap-3 sm:flex-row"><input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="New category name" /><button className="inline-flex items-center justify-center gap-2 rounded-button bg-[#f25a05] px-5 text-sm font-bold text-white" onClick={add} type="button"><Plus className="size-4" />Add</button></div><div className="mt-6 grid gap-3">{categories.map((category) => <div className="flex flex-col gap-3 rounded-[1rem] border border-[#ead8c8] p-4 sm:flex-row sm:items-center" key={category.id}><input className={inputClass} value={category.name} onChange={(e) => rename(category.id, e.target.value)} /><span className="text-sm text-[#766e67]">/{category.slug}</span><button className="text-[#b42318] sm:ml-auto" type="button" onClick={() => remove(category.id)}><Trash2 className="size-4" /></button></div>)}</div></div></AdminShell>;
}

export function AdminBlogCommentsPage() {
  const [comments, setComments] = useState(getBlogComments());
  const [filter, setFilter] = useState<CommentStatus | 'all'>('pending');
  const visible = filter === 'all' ? comments : comments.filter((comment) => comment.status === filter);
  function setStatus(id: string, status: CommentStatus) { setCommentStatus(id, status); setComments(getBlogComments()); }
  function remove(id: string) { if (window.confirm('Delete this comment?')) { deleteComment(id); setComments(getBlogComments()); } }
  return <AdminShell title="Blog Comments" eyebrow="Admin Blog"><div className="mb-5 flex flex-wrap gap-2">{(['pending','approved','rejected','all'] as const).map((item) => <button className={cn('rounded-full px-4 py-2 text-sm font-bold', filter === item ? 'bg-[#18181b] text-white' : 'bg-white text-[#5f5a56]')} onClick={() => setFilter(item)} type="button" key={item}>{item}</button>)}</div><div className="grid gap-4">{visible.map((comment) => <article className="rounded-[1.2rem] border border-[#ead8c8] bg-white p-5" key={comment.id}><div className="flex flex-wrap gap-3 text-sm"><strong>{comment.name}</strong><span>{comment.email}</span><span>{formatDate(comment.createdAt)}</span><span className="uppercase text-[#f25a05]">{comment.status}</span></div><p className="mt-3 text-[#5f5a56]">{comment.comment}</p><p className="mt-2 text-sm text-[#766e67]">Post: {findPostById(comment.postId)?.title ?? 'Unknown post'}</p><div className="mt-4 flex flex-wrap gap-2"><button className="text-[#15803d]" onClick={() => setStatus(comment.id, 'approved')} type="button">Approve</button><button className="text-[#b84608]" onClick={() => setStatus(comment.id, 'rejected')} type="button">Reject</button><button className="text-[#b42318]" onClick={() => remove(comment.id)} type="button">Delete</button></div></article>)}{!visible.length ? <p className="rounded-[1rem] bg-white p-5 text-[#5f5a56]">No comments in this view.</p> : null}</div></AdminShell>;
}

function AdminShell({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <main className="min-h-screen bg-[#fbf7f2] px-5 py-10 sm:px-6 lg:py-12"><div className="mx-auto w-full max-w-container"><div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="type-eyebrow">{eyebrow}</p><h1 className="mt-3 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem]">{title}</h1></div><nav className="flex flex-wrap gap-2">{adminNav.map((item) => <Link className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#18181b] shadow-[0_8px_20px_rgb(63_45_30/0.06)]" to={item.href} key={item.href}>{item.label}</Link>)}</nav></div>{children}</div></main>; }
function AdminField({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="text-sm font-bold text-[#18181b]">{label}</span><span className="mt-2 block">{children}</span></label>; }
const inputClass = 'h-12 w-full rounded-[0.9rem] border border-[#e5ded6] bg-white px-4 text-sm font-semibold text-[#18181b] outline-none focus:border-[#f25a05] focus:ring-4 focus:ring-[#f25a05]/10';
const textareaClass = 'w-full rounded-[0.9rem] border border-[#e5ded6] bg-white px-4 py-3 text-sm font-semibold text-[#18181b] outline-none focus:border-[#f25a05] focus:ring-4 focus:ring-[#f25a05]/10';
