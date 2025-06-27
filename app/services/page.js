'use client';
import { useState } from "react";
import Image from "next/image";

const SERVICES = [
  {
    name: "Digital Marketing",
    children: [
      {
        name: "SEO Tổng Thể",
        image: "/images/service-seo.jpg",
        desc: "Dịch vụ SEO tổng thể giúp website của bạn tăng thứ hạng bền vững trên Google, thu hút khách hàng tiềm năng.",
        detail: "Dịch vụ SEO tổng thể bao gồm phân tích từ khóa, tối ưu onpage, xây dựng backlink chất lượng, đo lường hiệu quả và báo cáo định kỳ. Đội ngũ chuyên gia của chúng tôi sẽ đồng hành cùng bạn để đạt mục tiêu tăng trưởng bền vững trên Google.",
      },
      {
        name: "Quảng cáo Facebook",
        image: "/images/service-fb.jpg",
        desc: "Tối ưu chiến dịch quảng cáo Facebook để tiếp cận đúng khách hàng, tăng doanh số nhanh chóng.",
        detail: "Chúng tôi xây dựng chiến dịch Facebook Ads từ A-Z: nghiên cứu đối tượng, sáng tạo nội dung, tối ưu ngân sách, đo lường chuyển đổi và hỗ trợ chăm sóc khách hàng sau quảng cáo.",
      },
      {
        name: "Quảng cáo Google",
        image: "/images/service-gg.jpg",
        desc: "Đưa sản phẩm/dịch vụ của bạn lên top Google với chi phí tối ưu nhất.",
        detail: "Dịch vụ Google Ads bao gồm quảng cáo tìm kiếm, quảng cáo hiển thị, remarketing, tối ưu điểm chất lượng và báo cáo hiệu quả chi tiết.",
      },
    ],
  },
  {
    name: "Thiết Kế & Sáng Tạo",
    children: [
      {
        name: "Thiết kế Logo & Bộ nhận diện",
        image: "/images/service-logo.jpg",
        desc: "Tạo dựng hình ảnh thương hiệu chuyên nghiệp, ấn tượng với khách hàng.",
        detail: "Dịch vụ thiết kế logo, bộ nhận diện thương hiệu, guideline màu sắc, font chữ, ứng dụng thực tế trên mọi nền tảng truyền thông.",
      },
      {
        name: "Thiết kế ấn phẩm quảng cáo",
        image: "/images/service-print.jpg",
        desc: "Thiết kế banner, poster, catalogue... sáng tạo, thu hút mọi ánh nhìn.",
        detail: "Chúng tôi cung cấp dịch vụ thiết kế banner, poster, catalogue, brochure, standee... với ý tưởng sáng tạo, phù hợp từng chiến dịch marketing.",
      },
      {
        name: "Sản xuất Video/Ảnh",
        image: "/images/service-video.jpg",
        desc: "Dịch vụ quay dựng video, chụp ảnh quảng cáo chuyên nghiệp cho doanh nghiệp.",
        detail: "Đội ngũ sản xuất video, chụp ảnh chuyên nghiệp, kịch bản sáng tạo, hậu kỳ chỉnh chu, phù hợp mọi nhu cầu truyền thông của doanh nghiệp.",
      },
    ],
  },
  {
    name: "Tư Vấn & Đào Tạo",
    children: [
      {
        name: "Tư vấn chiến lược Marketing",
        image: "/images/service-strategy.jpg",
        desc: "Đồng hành xây dựng chiến lược marketing tổng thể, phù hợp từng giai đoạn phát triển.",
        detail: "Tư vấn xây dựng chiến lược marketing tổng thể, định vị thương hiệu, lập kế hoạch truyền thông, đo lường và tối ưu hiệu quả.",
      },
      {
        name: "Đào tạo Digital Marketing",
        image: "/images/service-training.jpg",
        desc: "Khóa học thực chiến giúp đội ngũ của bạn làm chủ các kênh digital marketing hiệu quả.",
        detail: "Khóa học đào tạo SEO, Facebook Ads, Google Ads, Content Marketing, xây dựng đội ngũ marketing in-house chuyên nghiệp.",
      },
    ],
  },
];

export default function ServicesPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [expanded, setExpanded] = useState({ group: null, idx: null });

  const handleContact = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleExpand = (groupIdx, idx) => {
    setExpanded(
      expanded.group === groupIdx && expanded.idx === idx
        ? { group: null, idx: null }
        : { group: groupIdx, idx }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-2 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">Dịch Vụ Của Chúng Tôi</h1>
        <div className="space-y-12">
          {SERVICES.map((main, groupIdx) => (
            <div key={main.name}>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">{main.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {main.children.map((service, idx) => {
                  const isOpen = expanded.group === groupIdx && expanded.idx === idx;
                  return (
                    <div
                      key={service.name}
                      className={`bg-white rounded-2xl p-5 shadow flex flex-col items-center text-center transition-all duration-300 ${isOpen ? "z-10 scale-105 border-2 border-blue-600" : ""}`}
                      style={{ minHeight: isOpen ? 380 : 160 }}
                      onClick={() => handleExpand(groupIdx, idx)}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-1 cursor-pointer">{service.name}</h3>
                      <p className="text-gray-600 mb-2 text-sm line-clamp-2">{service.desc}</p>
                      {isOpen && (
                        <>
                          <Image src={service.image} alt={service.name} width={220} height={220} className="rounded-lg object-cover w-40 h-40 mx-auto mb-3" />
                          <p className="text-gray-700 mb-3 text-sm text-left w-full">{service.detail}</p>
                          <div className="flex gap-2 mt-auto justify-center">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Liên hệ ngay</button>
                            <button onClick={e => { e.stopPropagation(); handleContact(service); }} className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">Để lại thông tin</button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {/* Form popup */}
        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowForm(false)}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Để lại thông tin liên hệ</h2>
              <p className="mb-4 text-gray-600 text-sm">Dịch vụ quan tâm: <span className="font-semibold text-gray-900">{selectedService?.name}</span></p>
              <form className="space-y-4">
                <input type="text" placeholder="Họ và tên" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
                <input type="tel" placeholder="Số điện thoại" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
                <textarea placeholder="Nội dung cần tư vấn" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300" rows={3}></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Gửi thông tin</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 