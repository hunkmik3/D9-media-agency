"use client";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const HomeFeatures = ({ feature }) => {
  // Chia feature thành các nhóm 4 (2x2)
  const chunked = [];
  for (let i = 0; i < feature.features.length; i += 4) {
    chunked.push(feature.features.slice(i, i + 4));
  }
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-primary">
            {feature.title}
          </h2>
        </div>
        {/* Mobile: Carousel 2x2 */}
        <div className="block md:hidden mt-8">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            style={{ paddingBottom: 32 }}
          >
            {chunked.map((group, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-2 gap-4">
                  {group.map((item, i) => (
                    <div
                      className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                      key={`feature-${idx}-${i}`}
                    >
                      {item.icon && (
                        <Image
                          className="mx-auto"
                          src={item.icon}
                          width={30}
                          height={30}
                          alt=""
                        />
                      )}
                      <div className="mt-4">
                        <h3 className="mb-2 text-lg font-bold text-primary">{item.name}</h3>
                        <p className="text-base text-dark/80">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid mt-8 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {feature.features.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={`feature-${i}`}
            >
              {item.icon && (
                <Image
                  className="mx-auto"
                  src={item.icon}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-bold text-primary">{item.name}</h3>
                <p className="text-base text-dark/80">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
