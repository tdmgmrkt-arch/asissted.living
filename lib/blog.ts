import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post, PostMeta } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Get all post slugs for static generation
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

// Get metadata for all posts (for listing page)
export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is PostMeta => post !== null && post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

// Get single post metadata without content
export function getPostMeta(slug: string): PostMeta | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      author: data.author,
      categories: data.categories || [],
      relatedSlugs: data.relatedSlugs || [],
      published: data.published !== false,
    };
  } catch {
    return null;
  }
}

// Get full post with rendered content
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      author: data.author,
      categories: data.categories || [],
      relatedSlugs: data.relatedSlugs || [],
      published: data.published !== false,
      content: contentHtml,
    };
  } catch {
    return null;
  }
}

// Get related posts by slugs
export function getRelatedPosts(slugs: string[]): PostMeta[] {
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is PostMeta => post !== null && post.published !== false);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();
  posts.forEach((post) => {
    post.categories.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories).sort();
}

// Get posts by category
export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((post) => post.categories.includes(category));
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
