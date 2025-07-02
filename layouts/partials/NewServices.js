"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import servicesConfig from "@config/services.json";

SwiperCore.use([Pagination, Autoplay]);

// Mapping dịch vụ -> slug chi tiết
const serviceSlugMap = {
  "XÂY KÊNH TIKTOK": "/services/xay-kenh-tiktok",
  "CONTENT MARKETING": "/services/content-marketing",
  "VIDEO MARKETING": "/services/video-marketing",
  "MARKETING INFLUENCER": "/services/marketing-influencer",
  "EMAIL/ SMS MARKETING": "/services/email-sms-marketing",
  "BÁN HÀNG SHOPEE": "/services/ban-hang-shopee",
  "BÁN HÀNG TIKTOK": "/services/ban-hang-tiktok",
  "DỊCH VỤ LIVESTREAM": "/services/dich-vu-livestream",
  "QUAY CHỤP SẢN PHẨM SÀN": "/services/quay-chup-san-pham-san",
  "SEO TỔNG THỂ": "/services/seo-tong-the",
  "APP INSTALL": "/services/app-install",
  "GOOGLE ADS": "/services/quang-cao-google",
  "FACEBOOK ADS": "/services/quang-cao-facebook",
  "ZALO OA": "/services/zalo-oa"
};

const NewServices = ({ new_services }) => {
  if (!new_services) return null;
  return (
    <section className="section py-10">
      <div className="container">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-primary mb-8 uppercase">
          {new_services.title}
        </h1>
        {/* Mobile: Carousel */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            pagination={{ clickable: true }}
            slidesPerView={1}
            style={{ paddingBottom: 32 }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {new_services.items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="service-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={340}
                    height={180}
                    className="next-image"
                  />
                  <div className="service-group">{item.name}</div>
                  <h3 className="service-title">{item.title}</h3>
                  <ul>
                    {item.services.map((sv, i) => (
                      <li key={i}>
                        <Link href={serviceSlugMap[sv] || '#'}>
                          {sv}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {new_services.items.map((item, idx) => (
            <div key={idx} className="service-card">
              <Image
                src={item.image}
                alt={item.title}
                width={340}
                height={180}
                className="next-image"
              />
              <div className="service-group">{item.name}</div>
              <h3 className="service-title">{item.title}</h3>
              <ul>
                {item.services.map((sv, i) => (
                  <li key={i}>
                    <Link href={serviceSlugMap[sv] || '#'}>
                      {sv}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices; 