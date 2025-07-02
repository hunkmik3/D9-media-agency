'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function Consulting({ data }) {
  const { frontmatter } = data;
  
  const benefits = [
    { title: "TIẾT KIỆM CHI PHÍ", desc: "Tối ưu ngân sách marketing hiệu quả" },
    { title: "TĂNG LỢI THẾ CẠNH TRANH", desc: "Xây dựng thương hiệu mạnh mẽ" },
    { title: "TĂNG TỶ LỆ CHUYỂN ĐỔI", desc: "Tối ưu quy trình bán hàng" }
  ];

  const problems = [
    "Thiếu định hướng chiến lược marketing tổng thể",
    "Ngân sách marketing phân bổ chưa tối ưu", 
    "Chưa tận dụng hiệu quả các kênh truyền thông số",
    "Khó khăn trong việc đo lường và tối ưu hiệu quả"
  ];

  const solutions = [
    {
      title: "QUẢN LÝ ĐỘI NGŨ",
      desc: "Xây dựng chuỗi hệ thống chiến lược Marketing bài bản về mặt tài chính, cung cấp đầy đủ nhân sự vận hành dự án đảm bảo hiệu quả kinh doanh theo đúng mục tiêu đã đặt ra"
    },
    {
      title: "NGHIÊN CỨU THỊ TRƯỜNG", 
      desc: "Cung cấp giải pháp nghiên cứu thị trường hiệu quả, áp dụng tracking nhiều nguồn dữ liệu uy tín và quan trọng thông qua các phương pháp công nghệ mới"
    },
    {
      title: "TIẾT KIỆM CHI PHÍ VÀ TỐI ƯU NGUỒN LỰC",
      desc: "Đội ngũ tư vấn chiến lược chịu trách nhiệm thực thi dự án sẽ dành thời gian và công sức để hoàn thành mục tiêu kinh doanh"
    },
    {
      title: "ĐỊNH HƯỚNG CHIẾN LƯỢC",
      desc: "Đưa ra định hướng chiến lược thương hiệu phát triển chuyên sâu theo đúng ngành hàng, đúng thị trường mục tiêu"
    }
  ];

  const whyChoose = [
    {
      title: "Thương hiệu uy tín",
      desc: "Với hơn 10 năm kinh nghiệm, chúng tôi giúp hơn 500 doanh nghiệp xây dựng và phát triển thương hiệu"
    },
    {
      title: "Tích hợp hoạt động tiếp thị", 
      desc: "Chiến lược tư vấn thương hiệu được tích hợp giữa các hoạt động tiếp thị khác nhau, phù hợp với tầm nhìn và giá trị của doanh nghiệp"
    },
    {
      title: "Hỗ trợ doanh nghiệp tự phát triển trong tương lai",
      desc: "Chia sẻ cách thức phát triển thương hiệu giúp doanh nghiệp tiếp tục lớn mạnh trong tương lai"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Đánh giá thị trường và tư vấn",
      desc: "Tiến hành nghiên cứu, phân tích tình hình dự án để tư vấn chiến lược triển khai toàn diện"
    },
    {
      step: "02", 
      title: "Nghiên cứu chuyên sâu về đối thủ cạnh tranh",
      desc: "Tìm hiểu hành vi của người dùng, phân tích đối thủ và mức độ cạnh tranh"
    },
    {
      step: "03",
      title: "Tư vấn chiến lược và xây dựng kế hoạch", 
      desc: "Xây dựng kế hoạch, đưa ra giải pháp theo hành trình khách hàng"
    },
    {
      step: "04",
      title: "Tăng tỷ lệ chuyển đổi",
      desc: "Thực hiện các chiến lược Marketing để kênh nhắm đúng khách hàng mục tiêu"
    },
    {
      step: "05",
      title: "Triển khai tối ưu hóa kênh",
      desc: "Liên tục cập nhật xu hướng mới nhất để gia tăng trải nghiệm khách hàng"
    },
    {
      step: "06",
      title: "Báo cáo & nghiệm thu",
      desc: "Theo dõi thứ hạng, xu hướng tìm kiếm để đo lường và phân tích hiệu quả"
    }
  ];

  const HOMEPAGE_PROJECTS = [
    { name: "TÂM MINH FOODS", slug: "tam-minh-foods", image: "/images/projects/tam-minh-foods.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "SAO THÁI DƯƠNG", slug: "sao-thai-duong", image: "/images/projects/sao-thai-duong.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "NINE WEST", slug: "nine-west", image: "/images/projects/nine-west.jpg", type: "SEO" },
    { name: "LEXUS THĂNG LONG", slug: "lexus-thang-long", image: "/images/projects/lexus-thang-long.jpg", type: "SEO" },
    { name: "JEWIS", slug: "jewis", image: "/images/projects/jewis.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
    { name: "SAO THÁI DƯƠNG (QC)", slug: "sao-thai-duong-qc", image: "/images/projects/sao-thai-duong-qc.jpg", type: "QUẢNG CÁO" },
    { name: "JEWIS (QC)", slug: "jewis-qc", image: "/images/projects/jewis-qc.jpg", type: "QUẢNG CÁO" },
    { name: "LIPO HEALTHY FOOD (TV)", slug: "lipo-healthy-food-tv", image: "/images/projects/lipo-healthy-food-tv.jpg", type: "TƯ VẤN" },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Đóng popup khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#e0e7ff] via-[#a5b4fc] to-[#6366f1] text-gray-900 py-20 overflow-hidden">
        {/* Overlay trắng mờ */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg">
            <span className="block">TƯ VẤN CHIẾN LƯỢC</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700">
            D9 Media Agency đồng hành cùng doanh nghiệp trong việc tư vấn chiến lược Marketing hiệu quả giúp doanh nghiệp có một chiến lược bài bản lâu dài, đột phá doanh thu
          </p>
          
          {/* 3 Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/70 rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 text-indigo-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <button
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-indigo-700 transition-colors"
            onClick={() => setShowPopup(true)}
          >
            Nhận tư vấn
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            500+ KHÁCH HÀNG TIN TƯỞNG
          </h2>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            NHỮNG VẤN ĐỀ DOANH NGHIỆP THƯỜNG GẶP PHẢI
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chiến lược Marketing là điểm mấu chốt cuối cùng quyết định kết quả kinh doanh của doanh nghiệp sau quá trình tổ chức hoạt động theo từng tháng, quý và năm.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              D9 Media Agency nhận thấy nhiều doanh nghiệp chưa hệ thống kế hoạch Marketing cụ thể, từ đó chưa thể định vị và xây dựng thương hiệu theo đúng mục tiêu. Với hơn 10 năm kinh nghiệm tư vấn chiến lược, chúng tôi sẽ hệ thống giải pháp tư vấn chiến lược Marketing chất lượng, mang lại doanh thu lớn giúp các doanh nghiệp đứng vững trước thị trường và đối thủ.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            DỊCH VỤ TƯ VẤN CHIẾN LƯỢC GIẢI QUYẾT VẤN ĐỀ THÁCH THỨC CỦA DOANH NGHIỆP
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            TẠI SAO NÊN CHỌN DỊCH VỤ TƯ VẤN CHIẾN LƯỢC TẠI D9 MEDIA AGENCY?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            QUY TRÌNH TRIỂN KHAI DỊCH VỤ TƯ VẤN CHIẾN LƯỢC TẠI D9 MEDIA AGENCY
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            D9 Media Agency sẽ tiến phân tích mong muốn của doanh nghiệp, nghiên cứu ngành hàng và xây dựng chiến lược thương hiệu tối ưu nhất
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            DỰ ÁN NỔI BẬT
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOMEPAGE_PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group border border-blue-100">
                <div className="w-28 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-700 mb-1 text-center group-hover:text-indigo-700 transition">{project.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-2">{project.type}</p>
                <a href={`/projects/${project.slug}`} className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow hover:from-blue-700 hover:to-indigo-700 transition-all">Xem chi tiết</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#e0e7ff] via-[#a5b4fc] to-[#6366f1] relative overflow-hidden">
        {/* Overlay trắng mờ */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Họ tên*</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700" placeholder="Nhập họ tên" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Số điện thoại*</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700" placeholder="Nhập số điện thoại" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700" placeholder="Nhập email (nếu có)" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Nội dung cần tư vấn</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700" rows={4} placeholder="Mô tả nhu cầu của bạn"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 transition-colors w-full md:w-auto">
                  Đăng ký nhận tư vấn
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Số Điện Thoại Liên Hệ</h3>
              <p className="text-gray-700">0989 999 999</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-700">contact@d9media.vn</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Địa chỉ</h3>
              <p className="text-gray-700">123 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div ref={popupRef} className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Đóng"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-6 text-indigo-700">Đăng ký nhận tư vấn</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Họ tên*</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Nhập họ tên" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số điện thoại*</label>
                <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Nhập số điện thoại" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Nhập email (nếu có)" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nội dung cần tư vấn</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Mô tả nhu cầu của bạn" rows={3}></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg shadow hover:bg-indigo-700 transition">Gửi thông tin</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Consulting;
