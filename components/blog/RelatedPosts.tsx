import { Badge } from '@/components/ui/badge';
import { PostCard } from './PostCard';
import { PostMeta } from '@/types/blog';

interface RelatedPostsProps {
  posts: PostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-4 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
          Continue Reading
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Related Articles
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
