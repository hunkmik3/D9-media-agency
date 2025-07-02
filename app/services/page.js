'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SeoMeta from "@layouts/SeoMeta";

const GROUP_IMAGES = {
  "Digital Marketing": "/images/service-slide-1.png",
  "Thiết Kế & Sáng Tạo": "/images/service-slide-2.png",
  "Tư Vấn & Đào Tạo": "/images/service-slide-3.png",
};

const SERVICES = [
  {
    name: "Digital Marketing",
    desc: "Giải pháp tiếp thị số toàn diện giúp doanh nghiệp phát triển vượt trội trên môi trường online.",
    bg: "", // Để trống, bạn sẽ fill ảnh nền sau
    children: [
      {
        name: "SEO Tổng Thể",
        slug: "seo-tong-the",
        image: "", // Để trống, bạn sẽ fill ảnh sau
        desc: "Tối ưu website toàn diện, tăng thứ hạng bền vững trên Google.",
      },
      {
        name: "Quảng cáo Facebook",
        slug: "quang-cao-facebook",
        image: "",
        desc: "Tiếp cận khách hàng mục tiêu, tăng doanh số nhanh chóng qua Facebook.",
      },
      {
        name: "Quảng cáo Google",
        slug: "quang-cao-google",
        image: "",
        desc: "Đưa sản phẩm/dịch vụ lên top Google với chi phí tối ưu nhất.",
      },
    ],
  },
  {
    name: "PERFORMANCE BRANDING",
    desc: "Xây dựng thương hiệu mạnh mẽ, tăng nhận diện và tương tác với khách hàng.",
    bg: "",
    children: [
      {
        name: "Xây kênh TikTok",
        slug: "xay-kenh-tiktok",
        image: "",
        desc: "Phát triển kênh TikTok chuyên nghiệp, thu hút triệu view cho doanh nghiệp.",
      },
      {
        name: "Content Marketing",
        slug: "content-marketing",
        image: "",
        desc: "Chiến lược nội dung sáng tạo, thu hút khách hàng tiềm năng.",
      },
      {
        name: "Video Marketing",
        slug: "video-marketing",
        image: "",
        desc: "Tăng tương tác, viral thương hiệu với video chuyên nghiệp.",
      },
      {
        name: "Marketing Influencer",
        slug: "marketing-influencer",
        image: "",
        desc: "Kết nối thương hiệu với KOLs, Influencer uy tín.",
      },
      {
        name: "Email/SMS Marketing",
        slug: "email-sms-marketing",
        image: "",
        desc: "Tăng chuyển đổi với chiến dịch Email & SMS tự động hóa.",
      },
    ],
  },
  {
    name: "E-COMMERCE",
    desc: "Giải pháp bán hàng online toàn diện, tối ưu doanh số trên các sàn TMĐT.",
    bg: "",
    children: [
      {
        name: "Bán hàng Shopee",
        slug: "ban-hang-shopee",
        image: "",
        desc: "Tối ưu gian hàng, tăng doanh số trên sàn Shopee.",
      },
      {
        name: "Bán hàng TikTok",
        slug: "ban-hang-tiktok",
        image: "",
        desc: "Tối ưu kênh TikTok Shop, tăng doanh số vượt trội.",
      },
      {
        name: "Dịch vụ Livestream",
        slug: "dich-vu-livestream",
        image: "",
        desc: "Tăng doanh số, tương tác mạnh mẽ với livestream chuyên nghiệp.",
      },
      {
        name: "Quay chụp sản phẩm sàn",
        slug: "quay-chup-san-pham-san",
        image: "",
        desc: "Hình ảnh, video sản phẩm chuyên nghiệp cho sàn TMĐT.",
      },
    ],
  },
  {
    name: "PERFORMANCE MARKETING",
    desc: "Tối ưu hiệu suất marketing, tăng ROI và chuyển đổi khách hàng.",
    bg: "",
    children: [
      {
        name: "App Install",
        slug: "app-install",
        image: "",
        desc: "Tăng lượt cài đặt ứng dụng nhanh chóng, đúng đối tượng.",
      },
      {
        name: "Zalo OA",
        slug: "zalo-oa",
        image: "",
        desc: "Xây dựng & phát triển kênh Zalo OA chuyên nghiệp cho doanh nghiệp.",
      },
    ],
  },
  {
    name: "Thiết Kế & Sáng Tạo",
    desc: "Dịch vụ thiết kế sáng tạo, xây dựng hình ảnh thương hiệu chuyên nghiệp.",
    bg: "",
    children: [
      {
        name: "Thiết kế Logo & Bộ nhận diện",
        slug: "thiet-ke-logo-bo-nhan-dien",
        image: "",
        desc: "Tạo dựng hình ảnh thương hiệu ấn tượng, chuyên nghiệp.",
      },
      {
        name: "Thiết kế ấn phẩm quảng cáo",
        slug: "thiet-ke-an-pham-quang-cao",
        image: "",
        desc: "Thiết kế banner, poster, catalogue... sáng tạo, thu hút mọi ánh nhìn.",
      },
      {
        name: "Sản xuất Video/Ảnh",
        slug: "san-xuat-video-anh",
        image: "",
        desc: "Quay dựng video, chụp ảnh quảng cáo chuyên nghiệp cho doanh nghiệp.",
      },
    ],
  },
  {
    name: "Tư Vấn & Đào Tạo",
    desc: "Đồng hành xây dựng chiến lược marketing và đào tạo đội ngũ chuyên sâu.",
    bg: "",
    children: [
      {
        name: "Tư vấn chiến lược Marketing",
        slug: "tu-van-chien-luoc-marketing",
        image: "",
        desc: "Xây dựng chiến lược marketing tổng thể, phù hợp từng giai đoạn phát triển.",
      },
      {
        name: "Đào tạo Digital Marketing",
        slug: "dao-tao-digital-marketing",
        image: "",
        desc: "Khóa học thực chiến giúp đội ngũ làm chủ các kênh digital marketing hiệu quả.",
      },
    ],
  },
];

