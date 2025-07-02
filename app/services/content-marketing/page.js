'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContentMarketingPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              CONTENT MARKETING
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Xây dựng chiến lược nội dung toàn diện, thu hút khách hàng và tăng trưởng thương hiệu bền vững
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LĨNH VỰC</p>
                <p className="text-white font-semibold">DIGITAL MARKETING</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LOẠI HÌNH</p>
                <p className="text-white font-semibold">CONTENT STRATEGY</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">GIẢI PHÁP</p>
                <p className="text-white font-semibold">CONTENT GROWTH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'challenge'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Thách thức
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'solution'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Giải pháp
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'results'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Kết quả
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">VỀ DỊCH VỤ CONTENT MARKETING</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Content Marketing là chiến lược marketing hiện đại tập trung vào việc tạo ra và phân phối 
                nội dung có giá trị, phù hợp và nhất quán để thu hút và giữ chân đối tượng mục tiêu rõ ràng, 
                cuối cùng thúc đẩy hành động có lợi cho khách hàng.
              </p>
              <p className="text-gray-600 mb-6">
                Chúng tôi không chỉ tạo ra nội dung chất lượng mà còn xây dựng chiến lược nội dung toàn diện, 
                từ nghiên cứu thị trường, lập kế hoạch nội dung, sản xuất đa dạng format đến phân phối và 
                đo lường hiệu quả.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'challenge' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">THÁCH THỨC</h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">1. Tạo nội dung chất lượng liên tục</h3>
                <p className="text-red-700">
                  Việc duy trì chất lượng nội dung cao trong khi phải sản xuất liên tục là thách thức lớn. 
                  Cần có quy trình sản xuất hiệu quả và đội ngũ content creator chuyên nghiệp.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">2. Đo lường ROI của content</h3>
                <p className="text-yellow-700">
                  Content Marketing thường có ROI dài hạn, khó đo lường trực tiếp. Cần có hệ thống 
                  tracking và phân tích dữ liệu chuyên nghiệp để đánh giá hiệu quả.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Thích ứng với xu hướng mới</h3>
                <p className="text-blue-700">
                  Thị trường content thay đổi nhanh chóng với các format mới như video ngắn, podcast, 
                  interactive content. Cần liên tục cập nhật và thích ứng.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">GIẢI PHÁP TỪ CHÚNG TÔI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Chiến lược & Lập kế hoạch</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Nghiên cứu thị trường và đối thủ</li>
                    <li>• Xây dựng content calendar</li>
                    <li>• Định nghĩa tone of voice</li>
                    <li>• Lập kế hoạch phân phối</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Sản xuất nội dung đa dạng</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Blog articles và SEO content</li>
                    <li>• Video content và animation</li>
                    <li>• Infographic và visual content</li>
                    <li>• Social media content</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Phân phối & Tối ưu</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Multi-channel distribution</li>
                    <li>• SEO optimization</li>
                    <li>• Social media management</li>
                    <li>• Email marketing integration</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">Đo lường & Phân tích</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Content performance tracking</li>
                    <li>• Audience engagement analysis</li>
                    <li>• Conversion tracking</li>
                    <li>• ROI measurement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">KẾT QUẢ ĐẠT ĐƯỢC</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-lg">Tăng traffic</div>
                  <p className="text-sm mt-2 opacity-90">Từ organic search trong 6 tháng</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">150%</div>
                  <div className="text-lg">Tăng engagement</div>
                  <p className="text-sm mt-2 opacity-90">Trên social media platforms</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-lg">Tăng brand awareness</div>
                  <p className="text-sm mt-2 opacity-90">Theo khảo sát khách hàng</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">250%</div>
                  <div className="text-lg">Tăng lead generation</div>
                  <p className="text-sm mt-2 opacity-90">Từ content marketing</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            SẴN SÀNG XÂY DỰNG CHIẾN LƯỢC CONTENT MARKETING?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi giúp bạn tạo ra những nội dung có giá trị và xây dựng thương hiệu mạnh mẽ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Liên hệ tư vấn
            </Link>
            <Link 
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Xem thêm dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 