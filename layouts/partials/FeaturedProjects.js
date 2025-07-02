"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const FeaturedProjects = ({ featured_projects }) => {
  if (!featured_projects) return null;
  const { title, tabs } = featured_projects;
  const [activeTab, setActiveTab] = useState(0);

  // Dự án nổi bật theo Ori Agency
  const projects = [
    // SÀN THƯƠNG MẠI ĐIỆN TỬ
    { name: "TÂM MINH FOODS", slug: "tam-minh-foods", image: "/images/projects/tam-minh-foods.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "SAO THÁI DƯƠNG", slug: "sao-thai-duong", image: "/images/projects/sao-thai-duong.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "NHÀ SÁCH TIẾN THỌ", slug: "nha-sach-tien-tho", image: "/images/projects/nha-sach-tien-tho.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "YÊU BƠI LỘI", slug: "yeu-boi-loi", image: "/images/projects/yeu-boi-loi.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "LIPO HEALTHY FOOD", slug: "lipo-healthy-food", image: "/images/projects/lipo-healthy-food.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "JEWIS", slug: "jewis", image: "/images/projects/jewis.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "FACOLOS", slug: "facolos", image: "/images/projects/facolos.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "GLUCANKID", slug: "glucankid", image: "/images/projects/glucankid.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "FIMCITI", slug: "fimciti", image: "/images/projects/fimciti.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "SAO MỸ RESTAURANT", slug: "sao-my-restaurant", image: "/images/projects/sao-my-restaurant.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "XÔ SEAFOOD", slug: "xo-seafood", image: "/images/projects/xo-seafood.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "30 PHÚT TIẾNG NHẬT", slug: "30-phut-tieng-nhat", image: "/images/projects/30-phut-tieng-nhat.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "QUÁN NHỎ", slug: "quan-nho", image: "/images/projects/quan-nho.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "LANDFOOD", slug: "landfood", image: "/images/projects/landfood.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    // SEO
    { name: "NINE WEST", slug: "nine-west", image: "/images/projects/nine-west.jpg", type: "SEO" },
    { name: "NỀN MÓNG ĐĂNG QUANG", slug: "nen-mong-dang-quang", image: "/images/projects/nen-mong-dang-quang.jpg", type: "SEO" },
    { name: "LEXUS THĂNG LONG", slug: "lexus-thang-long", image: "/images/projects/lexus-thang-long.jpg", type: "SEO" },
    { name: "DIỆN CHẨN", slug: "dien-chan", image: "/images/projects/dien-chan.jpg", type: "SEO" },
    { name: "TECHNO", slug: "techno", image: "/images/projects/techno.jpg", type: "SEO" },
    { name: "GPA CAMPS", slug: "gpa-camps", image: "/images/projects/gpa-camps.jpg", type: "SEO" },
    { name: "ADAMO SOFTWARE", slug: "adamo-software", image: "/images/projects/adamo-software.jpg", type: "SEO" },
    // QUẢNG CÁO
    { name: "SAO THÁI DƯƠNG (QC)", slug: "sao-thai-duong-qc", image: "/images/projects/sao-thai-duong-qc.jpg", type: "QUẢNG CÁO" },
    { name: "YÊU BƠI LỘI (QC)", slug: "yeu-boi-loi-qc", image: "/images/projects/yeu-boi-loi-qc.jpg", type: "QUẢNG CÁO" },
    { name: "JEWIS (QC)", slug: "jewis-qc", image: "/images/projects/jewis-qc.jpg", type: "QUẢNG CÁO" },
    { name: "FIMCITI (QC)", slug: "fimciti-qc", image: "/images/projects/fimciti-qc.jpg", type: "QUẢNG CÁO" },
    { name: "SAO MỸ RESTAURANT (QC)", slug: "sao-my-restaurant-qc", image: "/images/projects/sao-my-restaurant-qc.jpg", type: "QUẢNG CÁO" },
    { name: "XÔ SEAFOOD (QC)", slug: "xo-seafood-qc", image: "/images/projects/xo-seafood-qc.jpg", type: "QUẢNG CÁO" },
    { name: "30 PHÚT TIẾNG NHẬT (QC)", slug: "30-phut-tieng-nhat-qc", image: "/images/projects/30-phut-tieng-nhat-qc.jpg", type: "QUẢNG CÁO" },
    { name: "QUÁN NHỎ (QC)", slug: "quan-nho-qc", image: "/images/projects/quan-nho-qc.jpg", type: "QUẢNG CÁO" },
    // TƯ VẤN
    { name: "LIPO HEALTHY FOOD (TV)", slug: "lipo-healthy-food-tv", image: "/images/projects/lipo-healthy-food-tv.jpg", type: "TƯ VẤN" },
    { name: "GLUCANKID (TV)", slug: "glucankid-tv", image: "/images/projects/glucankid-tv.jpg", type: "TƯ VẤN" },
    { name: "NỀN MÓNG ĐĂNG QUANG (TV)", slug: "nen-mong-dang-quang-tv", image: "/images/projects/nen-mong-dang-quang-tv.jpg", type: "TƯ VẤN" },
    { name: "SAO THÁI DƯƠNG (TV)", slug: "sao-thai-duong-tv", image: "/images/projects/sao-thai-duong-tv.jpg", type: "TƯ VẤN" },
  ];

  const categories = ["TẤT CẢ", "SÀN THƯƠNG MẠI ĐIỆN TỬ", "SEO", "QUẢNG CÁO", "TƯ VẤN"];
  const [activeCategory, setActiveCategory] = useState("TẤT CẢ");

  const filteredProjects = activeCategory === "TẤT CẢ" ? projects : projects.filter(p => p.type === activeCategory);

  // Số lượng dự án mỗi trang
  const PROJECTS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // Số lượng dự án mỗi slide mobile
  const PROJECTS_PER_MOBILE_SLIDE = 4;
  // Chia dự án thành các nhóm 4 (2x2) cho mobile
  const mobileSlides = [];
  for (let i = 0; i < filteredProjects.length; i += PROJECTS_PER_MOBILE_SLIDE) {
    mobileSlides.push(filteredProjects.slice(i, i + PROJECTS_PER_MOBILE_SLIDE));
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-primary font-bold text-primary text-h2-sm md:text-h2 leading-tight">
            DỰ ÁN NỔI BẬT
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            D9 Media Agency vinh dự đồng hành cùng hàng trăm doanh nghiệp Việt Nam và Quốc tế 
            nhằm mở rộng quy mô, nâng cao giá trị thương hiệu
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setCurrentPage(0); }}
              className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile: Carousel 2x2 */}
        <div className="block md:hidden">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            style={{ paddingBottom: 32 }}
          >
            {mobileSlides.map((group, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-2 gap-4">
                  {group.map((project, i) => (
                    <div
                      key={i}
                      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-40 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay hover: hiện tên dự án */}
                      <a
                        href={`/projects/${project.slug}`}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      >
                        <span className="text-white text-base font-bold drop-shadow-lg text-center px-2">
                          {project.name}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid giữ nguyên, không dùng Slider */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay hover: hiện tên dự án */}
                <a
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg text-center px-4">
                    {project.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Xem tất cả dự án
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 