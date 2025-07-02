import Image from "next/image";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    title: "CEO Công ty ABC",
    avatar: "/images/clients/3m.png",
    content: "D9 Media Agency đã giúp doanh nghiệp chúng tôi tăng trưởng vượt bậc nhờ các giải pháp marketing sáng tạo và hiệu quả!"
  },
  {
    name: "Trần Thị B",
    title: "Marketing Manager, XYZ",
    avatar: "/images/clients/fpt.png",
    content: "Đội ngũ chuyên nghiệp, hỗ trợ tận tâm và kết quả thực sự ấn tượng. Tôi rất hài lòng khi hợp tác với D9 Media!"
  },
  {
    name: "Lê Văn C",
    title: "Founder StartUp",
    avatar: "/images/clients/lexus.png",
    content: "Dịch vụ đa dạng, tư vấn tận tình, triển khai nhanh chóng. Rất đáng tin cậy cho mọi doanh nghiệp!"
  }
];

const Testimonials = () => (
  <section className="section bg-theme-light">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center uppercase">Khách Hàng Nói Gì Về D9 Media</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <Image src={item.avatar} alt={item.name} width={64} height={64} className="rounded-full mb-4 object-cover" />
            <div className="font-bold text-lg mb-1">{item.name}</div>
            <div className="text-primary text-sm mb-2">{item.title}</div>
            <div className="text-gray-700 text-base italic">“{item.content}”</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 