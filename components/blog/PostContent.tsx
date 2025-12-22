interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <article
      className="prose prose-lg max-w-none
        prose-headings:text-gray-900 prose-headings:font-bold
        prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
        prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-4
        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg
        prose-a:text-[#CD7B00] prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-800
        prose-blockquote:border-l-4 prose-blockquote:border-l-[#CD7B00] prose-blockquote:bg-[#FDF8F2] prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-blockquote:my-8
        prose-ul:text-gray-600 prose-ul:text-base prose-ul:md:text-lg prose-ul:my-6
        prose-ol:text-gray-600 prose-ol:text-base prose-ol:md:text-lg prose-ol:my-6
        prose-li:marker:text-[#CD7B00] prose-li:my-2
        prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-gray-100/80 prose-img:my-8
        prose-hr:my-12 prose-hr:border-gray-200"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
