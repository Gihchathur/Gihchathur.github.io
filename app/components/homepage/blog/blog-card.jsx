// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      
      {/* Cover Image */}
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt={blog?.title || 'Blog cover'}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 flex flex-col">
        
        {/* Date + Platform */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>

          <span className="text-xs border border-[#16f2b3] px-2 py-1 rounded-full">
            {blog.platform}
          </span>
        </div>

        {/* Title */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={blog.url}
        >
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {blog.title}
          </p>
        </Link>

        {/* Category / Tags */}
        {blog.category && (
          <p className="mb-2 text-sm text-[#16f2b3]">
            {blog.category}
          </p>
        )}

        {/* Description */}
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog.description}
        </p>

        {/* Read Article */}
        <div className="mt-auto">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={blog.url}
            className="inline-block text-sm text-white hover:text-violet-500 transition-colors duration-300"
          >
            Read Article →
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BlogCard;