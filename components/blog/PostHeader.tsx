import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Post } from '@/types/blog';
import { formatDate } from '@/lib/blog';

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="mb-8">
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map((category) => (
          <Badge
            key={category}
            className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 text-sm rounded-full"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
        {post.title}
      </h1>

      {/* Meta: Date & Author */}
      <div className="flex flex-wrap items-center gap-6 text-gray-600">
        <span className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-[#CD7B00]" />
          {formatDate(post.date)}
        </span>
        <div className="flex items-center gap-3">
          {post.author.avatar && (
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full object-cover border-2 border-white shadow-sm"
            />
          )}
          <div>
            <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
            {post.author.role && (
              <p className="text-xs text-[#CD7B00]">{post.author.role}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
