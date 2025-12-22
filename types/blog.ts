export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  author: Author;
  categories: string[];
  relatedSlugs?: string[];
  published?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

export interface PostMeta extends Omit<Post, 'content'> {}
