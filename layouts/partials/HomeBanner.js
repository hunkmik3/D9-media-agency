"use client";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "./Marquee";

const HomeBanner = ({ banner }) => {
  const images = banner?.images || [];
  console.log("Banner data:", banner);
  console.log("Banner images:", images);
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-0 pb-[50px]">
      {/* Banner slider full width ở trên */}
      <div className="w-full px-0 overflow-hidden">
        {images && images.length > 0 ? (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg mx-auto">
            {/* Test: Hiển thị ảnh đầu tiên cố định */}
            <div className="absolute inset-0">
              <img
                src={images[0]}
                alt="Banner 1"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  console.error("Image load error:", images[0], e);
                }}
              />
            </div>
            
            {/* Test với placeholder image */}
            <div className="absolute inset-0 opacity-50">
              <img
                src="https://via.placeholder.com/800x450/0066cc/ffffff?text=Banner+Test"
                alt="Placeholder"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Slider với fade effect */}
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  idx === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Banner ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    console.error("Image load error:", img, e);
                  }}
                />
              </div>
            ))}
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentImage ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p>Không có ảnh banner</p>
              <p className="text-sm mt-2">Banner object: {JSON.stringify(banner)}</p>
              <p className="text-sm">Images length: {images?.length || 0}</p>
          </div>
        </div>
        )}
      </div>
      <Marquee text="D9 Media Agency - Giải pháp truyền thông & quảng cáo toàn diện cho doanh nghiệp của bạn!" />
    </section>
  );
};

export default HomeBanner;