const SERVICE_ICONS = {
  "seo-tong-the": "/images/code.svg",
  "quang-cao-facebook": "/images/speedometer.svg",
  "quang-cao-google": "/images/speedometer.svg",
  "xay-kenh-tiktok": "/images/cloud.svg",
  "content-marketing": "/images/oop.svg",
  "video-marketing": "/images/cloud.svg",
  "marketing-influencer": "/images/user-clock.svg",
  "email-sms-marketing": "/images/checkmark-circle.svg",
  "ban-hang-shopee": "/images/checkmark-circle.svg",
  "ban-hang-tiktok": "/images/cloud.svg",
  "dich-vu-livestream": "/images/user-clock.svg",
  "quay-chup-san-pham-san": "/images/love.svg",
  "app-install": "/images/speedometer.svg",
  "zalo-oa": "/images/user-clock.svg",
  "thiet-ke-logo-bo-nhan-dien": "/images/love.svg",
  "thiet-ke-an-pham-quang-cao": "/images/banner-art.svg",
  "san-xuat-video-anh": "/images/cloud.svg",
  "tu-van-chien-luoc-marketing": "/images/oop.svg",
  "dao-tao-digital-marketing": "/images/checkmark-circle.svg",
};

const ServicesPage = () => (
  <>
    <SeoMeta title="Dịch vụ" image="/images/logo.png" />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-2 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-800 drop-shadow-sm tracking-tight">
          Dịch Vụ Của Chúng Tôi
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
          D9 Media Agency cung cấp giải pháp truyền thông, quảng cáo, thiết kế và đào tạo toàn diện cho doanh nghiệp hiện đại.
        </p>
        <div className="space-y-20">
          {SERVICES.map((group, idx) => (
            <section key={group.name} className="relative rounded-3xl shadow-xl bg-white/80 overflow-hidden mb-4">
              {/* Ảnh nền mờ phía sau tiêu đề nhóm */}
              {group.bg && (
                <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                  <Image src={group.bg} alt={group.name} fill className="object-cover" />
                </div>
              )}
              <div className="relative z-10 px-6 py-10 md:py-14">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-2 flex items-center gap-2">
                      {group.name}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                      {group.desc}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.children.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="bg-white rounded-2xl p-7 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 border-2 border-transparent cursor-pointer group min-h-[280px]"
                    >
                      <div className="w-20 h-20 mb-3 relative flex items-center justify-center bg-blue-50 rounded-xl border border-blue-100 group-hover:border-blue-500 transition overflow-hidden">
                        <Image
                          src={SERVICE_ICONS[service.slug] || "/images/logo.png"}
                          alt={service.name}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-2 text-sm line-clamp-3 min-h-[48px]">
                        {service.desc}
                      </p>
                      <span className="mt-2 text-blue-600 font-semibold text-sm group-hover:underline group-hover:text-blue-800 transition">
                        Xem chi tiết &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default ServicesPage; 