'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TikTokChannelPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              XÂY KÊNH TIKTOK
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Xây dựng kênh TikTok thành công với chiến lược nội dung viral và tăng trưởng bền vững
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LĨNH VỰC</p>
                <p className="text-white font-semibold">DIGITAL MARKETING</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LOẠI HÌNH</p>
                <p className="text-white font-semibold">CONTENT CREATION</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">GIẢI PHÁP</p>
                <p className="text-white font-semibold">TIKTOK GROWTH</p>
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
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'challenge'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Thách thức
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'solution'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Giải pháp
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'results'
                  ? 'border-purple-600 text-purple-600'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">VỀ DỊCH VỤ XÂY KÊNH TIKTOK</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                TikTok đã trở thành nền tảng social media phát triển nhanh nhất với hơn 1 tỷ người dùng toàn cầu. 
                Việc xây dựng kênh TikTok thành công không chỉ giúp tăng nhận diện thương hiệu mà còn tạo ra 
                nguồn khách hàng tiềm năng khổng lồ.
              </p>
              <p className="text-gray-600 mb-6">
                Dịch vụ xây kênh TikTok của chúng tôi bao gồm việc nghiên cứu thị trường, lập kế hoạch nội dung, 
                sản xuất video chất lượng cao và tối ưu hóa thuật toán để tăng trưởng bền vững.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'challenge' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">THÁCH THỨC</h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">1. Cạnh tranh khốc liệt</h3>
                <p className="text-red-700">
                  Với hàng triệu creator trên TikTok, việc nổi bật và thu hút sự chú ý của người dùng 
                  trở nên vô cùng khó khăn. Cần có chiến lược nội dung độc đáo và sáng tạo.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">2. Thuật toán thay đổi liên tục</h3>
                <p className="text-yellow-700">
                  TikTok thường xuyên cập nhật thuật toán, khiến các chiến lược cũ có thể trở nên 
                  không hiệu quả. Cần liên tục theo dõi và điều chỉnh.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Tạo nội dung viral bền vững</h3>
                <p className="text-blue-700">
                  Không chỉ tạo ra một video viral mà cần duy trì được sự nhất quán và chất lượng 
                  nội dung để giữ chân người theo dõi và tăng trưởng bền vững.
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
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Nghiên cứu & Phân tích</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Phân tích đối thủ cạnh tranh</li>
                    <li>• Nghiên cứu xu hướng và hashtag</li>
                    <li>• Xác định đối tượng mục tiêu</li>
                    <li>• Tìm hiểu hành vi người dùng</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Chiến lược nội dung</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Lập kế hoạch nội dung 30 ngày</li>
                    <li>• Thiết kế concept video độc đáo</li>
                    <li>• Tối ưu thời gian đăng bài</li>
                    <li>• Xây dựng lịch sửa đổi</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">Sản xuất nội dung</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Quay dựng video chất lượng cao</li>
                    <li>• Chỉnh sửa và thêm hiệu ứng</li>
                    <li>• Tối ưu âm thanh và hình ảnh</li>
                    <li>• Tạo thumbnail hấp dẫn</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">Tối ưu & Phân tích</h3>
                  <ul className="text-indigo-700 space-y-2">
                    <li>• Theo dõi hiệu suất video</li>
                    <li>• Phân tích dữ liệu chi tiết</li>
                    <li>• Điều chỉnh chiến lược</li>
                    <li>• Báo cáo định kỳ</li>
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-lg">Người theo dõi</div>
                  <p className="text-sm mt-2 opacity-90">Tăng trưởng trung bình 50K followers/tháng</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">10M+</div>
                  <div className="text-lg">Lượt xem</div>
                  <p className="text-sm mt-2 opacity-90">Tổng lượt xem video trong 6 tháng</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-lg">Tỷ lệ tương tác</div>
                  <p className="text-sm mt-2 opacity-90">Tăng so với mức trung bình ngành</p>
                </div>
              </div>
              <div className="relative text-center p-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white">
                  <div className="text-4xl font-bold mb-2">200%</div>
                  <div className="text-lg">Tăng doanh thu</div>
                  <p className="text-sm mt-2 opacity-90">Từ khách hàng TikTok</p>
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
            SẴN SÀNG XÂY DỰNG KÊNH TIKTOK THÀNH CÔNG?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi giúp bạn tạo ra những video viral và xây dựng cộng đồng TikTok mạnh mẽ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Liên hệ tư vấn
            </Link>
            <Link 
              href="/services"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Xem thêm dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 