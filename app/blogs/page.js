import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import Pagination from "@components/Pagination";

const { blog_folder, pagination } = config.settings;

// Blog page
const BlogPage = async () => {
  const posts = await getSinglePage(`content/${blog_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  const { frontmatter } = postIndex;
  const { title, description } = frontmatter;

  // Lấy 6 bài đầu tiên cho trang 1
  const currentPosts = posts.slice(0, pagination);
  const totalPages = Math.ceil(posts.length / pagination);

  return (
    <>
      <SeoMeta title={title} description={description} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Featured Image */}
                {post.frontmatter.image && (
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>
                        {new Date(post.frontmatter.date).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-4 h-4" />
                      <span>5 phút đọc</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    <Link href={`/${blog_folder}/${post.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.frontmatter.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/${blog_folder}/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn"
                  >
                    Đọc thêm
                    <svg 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination section={blog_folder} totalPages={totalPages} currentPage={1} />
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-br from-[#e0e7ff] via-[#a5b4fc] to-[#6366f1] rounded-3xl p-8 md:p-12 text-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/60 pointer-events-none rounded-3xl" />
            <div className="relative max-w-2xl mx-auto text-center z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Đăng ký nhận tin tức mới nhất</h3>
              <p className="text-gray-700 mb-8 text-lg">Nhận những bài viết mới nhất và cập nhật từ chúng tôi qua email</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
