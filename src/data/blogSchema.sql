-- Supabase-ready schema for the Laybrotech blog system.
-- This repository currently has no Supabase client/env configured, so the app uses typed seed data + localStorage until connected.

create table if not exists blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  featured_image_url text,
  status text not null check (status in ('draft', 'published')) default 'draft',
  category_id uuid references blog_categories(id),
  author_name text not null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  seo_title text,
  seo_description text,
  is_featured boolean not null default false
);

create table if not exists blog_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references blog_posts(id) on delete cascade,
  name text not null,
  email text not null,
  comment text not null,
  status text not null check (status in ('pending', 'approved', 'rejected')) default 'pending',
  created_at timestamptz not null default now()
);

alter table blog_categories enable row level security;
alter table blog_posts enable row level security;
alter table blog_comments enable row level security;

-- Public policies:
-- create policy "Read categories" on blog_categories for select using (true);
-- create policy "Read published posts" on blog_posts for select using (status = 'published');
-- create policy "Read approved comments" on blog_comments for select using (status = 'approved');
-- create policy "Create pending comments" on blog_comments for insert with check (status = 'pending');

-- Admin policies should be restricted to authenticated Laybrotech admins via Supabase Auth / custom claims.
