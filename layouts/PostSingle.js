import { markdownify } from "@lib/utils/textConverter";
import MDXContent from "app/helper/MDXContent";
import Image from "next/image";
import SeoMeta from "./SeoMeta";
import { FaCalendarAlt, FaClock, FaUser, FaShare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const PostSingle = ({ frontmatter, content }) => {
  let { description, title, image, date } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <>
      <SeoMeta title={title} description={description} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
              
              {/* Meta Info */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>
                    {new Date(date).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>5 phút đọc</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="w-full flex justify-center px-2 md:px-4">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <article className="lg:col-span-3">
                {/* Featured Image */}
              {image && (
                  <div className="mb-8">
                <Image
                  src={image}
                  alt={title}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-2xl shadow-lg"
                  priority={true}
                />
                  </div>
              )}

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                <MDXContent content={content} />
              </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Chia sẻ bài viết:</h3>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <FaFacebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                        <FaTwitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                        <FaLinkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
            </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Author Info */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tác giả</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaUser className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Admin</h4>
                        <p className="text-sm text-gray-600">Chuyên gia nội dung</p>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Bài viết liên quan</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-gray-300 rounded-lg"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                            <Link href="#" className="hover:text-blue-600">
                              Tiêu đề bài viết liên quan
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500">2 ngày trước</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-gray-300 rounded-lg"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                            <Link href="#" className="hover:text-blue-600">
                              Tiêu đề bài viết liên quan khác
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500">1 tuần trước</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#a5b4fc] to-[#6366f1] rounded-2xl p-6 text-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/60 pointer-events-none rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Đăng ký nhận tin</h3>
                      <p className="text-gray-700 text-sm mb-4">Nhận những bài viết mới nhất qua email</p>
                      <input
                        type="email"
                        placeholder="Email của bạn"
                        className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <button className="w-full mt-3 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
