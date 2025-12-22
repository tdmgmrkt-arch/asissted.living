import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { PostMeta } from '@/types/blog';
import { formatDate } from '@/lib/blog';

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="bg-white shadow-lg hover:shadow-xl border border-gray-100/80 transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden h-full flex flex-col">
        {post.featuredImage && (
          <div className="relative w-full h-48 overflow-hidden bg-gray-100">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.categories.slice(0, 2).map((category) => (
              <Badge
                key={category}
                className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 text-xs rounded-full"
              >
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {post.author.name.split(',')[0]}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
