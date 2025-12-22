import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PostCard } from '@/components/blog/PostCard';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import {
  Phone, Mail, Award, Calendar, Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Senior Care Resources | Assisted Living',
  description: 'Expert articles and guides about assisted living, senior care, and family resources from our experienced care team.',
};

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white text-gray-700 overflow-x-hidden antialiased">

      {/* ## Header ## */}
      <header className="border-b border-gray-100/80 sticky top-0 bg-white/95 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/senior-care-logo.webp"
                alt="Senior Care Logo"
                width={180}
                height={72}
                className="h-14 w-auto"
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium">
              <Link href="/#about" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">About Us</Link>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#CD7B00] transition-colors duration-200 text-sm font-medium">
                  <span>Locations</span>
                  <svg
                    className="w-4 h-4 fill-current text-gray-400 group-hover:text-[#CD7B00] transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-40 bg-white rounded-md shadow-lg pt-3 pb-1 z-20 hidden group-hover:block ring-1 ring-black ring-opacity-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Link
                    href="/murrieta"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] transition-colors duration-150"
                  >
                    Murrieta
                  </Link>
                  <Link
                    href="/temecula"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] transition-colors duration-150"
                  >
                    Temecula
                  </Link>
                </div>
              </div>

              <Link href="/#homes" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Our Homes</Link>
              <Link href="/#team" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Our Team</Link>
              <Link href="/blog" className="text-[#CD7B00] font-semibold">Blog</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Contact</Link>
            </nav>

            {/* Button */}
            <Button asChild className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md shadow-[#CD7B00]/20 hover:shadow-lg hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-px text-sm px-5 py-2.5 rounded-md">
              <Link href="/#contact">
                Schedule Consultation
              </Link>
            </Button>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden bg-gray-900">
        <Image
          src="/caretaker2.webp"
          alt="Senior care resources"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        <div className="relative z-10 w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <Badge className="bg-[#CD7B00] text-white border-none mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Senior Care Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight max-w-3xl leading-tight">
              Resources for Families
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Expert insights, care guides, and helpful tips from our experienced team to support your senior care journey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <section className="py-8 border-b border-gray-100/80 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-start">
              <Badge className="bg-[#CD7B00] text-white border border-[#CD7B00] px-5 py-2 text-sm rounded-full">
                All Posts
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  className="bg-white text-gray-600 border border-gray-200 px-5 py-2 text-sm rounded-full cursor-pointer hover:border-[#CD7B00] hover:text-[#CD7B00] transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16">
                  {/* Previous Button */}
                  {currentPage > 1 ? (
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#CD7B00] transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed">
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </span>
                  )}

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Link
                        key={page}
                        href={`/blog?page=${page}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                          page === currentPage
                            ? 'bg-[#CD7B00] text-white'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-[#CD7B00]'
                        }`}
                      >
                        {page}
                      </Link>
                    ))}
                  </div>

                  {/* Next Button */}
                  {currentPage < totalPages ? (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#CD7B00] transition-colors"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed">
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#CD7B00]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Have Questions About Senior Care?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our compassionate team is here to help guide you through every step of your senior care journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-[#B56D00] hover:bg-gray-100">
                <a href="tel:9512999978">
                  <Phone className="mr-2 h-5 w-5" /> Call (951) 299-9978
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                <Link href="/#contact">
                  <Calendar className="mr-2 h-5 w-5" /> Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ## Footer ## */}
      <footer className="bg-gray-800 text-gray-300 pt-16 pb-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Brand Block */}
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="block">
                <Image
                  src="/senior-care-logo.webp"
                  alt="Senior Care Logo"
                  width={180}
                  height={70}
                  className="w-auto h-14 opacity-95"
                  style={{ objectFit: "contain" }}
                />
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed">
                Providing compassionate assisted living choices across Temecula, Murrieta, and surrounding areas.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#CD7B00]" />
                  <a href="tel:9512999978" className="hover:text-white">(951) 299-9978</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#CD7B00]" />
                  <a href="mailto:ie@seniorcareauthority.com" className="hover:text-white">ie@seniorcareauthority.com</a>
                </li>
              </ul>

              <div className="flex items-center space-x-4 pt-2">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Utility Block */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">

                <div>
                  <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Our Homes</h4>
                  <ul className="space-y-2 leading-relaxed">
                    <li><Link href="/murrieta" className="hover:text-white">Murrieta Location</Link></li>
                    <li><Link href="/temecula" className="hover:text-white">Temecula Location</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Quick Links</h4>
                  <ul className="space-y-2 leading-relaxed">
                    <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
                    <li><Link href="/#team" className="hover:text-white">Our Team</Link></li>
                    <li><Link href="/#services" className="hover:text-white">Services</Link></li>
                    <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                    <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Information</h4>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#CD7B00]" />
                      <span>Licensed Facilities</span>
                    </li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-10">
            <div className="text-center text-xs text-gray-500">
              <p>© {new Date().getFullYear()} Senior Care Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
