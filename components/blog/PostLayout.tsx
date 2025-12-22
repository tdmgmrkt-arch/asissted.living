import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Post, PostMeta } from '@/types/blog';
import { PostContent } from './PostContent';
import { RelatedPosts } from './RelatedPosts';
import { formatDate } from '@/lib/blog';

interface PostLayoutProps {
  post: Post;
  relatedPosts: PostMeta[];
}

export function PostLayout({ post, relatedPosts }: PostLayoutProps) {
  return (
    <article>
      {/* Hero Section with Featured Image */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-end overflow-hidden bg-gray-900">
        {post.featuredImage && (
          <>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </>
        )}

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge
                  key={category}
                  className="bg-[#CD7B00] text-white border-none text-sm rounded-full px-4 py-1"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight">
              {post.title}
            </h1>

            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-white/30"
                  />
                )}
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  {post.author.role && (
                    <p className="text-white/70 text-sm">{post.author.role}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <PostContent content={post.content} />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-[#FDF8F2]/50 border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}
    </article>
  );
}
