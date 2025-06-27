"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const SLIDE_SIZE = 12;
const MOBILE_SLIDE_SIZE = 6; // 3 cột x 2 dòng
const AUTO_PLAY_INTERVAL = 4000;

const Clients = ({ clients }) => {
  if (!clients) return null;
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil((clients.logos?.length || 0) / SLIDE_SIZE);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Chia logo thành các slide cho desktop
  const slides = [];
  for (let i = 0; i < clients.logos.length; i += SLIDE_SIZE) {
    slides.push(clients.logos.slice(i, i + SLIDE_SIZE));
  }
  // Chia logo thành các slide cho mobile
  const mobileSlides = [];
  for (let i = 0; i < clients.logos.length; i += MOBILE_SLIDE_SIZE) {
    mobileSlides.push(clients.logos.slice(i, i + MOBILE_SLIDE_SIZE));
  }

  return (
    <section className="section py-10">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-2 uppercase">
          {clients.title}
        </h2>
        <p className="text-center mb-8 text-base md:text-lg text-dark/80 max-w-2xl mx-auto">
          {clients.description}
        </p>
        {/* Mobile: Swiper slider ngang, mỗi slide 6 logo (3x2), tự động chạy, hiệu ứng fade */}
        <div className="block md:hidden">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: AUTO_PLAY_INTERVAL, disableOnInteraction: false }}
            style={{ paddingBottom: 32 }}
          >
            {mobileSlides.map((logos, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-3 gap-4">
                  {logos.map((logo, i) => (
                    <div
                      key={logo + i}
                      className="bg-white rounded-xl shadow flex items-center justify-center p-4 h-20 hover:shadow-lg transition"
                    >
                      <Image
                        src={`/images/clients/${logo}`}
                        alt={logo.replace(/[-_]/g, ' ').replace(/\..+$/, '')}
                        width={100}
                        height={50}
                        className="object-contain max-h-12 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Desktop: Slider chỉ render slide active, không absolute */}
        <div className="min-h-[240px] lg:min-h-[300px] items-center justify-center hidden md:flex flex-col">
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {slides[currentSlide].map((logo, i) => (
                <div
                  key={logo + i}
                  className="bg-white rounded-xl shadow flex items-center justify-center p-4 h-24 md:h-28 hover:shadow-lg transition"
                >
                  <Image
                    src={`/images/clients/${logo}`}
                    alt={logo.replace(/[-_]/g, ' ').replace(/\..+$/, '')}
                    width={140}
                    height={60}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2 w-full">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Chuyển đến slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 