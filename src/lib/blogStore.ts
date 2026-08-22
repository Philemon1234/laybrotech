import { seedBlogCategories, seedBlogComments, seedBlogPosts, type BlogCategory, type BlogComment, type BlogPost, type BlogStatus, type CommentStatus } from '@/data/blogData';

const postsKey = 'laybrotech_blog_posts';
const categoriesKey = 'laybrotech_blog_categories';
const commentsKey = 'laybrotech_blog_comments';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readList<T>(key: string, fallback: T[]): T[] {
  if (!canUseStorage()) return fallback;
  const raw = window.localStorage.getItem(key);
  if (!raw) {
    window.localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try { return JSON.parse(raw) as T[]; } catch { return fallback; }
}

function writeList<T>(key: string, value: T[]) {
  if (canUseStorage()) window.localStorage.setItem(key, JSON.stringify(value));
}
function mergeSeedItems<T extends { id: string }>(stored: T[], seeds: T[], key: string) {
  const missingSeeds = seeds.filter((seed) => !stored.some((item) => item.id === seed.id));
  if (!missingSeeds.length) return stored;
  const next = [...missingSeeds, ...stored];
  writeList(key, next);
  return next;
}

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function getBlogCategories() { return mergeSeedItems(readList<BlogCategory>(categoriesKey, seedBlogCategories), seedBlogCategories, categoriesKey); }
export function saveBlogCategories(categories: BlogCategory[]) { writeList(categoriesKey, categories); }
export function getBlogPosts() { return mergeSeedItems(readList<BlogPost>(postsKey, seedBlogPosts), seedBlogPosts, postsKey); }
export function saveBlogPosts(posts: BlogPost[]) { writeList(postsKey, posts); }
export function getBlogComments() { return readList<BlogComment>(commentsKey, seedBlogComments); }
export function saveBlogComments(comments: BlogComment[]) { writeList(commentsKey, comments); }

export function getPublishedPosts() {
  return getBlogPosts().filter((post) => post.status === 'published').sort((a, b) => dateValue(b.publishedAt || b.updatedAt) - dateValue(a.publishedAt || a.updatedAt));
}

export function findPostBySlug(slug: string) { return getBlogPosts().find((post) => post.slug === slug && post.status === 'published'); }
export function findPostById(id: string) { return getBlogPosts().find((post) => post.id === id); }
export function getCategoryById(id: string) { return getBlogCategories().find((category) => category.id === id); }
export function getApprovedComments(postId: string) { return getBlogComments().filter((comment) => comment.postId === postId && comment.status === 'approved'); }

export function addPendingComment(input: Pick<BlogComment, 'postId' | 'name' | 'email' | 'comment'>) {
  const comments = getBlogComments();
  const next: BlogComment = { ...input, id: 'comment-' + Date.now(), status: 'pending', createdAt: new Date().toISOString() };
  saveBlogComments([next, ...comments]);
  return next;
}

export function upsertPost(input: BlogPost) {
  const posts = getBlogPosts();
  const exists = posts.some((post) => post.id === input.id);
  const next = exists ? posts.map((post) => (post.id === input.id ? input : post)) : [input, ...posts];
  saveBlogPosts(next);
}

export function deletePost(id: string) {
  saveBlogPosts(getBlogPosts().filter((post) => post.id !== id));
  saveBlogComments(getBlogComments().filter((comment) => comment.postId !== id));
}

export function setPostStatus(id: string, status: BlogStatus) {
  const now = new Date().toISOString();
  saveBlogPosts(getBlogPosts().map((post) => post.id === id ? { ...post, status, publishedAt: status === 'published' && !post.publishedAt ? now : post.publishedAt, updatedAt: now } : post));
}

export function setCommentStatus(id: string, status: CommentStatus) {
  saveBlogComments(getBlogComments().map((comment) => comment.id === id ? { ...comment, status } : comment));
}

export function deleteComment(id: string) { saveBlogComments(getBlogComments().filter((comment) => comment.id !== id)); }

export function uniqueSlug(base: string, currentId?: string) {
  const root = slugify(base) || 'post';
  const posts = getBlogPosts();
  let candidate = root;
  let index = 2;
  while (posts.some((post) => post.slug === candidate && post.id !== currentId)) {
    candidate = root + '-' + index;
    index += 1;
  }
  return candidate;
}

export function calculateReadTime(content: string) {
  const words = content.replace(/[#>*_`-]/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatDate(value: string) {
  if (!value) return 'Unpublished';
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value));
}

export function dateValue(value: string) { return value ? new Date(value).getTime() : 0; }

export function getRelatedPosts(current: BlogPost, limit = 4) {
  const posts = getPublishedPosts().filter((post) => post.id !== current.id);
  return [...posts.filter((post) => post.categoryId === current.categoryId), ...posts.filter((post) => post.categoryId !== current.categoryId)].slice(0, limit);
}


