'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function VideoMarketingPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-gradient-to-r from-red-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              VIDEO MARKETING
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Sản xuất video marketing chuyên nghiệp, thu hút khách hàng và tăng tỷ lệ chuyển đổi
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LĨNH VỰC</p>
                <p className="text-white font-semibold">DIGITAL MARKETING</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LOẠI HÌNH</p>
                <p className="text-white font-semibold">VIDEO PRODUCTION</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">GIẢI PHÁP</p>
                <p className="text-white font-semibold">VIDEO GROWTH</p>
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
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'challenge'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Thách thức
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'solution'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Giải pháp
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'results'
                  ? 'border-red-600 text-red-600'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">VỀ DỊCH VỤ VIDEO MARKETING</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Video Marketing là xu hướng marketing hiện đại với khả năng thu hút và tương tác cao nhất. 
                Theo thống kê, video content có tỷ lệ engagement cao hơn 1200% so với text và image content.
              </p>
              <p className="text-gray-600 mb-6">
                Chúng tôi cung cấp dịch vụ video marketing toàn diện từ concept, kịch bản, quay phim, 
                dựng phim đến phân phối và tối ưu hóa cho các nền tảng khác nhau như YouTube, Facebook, 
                Instagram, TikTok và website.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'challenge' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">THÁCH THỨC</h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">1. Chi phí sản xuất cao</h3>
                <p className="text-red-700">
                  Sản xuất video chất lượng cao đòi hỏi thiết bị chuyên nghiệp, đội ngũ kỹ thuật 
                  và thời gian sản xuất dài, dẫn đến chi phí cao.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">2. Thời gian sản xuất dài</h3>
                <p className="text-yellow-700">
                  Từ concept đến sản phẩm cuối cùng có thể mất vài tuần đến vài tháng, 
                  khó đáp ứng nhu cầu marketing nhanh chóng.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Tối ưu cho nhiều nền tảng</h3>
                <p className="text-blue-700">
                  Mỗi nền tảng có yêu cầu format, kích thước và xu hướng khác nhau, 
                  cần tối ưu video cho từng kênh riêng biệt.
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
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Chiến lược & Kịch bản</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Nghiên cứu thị trường và đối thủ</li>
                    <li>• Phát triển concept video độc đáo</li>
                    <li>• Viết kịch bản chuyên nghiệp</li>
                    <li>• Storyboard và shot list</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Sản xuất & Quay phim</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Quay phim với thiết bị 4K/8K</li>
                    <li>• Ánh sáng và âm thanh chuyên nghiệp</li>
                    <li>• Drone và camera movement</li>
                    <li>• Quay nhiều góc và take</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Hậu kỳ & Dựng phim</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Dựng phim với Premiere Pro</li>
                    <li>• Chỉnh màu với DaVinci Resolve</li>
                    <li>• Hiệu ứng với After Effects</li>
                    <li>• Âm thanh và nhạc nền</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Phân phối & Tối ưu</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Tối ưu cho từng nền tảng</li>
                    <li>• SEO cho YouTube</li>
                    <li>• Social media distribution</li>
                    <li>• Performance tracking</li>
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
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">5M+</div>
                  <div className="text-lg">Lượt xem</div>
                  <p className="text-sm mt-2 opacity-90">Tổng lượt xem video trong 12 tháng</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">180%</div>
                  <div className="text-lg">Tăng engagement</div>
                  <p className="text-sm mt-2 opacity-90">So với content thông thường</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-lg">Tăng conversion</div>
                  <p className="text-sm mt-2 opacity-90">Từ video marketing</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <div className="text-lg">Tăng brand recall</div>
                  <p className="text-sm mt-2 opacity-90">Theo nghiên cứu khách hàng</p>
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
            SẴN SÀNG TẠO RA NHỮNG VIDEO MARKETING ẤN TƯỢNG?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi giúp bạn sản xuất những video chất lượng cao và tăng hiệu quả marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Liên hệ tư vấn
            </Link>
            <Link 
              href="/services"
              className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Xem thêm dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 