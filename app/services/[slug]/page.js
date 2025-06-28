'use client';
import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const SERVICE_DETAIL = {
  "seo-tong-the": {
    title: "SEO Tổng Thể",
    subtitle: "Tối ưu website toàn diện, tăng thứ hạng bền vững trên Google",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "SEO tổng thể là giải pháp tối ưu toàn diện website để tăng thứ hạng bền vững trên Google, thu hút khách hàng tiềm năng và phát triển thương hiệu.",
    benefits: [
      { title: "Tăng thứ hạng từ khóa bền vững", desc: "Đưa website lên top Google với các từ khóa mục tiêu quan trọng" },
      { title: "Tăng lượng truy cập tự nhiên", desc: "Thu hút khách hàng tiềm năng từ tìm kiếm tự nhiên" },
      { title: "Tiết kiệm chi phí quảng cáo dài hạn", desc: "Giảm phụ thuộc vào quảng cáo trả phí, tiết kiệm ngân sách" },
      { title: "Nâng cao uy tín thương hiệu", desc: "Tăng độ tin cậy và nhận diện thương hiệu trên internet" }
    ],
    why: [
      { title: "Đội ngũ chuyên gia SEO giàu kinh nghiệm", desc: "5+ năm kinh nghiệm trong lĩnh vực SEO" },
      { title: "Quy trình triển khai minh bạch", desc: "Báo cáo định kỳ chi tiết, khách hàng luôn nắm rõ tiến độ" },
      { title: "Cam kết hiệu quả rõ ràng", desc: "Đảm bảo kết quả cụ thể trong thời gian cam kết" },
      { title: "Tối ưu chuyển đổi toàn diện", desc: "Không chỉ tăng traffic mà còn tối ưu tỷ lệ chuyển đổi" }
    ],
    process: [
      { step: "01", title: "Phân tích & Nghiên cứu", desc: "Phân tích website hiện tại, nghiên cứu từ khóa mục tiêu" },
      { step: "02", title: "Lập kế hoạch SEO", desc: "Xây dựng chiến lược SEO tổng thể, lập timeline cụ thể" },
      { step: "03", title: "Tối ưu On-page", desc: "Tối ưu nội dung, cấu trúc website, meta tags" },
      { step: "04", title: "Xây dựng Backlinks", desc: "Tạo dựng hệ thống backlinks chất lượng từ website uy tín" },
      { step: "05", title: "Theo dõi & Báo cáo", desc: "Giám sát liên tục, báo cáo định kỳ và điều chỉnh" }
    ]
  },
  "quang-cao-facebook": {
    title: "Quảng cáo Facebook",
    subtitle: "Tiếp cận hàng triệu khách hàng tiềm năng với chi phí tối ưu",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Dịch vụ quảng cáo Facebook giúp doanh nghiệp tiếp cận đúng khách hàng mục tiêu, tăng doanh số nhanh chóng với chi phí tối ưu.",
    benefits: [
      { title: "Tiếp cận hàng triệu khách hàng tiềm năng", desc: "Tận dụng sức mạnh của Facebook với 2.9 tỷ người dùng" },
      { title: "Tối ưu ngân sách quảng cáo", desc: "Chi phí quảng cáo thấp, ROI cao với targeting chính xác" },
      { title: "Đo lường hiệu quả chi tiết", desc: "Báo cáo real-time, phân tích hành vi khách hàng chi tiết" },
      { title: "Tăng nhận diện thương hiệu nhanh chóng", desc: "Xây dựng thương hiệu và tăng độ nhận biết" }
    ],
    why: [
      { title: "Kinh nghiệm triển khai hàng trăm chiến dịch thành công", desc: "Đã triển khai thành công cho 200+ doanh nghiệp" },
      { title: "Sáng tạo nội dung quảng cáo hấp dẫn", desc: "Đội ngũ designer và copywriter chuyên nghiệp" },
      { title: "Tối ưu target, remarketing hiệu quả", desc: "Sử dụng AI để target chính xác khách hàng mục tiêu" },
      { title: "Hỗ trợ chăm sóc khách hàng tận tâm", desc: "Hỗ trợ 24/7, tư vấn chiến lược và điều chỉnh kịp thời" }
    ],
    process: [
      { step: "01", title: "Phân tích thị trường & Khách hàng", desc: "Nghiên cứu thị trường, phân tích đối thủ và khách hàng mục tiêu" },
      { step: "02", title: "Thiết kế chiến dịch quảng cáo", desc: "Lập kế hoạch ngân sách, thiết kế nội dung và chọn định dạng phù hợp" },
      { step: "03", title: "Tối ưu Target & Placement", desc: "Cài đặt target chính xác, chọn vị trí đặt quảng cáo tối ưu" },
      { step: "04", title: "Triển khai & Giám sát", desc: "Chạy chiến dịch, theo dõi hiệu suất và tối ưu liên tục" },
      { step: "05", title: "Phân tích & Báo cáo", desc: "Đánh giá kết quả, báo cáo chi tiết và đề xuất cải thiện" }
    ]
  },
  "quang-cao-google": {
    title: "Quảng cáo Google",
    subtitle: "Đưa sản phẩm/dịch vụ lên top Google với chi phí tối ưu",
    bannerImage: "/images/banner/banner-3.png",
    serviceImage: "/images/services/service-3.jpg",
    what: "Quảng cáo Google Ads giúp doanh nghiệp xuất hiện ở vị trí cao nhất khi khách hàng tìm kiếm sản phẩm/dịch vụ.",
    benefits: [
      { title: "Xuất hiện ngay khi khách hàng tìm kiếm", desc: "Hiển thị quảng cáo ở vị trí đầu tiên khi khách hàng có nhu cầu" },
      { title: "Target chính xác theo từ khóa", desc: "Tiếp cận khách hàng có ý định mua hàng cao thông qua từ khóa" },
      { title: "Kiểm soát chi phí linh hoạt", desc: "Đặt ngân sách và bid linh hoạt, chỉ trả tiền khi có click" },
      { title: "Đo lường hiệu quả chính xác", desc: "Theo dõi conversion, ROI và các chỉ số quan trọng khác" }
    ],
    why: [
      { title: "Chứng nhận Google Partner", desc: "Được Google chứng nhận là đối tác uy tín với kinh nghiệm 5+ năm" },
      { title: "Tối ưu từ khóa chuyên sâu", desc: "Nghiên cứu và tối ưu từ khóa dựa trên hành vi tìm kiếm thực tế" },
      { title: "Thiết kế landing page chuyển đổi cao", desc: "Tối ưu landing page để tăng tỷ lệ chuyển đổi từ traffic quảng cáo" },
      { title: "Quản lý chiến dịch chuyên nghiệp", desc: "Giám sát 24/7, điều chỉnh bid và tối ưu liên tục" }
    ],
    process: [
      { step: "01", title: "Nghiên cứu từ khóa", desc: "Phân tích từ khóa mục tiêu, volume tìm kiếm và mức độ cạnh tranh" },
      { step: "02", title: "Thiết kế chiến dịch", desc: "Lập kế hoạch ngân sách, thiết kế nội dung quảng cáo và landing page" },
      { step: "03", title: "Cài đặt & Tối ưu", desc: "Cài đặt chiến dịch, tối ưu bid và target để đạt hiệu suất cao nhất" },
      { step: "04", title: "Giám sát & Điều chỉnh", desc: "Theo dõi hiệu suất, điều chỉnh bid và tối ưu nội dung liên tục" },
      { step: "05", title: "Báo cáo & Phân tích", desc: "Báo cáo chi tiết về hiệu suất, ROI và đề xuất cải thiện" }
    ]
  },
  "thiet-ke-logo-bo-nhan-dien": {
    title: "Thiết kế Logo & Bộ nhận diện",
    subtitle: "Tạo dựng hình ảnh thương hiệu chuyên nghiệp, ấn tượng",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Logo và bộ nhận diện thương hiệu là yếu tố quan trọng nhất trong việc xây dựng hình ảnh doanh nghiệp.",
    benefits: [
      { title: "Tăng nhận diện thương hiệu", desc: "Logo ấn tượng giúp khách hàng nhớ và nhận diện thương hiệu dễ dàng" },
      { title: "Tạo ấn tượng chuyên nghiệp", desc: "Thiết kế chất lượng cao thể hiện sự chuyên nghiệp của doanh nghiệp" },
      { title: "Tính nhất quán trong truyền thông", desc: "Bộ nhận diện thống nhất giúp truyền thông hiệu quả hơn" },
      { title: "Tăng giá trị thương hiệu", desc: "Đầu tư vào thiết kế chất lượng giúp tăng giá trị thương hiệu dài hạn" }
    ],
    why: [
      { title: "Đội ngũ designer chuyên nghiệp", desc: "Designer có kinh nghiệm 5+ năm, từng làm việc với nhiều thương hiệu lớn" },
      { title: "Quy trình thiết kế bài bản", desc: "Từ nghiên cứu thị trường đến concept, sketch và hoàn thiện cuối cùng" },
      { title: "Cam kết chất lượng 100%", desc: "Chỉnh sửa không giới hạn cho đến khi khách hàng hài lòng hoàn toàn" },
      { title: "Hỗ trợ sử dụng sau thiết kế", desc: "Cung cấp file gốc, hướng dẫn sử dụng và hỗ trợ in ấn" }
    ],
    process: [
      { step: "01", title: "Nghiên cứu & Phân tích", desc: "Tìm hiểu doanh nghiệp, đối thủ cạnh tranh và xu hướng thiết kế" },
      { step: "02", title: "Concept & Ý tưởng", desc: "Phát triển concept thiết kế, màu sắc và phong cách phù hợp" },
      { step: "03", title: "Thiết kế & Chỉnh sửa", desc: "Thiết kế logo và các thành phần của bộ nhận diện thương hiệu" },
      { step: "04", title: "Hoàn thiện & Bàn giao", desc: "Hoàn thiện thiết kế, chuẩn bị file gốc và hướng dẫn sử dụng" },
      { step: "05", title: "Hỗ trợ sau dự án", desc: "Hỗ trợ in ấn, ứng dụng và phát triển bộ nhận diện mở rộng" }
    ]
  },
  "thiet-ke-an-pham-quang-cao": {
    title: "Thiết kế ấn phẩm quảng cáo",
    subtitle: "Banner, poster, catalogue sáng tạo, thu hút mọi ánh nhìn",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Thiết kế ấn phẩm quảng cáo chuyên nghiệp giúp doanh nghiệp thu hút sự chú ý của khách hàng và truyền tải thông điệp hiệu quả.",
    benefits: [
      { title: "Thu hút sự chú ý ngay lập tức", desc: "Thiết kế ấn tượng giúp thu hút ánh nhìn và tạo ấn tượng mạnh" },
      { title: "Truyền tải thông điệp hiệu quả", desc: "Thiết kế có cấu trúc rõ ràng giúp khách hàng hiểu nhanh thông điệp" },
      { title: "Tăng tỷ lệ chuyển đổi", desc: "Call-to-action rõ ràng và thiết kế hấp dẫn tăng khả năng chuyển đổi" },
      { title: "Tính nhất quán thương hiệu", desc: "Đảm bảo tính nhất quán với bộ nhận diện thương hiệu" }
    ],
    why: [
      { title: "Kinh nghiệm thiết kế đa dạng", desc: "Thiết kế cho nhiều ngành nghề khác nhau, hiểu rõ đặc thù từng lĩnh vực" },
      { title: "Cập nhật xu hướng thiết kế", desc: "Luôn cập nhật xu hướng thiết kế mới nhất để tạo ra sản phẩm hiện đại" },
      { title: "Tối ưu cho từng kênh", desc: "Thiết kế phù hợp với đặc thù của từng kênh truyền thông" },
      { title: "Hỗ trợ in ấn chuyên nghiệp", desc: "Tư vấn chất liệu, kích thước và kỹ thuật in ấn phù hợp" }
    ],
    process: [
      { step: "01", title: "Tìm hiểu yêu cầu", desc: "Nắm rõ mục tiêu, đối tượng và thông điệp cần truyền tải" },
      { step: "02", title: "Lên concept thiết kế", desc: "Phát triển ý tưởng thiết kế, layout và phong cách phù hợp" },
      { step: "03", title: "Thiết kế & Chỉnh sửa", desc: "Thực hiện thiết kế và chỉnh sửa theo feedback của khách hàng" },
      { step: "04", title: "Tối ưu & Hoàn thiện", desc: "Tối ưu thiết kế cho từng kênh và chuẩn bị file in ấn" },
      { step: "05", title: "Bàn giao & Hỗ trợ", desc: "Bàn giao file gốc và hỗ trợ in ấn, sử dụng" }
    ]
  },
  "san-xuat-video-anh": {
    title: "Sản xuất Video/Ảnh",
    subtitle: "Quay dựng video, chụp ảnh quảng cáo chuyên nghiệp",
    bannerImage: "/images/banner/banner-3.png",
    serviceImage: "/images/services/service-3.jpg",
    what: "Sản xuất video và ảnh quảng cáo chuyên nghiệp giúp doanh nghiệp kể câu chuyện thương hiệu một cách sinh động và hấp dẫn.",
    benefits: [
      { title: "Tăng tương tác và engagement", desc: "Video và ảnh chất lượng cao thu hút sự chú ý và tăng tương tác" },
      { title: "Truyền tải thông điệp hiệu quả", desc: "Hình ảnh và video giúp khách hàng hiểu sản phẩm/dịch vụ nhanh chóng" },
      { title: "Tăng độ tin cậy thương hiệu", desc: "Nội dung chất lượng cao thể hiện sự chuyên nghiệp của doanh nghiệp" },
      { title: "Đa dạng kênh truyền thông", desc: "Có thể sử dụng trên nhiều kênh: website, social media, TVC, v.v." }
    ],
    why: [
      { title: "Đội ngũ sản xuất chuyên nghiệp", desc: "Quay phim, dựng phim và chụp ảnh có kinh nghiệm 5+ năm" },
      { title: "Thiết bị hiện đại", desc: "Sử dụng camera, máy ảnh và phần mềm dựng phim chuyên nghiệp" },
      { title: "Quy trình sản xuất bài bản", desc: "Từ kịch bản, quay phim đến hậu kỳ, đảm bảo chất lượng từng khâu" },
      { title: "Hỗ trợ phân phối nội dung", desc: "Tư vấn cách sử dụng và phân phối nội dung hiệu quả" }
    ],
    process: [
      { step: "01", title: "Lên kịch bản & Concept", desc: "Phát triển ý tưởng, kịch bản và storyboard cho video/ảnh" },
      { step: "02", title: "Chuẩn bị & Quay phim", desc: "Chuẩn bị địa điểm, thiết bị và thực hiện quay phim/chụp ảnh" },
      { step: "03", title: "Hậu kỳ & Chỉnh sửa", desc: "Dựng phim, chỉnh màu, thêm hiệu ứng và âm thanh" },
      { step: "04", title: "Hoàn thiện & Xuất file", desc: "Hoàn thiện sản phẩm và xuất file với chất lượng cao" },
      { step: "05", title: "Bàn giao & Hỗ trợ", desc: "Bàn giao sản phẩm và hỗ trợ sử dụng, phân phối" }
    ]
  },
  "tu-van-chien-luoc-marketing": {
    title: "Tư vấn chiến lược Marketing",
    subtitle: "Đồng hành xây dựng chiến lược marketing tổng thể",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Tư vấn chiến lược marketing giúp doanh nghiệp xây dựng kế hoạch marketing tổng thể, phù hợp với từng giai đoạn phát triển.",
    benefits: [
      { title: "Định hướng marketing rõ ràng", desc: "Xác định rõ mục tiêu, đối tượng và kênh marketing phù hợp" },
      { title: "Tối ưu ngân sách marketing", desc: "Phân bổ ngân sách hợp lý cho từng kênh để đạt hiệu quả cao nhất" },
      { title: "Tăng hiệu quả truyền thông", desc: "Chiến lược nhất quán giúp truyền thông hiệu quả và tiết kiệm chi phí" },
      { title: "Thích ứng với thay đổi thị trường", desc: "Chiến lược linh hoạt giúp doanh nghiệp thích ứng nhanh với thay đổi" }
    ],
    why: [
      { title: "Chuyên gia marketing giàu kinh nghiệm", desc: "Đội ngũ tư vấn có 10+ năm kinh nghiệm trong lĩnh vực marketing" },
      { title: "Phương pháp tư vấn khoa học", desc: "Áp dụng các mô hình marketing hiện đại và công cụ phân tích chuyên nghiệp" },
      { title: "Hiểu rõ thị trường Việt Nam", desc: "Nắm bắt đặc thù văn hóa và hành vi tiêu dùng của người Việt" },
      { title: "Đồng hành dài hạn", desc: "Không chỉ tư vấn mà còn hỗ trợ triển khai và đánh giá kết quả" }
    ],
    process: [
      { step: "01", title: "Phân tích tình hình hiện tại", desc: "Đánh giá thị trường, đối thủ, khách hàng và năng lực doanh nghiệp" },
      { step: "02", title: "Xác định mục tiêu & Đối tượng", desc: "Định nghĩa rõ mục tiêu marketing và phân khúc khách hàng mục tiêu" },
      { step: "03", title: "Xây dựng chiến lược tổng thể", desc: "Phát triển chiến lược marketing mix và kế hoạch triển khai" },
      { step: "04", title: "Lập kế hoạch thực hiện", desc: "Chi tiết hóa kế hoạch, timeline và ngân sách cho từng hoạt động" },
      { step: "05", title: "Giám sát & Đánh giá", desc: "Theo dõi tiến độ, đánh giá hiệu quả và điều chỉnh chiến lược" }
    ]
  },
  "dao-tao-digital-marketing": {
    title: "Đào tạo Digital Marketing",
    subtitle: "Khóa học thực chiến giúp làm chủ các kênh digital marketing",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Khóa học đào tạo Digital Marketing thực chiến giúp đội ngũ của bạn làm chủ các kênh marketing hiện đại.",
    benefits: [
      { title: "Nâng cao năng lực đội ngũ", desc: "Đội ngũ marketing có kiến thức và kỹ năng chuyên nghiệp" },
      { title: "Tiết kiệm chi phí thuê ngoài", desc: "Tự thực hiện các chiến dịch marketing mà không cần thuê agency" },
      { title: "Tăng hiệu quả marketing", desc: "Áp dụng kiến thức đã học để tối ưu các chiến dịch marketing" },
      { title: "Cập nhật xu hướng mới nhất", desc: "Nắm bắt các xu hướng và công nghệ marketing mới nhất" }
    ],
    why: [
      { title: "Giảng viên thực chiến", desc: "Giảng viên là các chuyên gia đang làm việc tại các agency và doanh nghiệp lớn" },
      { title: "Chương trình học thực tế", desc: "Nội dung học dựa trên case study thực tế và dự án thực hành" },
      { title: "Hỗ trợ sau khóa học", desc: "Hỗ trợ tư vấn và giải đáp thắc mắc sau khi hoàn thành khóa học" },
      { title: "Chứng chỉ có giá trị", desc: "Cấp chứng chỉ được công nhận bởi các đối tác trong ngành" }
    ],
    process: [
      { step: "01", title: "Đánh giá năng lực", desc: "Kiểm tra kiến thức và kỹ năng hiện tại của học viên" },
      { step: "02", title: "Thiết kế chương trình học", desc: "Xây dựng lộ trình học phù hợp với năng lực và mục tiêu" },
      { step: "03", title: "Đào tạo lý thuyết & Thực hành", desc: "Kết hợp giữa lý thuyết và thực hành trên dự án thực tế" },
      { step: "04", title: "Đánh giá & Cấp chứng chỉ", desc: "Kiểm tra kiến thức và cấp chứng chỉ cho học viên hoàn thành" },
      { step: "05", title: "Hỗ trợ sau đào tạo", desc: "Tư vấn và hỗ trợ học viên trong quá trình áp dụng kiến thức" }
    ]
  },
  "xay-kenh-tiktok": {
    title: "Xây kênh TikTok",
    subtitle: "Phát triển kênh TikTok chuyên nghiệp, thu hút triệu view cho doanh nghiệp",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Dịch vụ xây kênh TikTok giúp doanh nghiệp xây dựng kênh TikTok từ con số 0, phát triển nội dung viral, tăng follow và chuyển đổi khách hàng hiệu quả.",
    benefits: [
      { title: "Tăng nhận diện thương hiệu", desc: "Tiếp cận hàng triệu người dùng trẻ trên TikTok" },
      { title: "Nội dung viral sáng tạo", desc: "Ý tưởng nội dung hấp dẫn, bắt trend, tăng tương tác" },
      { title: "Tăng follow, tăng chuyển đổi", desc: "Xây dựng cộng đồng trung thành, thúc đẩy doanh số" },
      { title: "Quy trình chuyên nghiệp", desc: "Từ chiến lược, sản xuất video đến quản lý kênh" }
    ],
    why: [
      { title: "Đội ngũ sáng tạo trẻ trung", desc: "Chuyên gia TikTok, bắt trend nhanh, sáng tạo nội dung viral" },
      { title: "Kinh nghiệm nhiều lĩnh vực", desc: "Đã xây dựng thành công nhiều kênh triệu view cho doanh nghiệp" },
      { title: "Quy trình bài bản", desc: "Tư vấn chiến lược, sản xuất, quản lý và đo lường hiệu quả" },
      { title: "Hỗ trợ tăng trưởng lâu dài", desc: "Đồng hành phát triển kênh, tối ưu liên tục" }
    ],
    process: [
      { step: "01", title: "Tư vấn chiến lược kênh", desc: "Phân tích sản phẩm, khách hàng, xây dựng định hướng nội dung" },
      { step: "02", title: "Lên ý tưởng & Kịch bản", desc: "Sáng tạo ý tưởng, viết kịch bản video viral" },
      { step: "03", title: "Sản xuất & Đăng tải", desc: "Quay dựng, edit video chuyên nghiệp, đăng tải đúng thời điểm vàng" },
      { step: "04", title: "Quản lý & Tối ưu kênh", desc: "Theo dõi, phân tích số liệu, tối ưu nội dung và tăng trưởng follow" },
      { step: "05", title: "Báo cáo & Đề xuất", desc: "Báo cáo hiệu quả, đề xuất cải tiến liên tục" }
    ]
  },
  "content-marketing": {
    title: "Content Marketing",
    subtitle: "Chiến lược nội dung sáng tạo, thu hút khách hàng tiềm năng",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Dịch vụ Content Marketing giúp doanh nghiệp xây dựng chiến lược nội dung đa kênh, tăng nhận diện thương hiệu và chuyển đổi khách hàng.",
    benefits: [
      { title: "Tăng nhận diện thương hiệu", desc: "Nội dung chất lượng giúp thương hiệu nổi bật trên thị trường" },
      { title: "Thu hút khách hàng tiềm năng", desc: "Nội dung hữu ích, đúng insight, tăng tương tác và chuyển đổi" },
      { title: "Đa dạng kênh truyền thông", desc: "Triển khai content trên website, social, email, v.v." },
      { title: "Tối ưu chi phí marketing", desc: "Nội dung evergreen giúp tiết kiệm ngân sách quảng cáo" }
    ],
    why: [
      { title: "Đội ngũ copywriter chuyên nghiệp", desc: "Kinh nghiệm nhiều lĩnh vực, sáng tạo nội dung viral" },
      { title: "Quy trình bài bản", desc: "Từ nghiên cứu insight đến sản xuất và đo lường hiệu quả" },
      { title: "Tối ưu SEO & Social", desc: "Nội dung chuẩn SEO, tối ưu cho từng nền tảng" },
      { title: "Hỗ trợ triển khai đa kênh", desc: "Đồng hành xây dựng chiến lược nội dung tổng thể" }
    ],
    process: [
      { step: "01", title: "Nghiên cứu & Phân tích", desc: "Tìm hiểu sản phẩm, khách hàng, đối thủ và thị trường" },
      { step: "02", title: "Lên chiến lược nội dung", desc: "Xây dựng kế hoạch content theo mục tiêu marketing" },
      { step: "03", title: "Sản xuất nội dung", desc: "Viết bài, thiết kế hình ảnh, video, infographic..." },
      { step: "04", title: "Phân phối & Quảng bá", desc: "Đăng tải, chia sẻ nội dung trên các kênh phù hợp" },
      { step: "05", title: "Đo lường & Tối ưu", desc: "Theo dõi hiệu quả, tối ưu nội dung liên tục" }
    ]
  },
  "video-marketing": {
    title: "Video Marketing",
    subtitle: "Tăng tương tác, viral thương hiệu với video chuyên nghiệp",
    bannerImage: "/images/banner/banner-3.png",
    serviceImage: "/images/services/service-3.jpg",
    what: "Dịch vụ Video Marketing giúp doanh nghiệp xây dựng chiến lược video, sản xuất video viral, tăng tương tác và nhận diện thương hiệu.",
    benefits: [
      { title: "Tăng tương tác vượt trội", desc: "Video hấp dẫn thu hút sự chú ý và tăng engagement" },
      { title: "Lan tỏa thương hiệu mạnh mẽ", desc: "Video viral giúp thương hiệu phủ sóng rộng rãi" },
      { title: "Tối ưu chuyển đổi", desc: "Video giải thích, review, testimonial tăng tỷ lệ mua hàng" },
      { title: "Đa dạng định dạng", desc: "Sản xuất TVC, viral clip, video social, livestream..." }
    ],
    why: [
      { title: "Đội ngũ sản xuất chuyên nghiệp", desc: "Quay dựng, biên tập video sáng tạo, hiện đại" },
      { title: "Ý tưởng viral độc đáo", desc: "Sáng tạo concept, kịch bản video theo trend" },
      { title: "Thiết bị hiện đại", desc: "Quay phim, dựng phim bằng thiết bị chuyên dụng" },
      { title: "Hỗ trợ đa nền tảng", desc: "Tối ưu video cho Facebook, TikTok, Youtube, v.v." }
    ],
    process: [
      { step: "01", title: "Tư vấn chiến lược video", desc: "Phân tích mục tiêu, khách hàng, xây dựng định hướng video" },
      { step: "02", title: "Lên ý tưởng & Kịch bản", desc: "Sáng tạo concept, viết kịch bản video viral" },
      { step: "03", title: "Sản xuất & Biên tập", desc: "Quay dựng, edit video chuyên nghiệp" },
      { step: "04", title: "Phân phối & Quảng bá", desc: "Đăng tải, quảng bá video trên các kênh phù hợp" },
      { step: "05", title: "Đo lường & Tối ưu", desc: "Theo dõi hiệu quả, tối ưu nội dung video liên tục" }
    ]
  },
  "marketing-influencer": {
    title: "Marketing Influencer",
    subtitle: "Kết nối thương hiệu với KOLs, Influencer uy tín",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Dịch vụ Marketing Influencer giúp doanh nghiệp hợp tác với KOLs, Influencer phù hợp để lan tỏa thương hiệu, tăng uy tín và doanh số.",
    benefits: [
      { title: "Tăng độ tin cậy thương hiệu", desc: "Influencer uy tín giúp thương hiệu được tin tưởng hơn" },
      { title: "Lan tỏa thông điệp mạnh mẽ", desc: "KOLs giúp truyền tải thông điệp đến đúng đối tượng" },
      { title: "Tối ưu chi phí quảng cáo", desc: "Chọn đúng influencer giúp tiết kiệm ngân sách" },
      { title: "Đa dạng hình thức hợp tác", desc: "Review, livestream, event, viral campaign..." }
    ],
    why: [
      { title: "Mạng lưới KOLs đa lĩnh vực", desc: "Kết nối với hàng trăm influencer uy tín" },
      { title: "Tư vấn chọn KOLs phù hợp", desc: "Đề xuất influencer phù hợp với ngành hàng, mục tiêu" },
      { title: "Quy trình hợp tác minh bạch", desc: "Từ ký hợp đồng, triển khai đến báo cáo hiệu quả" },
      { title: "Hỗ trợ truyền thông đa kênh", desc: "Tối ưu hiệu quả trên nhiều nền tảng" }
    ],
    process: [
      { step: "01", title: "Tư vấn & Lựa chọn KOLs", desc: "Phân tích mục tiêu, đề xuất influencer phù hợp" },
      { step: "02", title: "Ký hợp đồng & Lên kế hoạch", desc: "Thống nhất nội dung, thời gian, ngân sách" },
      { step: "03", title: "Triển khai chiến dịch", desc: "Hợp tác sản xuất nội dung, review, livestream..." },
      { step: "04", title: "Theo dõi & Đo lường", desc: "Theo dõi hiệu quả, đo lường reach, engagement" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Báo cáo kết quả, đề xuất cải tiến cho chiến dịch tiếp theo" }
    ]
  },
  "email-sms-marketing": {
    title: "Email/SMS Marketing",
    subtitle: "Tăng chuyển đổi với chiến dịch Email & SMS tự động hóa",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Dịch vụ Email/SMS Marketing giúp doanh nghiệp tiếp cận khách hàng hiệu quả, cá nhân hóa thông điệp và tăng tỷ lệ chuyển đổi.",
    benefits: [
      { title: "Tiếp cận khách hàng nhanh chóng", desc: "Gửi thông điệp đến hàng ngàn khách hàng chỉ trong vài phút" },
      { title: "Tăng tỷ lệ chuyển đổi", desc: "Cá nhân hóa nội dung, gửi đúng thời điểm vàng" },
      { title: "Tối ưu chi phí marketing", desc: "Chi phí thấp, hiệu quả cao, đo lường chi tiết" },
      { title: "Tự động hóa quy trình", desc: "Thiết lập kịch bản gửi tự động, tiết kiệm thời gian" }
    ],
    why: [
      { title: "Hệ thống gửi tự động hiện đại", desc: "Sử dụng phần mềm gửi mail/sms hàng loạt, cá nhân hóa" },
      { title: "Tư vấn kịch bản hiệu quả", desc: "Xây dựng nội dung, kịch bản gửi phù hợp từng nhóm khách hàng" },
      { title: "Báo cáo chi tiết, minh bạch", desc: "Theo dõi tỷ lệ mở, click, chuyển đổi rõ ràng" },
      { title: "Hỗ trợ triển khai đa ngành", desc: "Kinh nghiệm triển khai cho nhiều lĩnh vực khác nhau" }
    ],
    process: [
      { step: "01", title: "Tư vấn chiến lược gửi", desc: "Phân tích mục tiêu, xây dựng kịch bản gửi phù hợp" },
      { step: "02", title: "Thiết kế nội dung", desc: "Soạn thảo email/sms hấp dẫn, cá nhân hóa" },
      { step: "03", title: "Thiết lập hệ thống gửi", desc: "Cài đặt phần mềm, phân nhóm khách hàng" },
      { step: "04", title: "Triển khai & Theo dõi", desc: "Gửi chiến dịch, theo dõi tỷ lệ mở, click, chuyển đổi" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Báo cáo kết quả, tối ưu chiến dịch tiếp theo" }
    ]
  },
  "ban-hang-shopee": {
    title: "Bán hàng Shopee",
    subtitle: "Tối ưu gian hàng, tăng doanh số trên sàn Shopee",
    bannerImage: "/images/banner/banner-3.png",
    serviceImage: "/images/services/service-3.jpg",
    what: "Dịch vụ bán hàng Shopee giúp doanh nghiệp tối ưu gian hàng, quảng cáo và vận hành để tăng doanh số vượt trội trên Shopee.",
    benefits: [
      { title: "Tối ưu gian hàng chuyên nghiệp", desc: "Thiết kế hình ảnh, mô tả, SEO sản phẩm chuẩn Shopee" },
      { title: "Tăng hiển thị & đơn hàng", desc: "Chạy quảng cáo, flash sale, tăng traffic và chuyển đổi" },
      { title: "Quản lý vận hành hiệu quả", desc: "Tư vấn quy trình xử lý đơn, chăm sóc khách hàng" },
      { title: "Báo cáo minh bạch", desc: "Theo dõi doanh số, đề xuất tối ưu liên tục" }
    ],
    why: [
      { title: "Kinh nghiệm vận hành sàn", desc: "Đã triển khai cho nhiều shop top ngành trên Shopee" },
      { title: "Đội ngũ chuyên gia sàn TMĐT", desc: "Hiểu rõ thuật toán, xu hướng và công cụ Shopee" },
      { title: "Quy trình bài bản", desc: "Từ tối ưu gian hàng, quảng cáo đến chăm sóc khách hàng" },
      { title: "Hỗ trợ tăng trưởng lâu dài", desc: "Đồng hành phát triển shop, tối ưu liên tục" }
    ],
    process: [
      { step: "01", title: "Tư vấn & Phân tích shop", desc: "Đánh giá gian hàng, sản phẩm, đối thủ" },
      { step: "02", title: "Tối ưu gian hàng", desc: "Thiết kế hình ảnh, mô tả, SEO sản phẩm" },
      { step: "03", title: "Chạy quảng cáo & Flash sale", desc: "Thiết lập chiến dịch quảng cáo, chương trình khuyến mãi" },
      { step: "04", title: "Quản lý vận hành & CSKH", desc: "Tư vấn quy trình xử lý đơn, chăm sóc khách hàng" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Theo dõi doanh số, đề xuất cải tiến" }
    ]
  },
  "ban-hang-tiktok": {
    title: "Bán hàng TikTok",
    subtitle: "Tối ưu kênh TikTok Shop, tăng doanh số vượt trội",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Dịch vụ bán hàng TikTok giúp doanh nghiệp xây dựng kênh TikTok Shop, tối ưu nội dung và quảng cáo để tăng doanh số.",
    benefits: [
      { title: "Tối ưu kênh TikTok Shop", desc: "Thiết kế gian hàng, tối ưu sản phẩm, video bán hàng" },
      { title: "Tăng traffic & đơn hàng", desc: "Chạy quảng cáo, livestream, tăng follow và chuyển đổi" },
      { title: "Quản lý vận hành hiệu quả", desc: "Tư vấn quy trình xử lý đơn, chăm sóc khách hàng" },
      { title: "Báo cáo minh bạch", desc: "Theo dõi doanh số, đề xuất tối ưu liên tục" }
    ],
    why: [
      { title: "Kinh nghiệm triển khai TikTok Shop", desc: "Đã triển khai cho nhiều shop top ngành trên TikTok" },
      { title: "Đội ngũ chuyên gia TikTok", desc: "Hiểu rõ thuật toán, xu hướng và công cụ TikTok" },
      { title: "Quy trình bài bản", desc: "Từ tối ưu gian hàng, quảng cáo đến chăm sóc khách hàng" },
      { title: "Hỗ trợ tăng trưởng lâu dài", desc: "Đồng hành phát triển shop, tối ưu liên tục" }
    ],
    process: [
      { step: "01", title: "Tư vấn & Phân tích shop", desc: "Đánh giá gian hàng, sản phẩm, đối thủ" },
      { step: "02", title: "Tối ưu gian hàng", desc: "Thiết kế hình ảnh, mô tả, SEO sản phẩm" },
      { step: "03", title: "Chạy quảng cáo & Livestream", desc: "Thiết lập chiến dịch quảng cáo, chương trình livestream" },
      { step: "04", title: "Quản lý vận hành & CSKH", desc: "Tư vấn quy trình xử lý đơn, chăm sóc khách hàng" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Theo dõi doanh số, đề xuất cải tiến" }
    ]
  },
  "dich-vu-livestream": {
    title: "Dịch vụ Livestream",
    subtitle: "Tăng doanh số, tương tác mạnh mẽ với livestream chuyên nghiệp",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Dịch vụ Livestream giúp doanh nghiệp tổ chức livestream bán hàng, ra mắt sản phẩm, tăng tương tác và doanh số vượt trội.",
    benefits: [
      { title: "Tăng tương tác trực tiếp", desc: "Livestream giúp kết nối khách hàng, tăng độ tin cậy" },
      { title: "Tăng doanh số nhanh chóng", desc: "Chốt đơn trực tiếp, tăng tỷ lệ chuyển đổi" },
      { title: "Chuyên nghiệp, sáng tạo", desc: "Kịch bản, MC, kỹ thuật viên chuyên nghiệp" },
      { title: "Báo cáo minh bạch", desc: "Theo dõi số liệu, đề xuất tối ưu liên tục" }
    ],
    why: [
      { title: "Kinh nghiệm tổ chức livestream", desc: "Đã tổ chức hàng trăm buổi livestream cho nhiều ngành hàng" },
      { title: "Đội ngũ kỹ thuật chuyên nghiệp", desc: "MC, kỹ thuật viên, quay phim giàu kinh nghiệm" },
      { title: "Ý tưởng sáng tạo, kịch bản hấp dẫn", desc: "Tư vấn kịch bản, minigame, tăng tương tác" },
      { title: "Hỗ trợ đa nền tảng", desc: "Livestream Facebook, TikTok, Shopee, Youtube..." }
    ],
    process: [
      { step: "01", title: "Tư vấn & Lên kịch bản", desc: "Phân tích mục tiêu, xây dựng kịch bản livestream" },
      { step: "02", title: "Chuẩn bị & Set up", desc: "Chuẩn bị thiết bị, nhân sự, sản phẩm" },
      { step: "03", title: "Tổ chức livestream", desc: "MC dẫn dắt, tương tác, chốt đơn trực tiếp" },
      { step: "04", title: "Theo dõi & Đo lường", desc: "Theo dõi số liệu, đo lường hiệu quả" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Báo cáo kết quả, đề xuất cải tiến" }
    ]
  },
  "quay-chup-san-pham-san": {
    title: "Quay chụp sản phẩm sàn",
    subtitle: "Hình ảnh, video sản phẩm chuyên nghiệp cho sàn TMĐT",
    bannerImage: "/images/banner/banner-3.png",
    serviceImage: "/images/services/service-3.jpg",
    what: "Dịch vụ quay chụp sản phẩm sàn giúp doanh nghiệp có hình ảnh, video sản phẩm chất lượng cao, tăng tỷ lệ chuyển đổi trên các sàn TMĐT.",
    benefits: [
      { title: "Hình ảnh, video chuyên nghiệp", desc: "Tăng độ tin cậy, thu hút khách hàng trên sàn" },
      { title: "Tối ưu cho từng sàn TMĐT", desc: "Định dạng, kích thước chuẩn Shopee, Tiki, Lazada..." },
      { title: "Tăng tỷ lệ chuyển đổi", desc: "Hình ảnh đẹp giúp tăng tỷ lệ mua hàng" },
      { title: "Quy trình chuyên nghiệp", desc: "Từ tư vấn, chụp/quay đến chỉnh sửa, bàn giao" }
    ],
    why: [
      { title: "Đội ngũ photographer, videographer chuyên nghiệp", desc: "Kinh nghiệm chụp/quay sản phẩm cho nhiều ngành hàng" },
      { title: "Thiết bị hiện đại", desc: "Sử dụng máy ảnh, camera, studio chuyên dụng" },
      { title: "Tối ưu cho từng nền tảng", desc: "Chỉnh sửa, xuất file đúng chuẩn từng sàn" },
      { title: "Hỗ trợ chỉnh sửa, bàn giao nhanh", desc: "Chỉnh sửa theo yêu cầu, bàn giao file nhanh chóng" }
    ],
    process: [
      { step: "01", title: "Tư vấn & Lên ý tưởng", desc: "Phân tích sản phẩm, xây dựng concept chụp/quay" },
      { step: "02", title: "Chuẩn bị & Set up", desc: "Chuẩn bị sản phẩm, thiết bị, studio" },
      { step: "03", title: "Chụp/quay sản phẩm", desc: "Thực hiện chụp/quay theo concept đã duyệt" },
      { step: "04", title: "Chỉnh sửa & Hoàn thiện", desc: "Chỉnh sửa hình ảnh, video, xuất file đúng chuẩn" },
      { step: "05", title: "Bàn giao & Hỗ trợ", desc: "Bàn giao file, hỗ trợ upload lên sàn" }
    ]
  },
  "app-install": {
    title: "App Install",
    subtitle: "Tăng lượt cài đặt ứng dụng nhanh chóng, đúng đối tượng",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Dịch vụ App Install giúp doanh nghiệp tăng lượt cài đặt ứng dụng mobile, tối ưu chi phí và nhắm đúng khách hàng mục tiêu.",
    benefits: [
      { title: "Tăng lượt cài đặt nhanh chóng", desc: "Chạy quảng cáo đa kênh, nhắm đúng đối tượng" },
      { title: "Tối ưu chi phí quảng cáo", desc: "Công nghệ tracking, tối ưu bid và target" },
      { title: "Chống gian lận, đảm bảo chất lượng", desc: "Lọc click ảo, đảm bảo cài đặt thật" },
      { title: "Báo cáo minh bạch", desc: "Theo dõi số liệu, đề xuất tối ưu liên tục" }
    ],
    why: [
      { title: "Kinh nghiệm chạy app install đa ngành", desc: "Đã triển khai cho nhiều app lớn nhỏ tại Việt Nam" },
      { title: "Công nghệ tracking hiện đại", desc: "Sử dụng SDK, pixel, đo lường chính xác" },
      { title: "Tối ưu target, creative", desc: "Chọn đúng đối tượng, sáng tạo nội dung quảng cáo" },
      { title: "Báo cáo chi tiết, minh bạch", desc: "Cập nhật số liệu real-time, đề xuất tối ưu" }
    ],
    process: [
      { step: "01", title: "Tư vấn & Phân tích app", desc: "Đánh giá app, xác định mục tiêu cài đặt" },
      { step: "02", title: "Lên kế hoạch quảng cáo", desc: "Chọn kênh, ngân sách, thiết kế nội dung" },
      { step: "03", title: "Triển khai chiến dịch", desc: "Chạy quảng cáo, tối ưu bid và target" },
      { step: "04", title: "Theo dõi & Đo lường", desc: "Theo dõi số liệu, đo lường hiệu quả" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Báo cáo kết quả, đề xuất cải tiến" }
    ]
  },
  "zalo-oa": {
    title: "Zalo OA",
    subtitle: "Xây dựng & phát triển kênh Zalo OA chuyên nghiệp cho doanh nghiệp",
    bannerImage: "/images/banner/banner-2.png",
    serviceImage: "/images/services/service-2.jpg",
    what: "Dịch vụ Zalo OA giúp doanh nghiệp xây dựng kênh Zalo Official Account, chăm sóc khách hàng và tăng chuyển đổi hiệu quả.",
    benefits: [
      { title: "Tăng nhận diện thương hiệu trên Zalo", desc: "Tiếp cận hàng triệu người dùng Việt Nam" },
      { title: "Chăm sóc khách hàng tự động", desc: "Tích hợp chatbot, gửi tin nhắn tự động" },
      { title: "Tối ưu chi phí marketing", desc: "Chi phí thấp, hiệu quả cao, đo lường chi tiết" },
      { title: "Hỗ trợ bán hàng đa kênh", desc: "Kết nối Zalo OA với website, Facebook, Shopee..." }
    ],
    why: [
      { title: "Kinh nghiệm triển khai Zalo OA", desc: "Đã xây dựng cho nhiều doanh nghiệp lớn nhỏ" },
      { title: "Tư vấn chiến lược phù hợp", desc: "Xây dựng kịch bản chăm sóc, bán hàng hiệu quả" },
      { title: "Tích hợp công nghệ mới", desc: "Chatbot, automation, đo lường hiệu quả" },
      { title: "Hỗ trợ triển khai đa ngành", desc: "Kinh nghiệm triển khai cho nhiều lĩnh vực khác nhau" }
    ],
    process: [
      { step: "01", title: "Tư vấn & Lên kế hoạch", desc: "Phân tích mục tiêu, xây dựng chiến lược Zalo OA" },
      { step: "02", title: "Thiết kế & Xây dựng OA", desc: "Tạo OA, thiết kế giao diện, tích hợp chatbot" },
      { step: "03", title: "Triển khai & Quảng bá", desc: "Chạy quảng cáo, tăng follow, gửi tin nhắn" },
      { step: "04", title: "Chăm sóc & Bán hàng", desc: "Tư vấn, chăm sóc khách hàng, chốt đơn" },
      { step: "05", title: "Báo cáo & Tối ưu", desc: "Báo cáo kết quả, đề xuất cải tiến" }
    ]
  }
};

const COLOR_MAP = {
  "seo-tong-the": { from: "from-blue-600", to: "to-indigo-600" },
  "quang-cao-facebook": { from: "from-blue-600", to: "to-indigo-600" },
  "quang-cao-google": { from: "from-blue-600", to: "to-indigo-600" },
  "thiet-ke-logo-bo-nhan-dien": { from: "from-purple-600", to: "to-pink-600" },
  "thiet-ke-an-pham-quang-cao": { from: "from-purple-600", to: "to-pink-600" },
  "san-xuat-video-anh": { from: "from-red-600", to: "to-orange-600" },
  "tu-van-chien-luoc-marketing": { from: "from-green-600", to: "to-teal-600" },
  "dao-tao-digital-marketing": { from: "from-green-600", to: "to-teal-600" },
  // fallback
  "default": { from: "from-blue-600", to: "to-indigo-600" },
};

// Dự án nổi bật (rút gọn, mapping theo type)
const ALL_PROJECTS = [
  { name: "TÂM MINH FOODS", slug: "tam-minh-foods", image: "/images/projects/tam-minh-foods.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "SAO THÁI DƯƠNG", slug: "sao-thai-duong", image: "/images/projects/sao-thai-duong.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "NINE WEST", slug: "nine-west", image: "/images/projects/nine-west.jpg", type: "SEO" },
  { name: "LEXUS THĂNG LONG", slug: "lexus-thang-long", image: "/images/projects/lexus-thang-long.jpg", type: "SEO" },
  { name: "JEWIS", slug: "jewis", image: "/images/projects/jewis.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "SAO THÁI DƯƠNG (QC)", slug: "sao-thai-duong-qc", image: "/images/projects/sao-thai-duong-qc.jpg", type: "QUẢNG CÁO" },
  { name: "JEWIS (QC)", slug: "jewis-qc", image: "/images/projects/jewis-qc.jpg", type: "QUẢNG CÁO" },
  { name: "LIPO HEALTHY FOOD (TV)", slug: "lipo-healthy-food-tv", image: "/images/projects/lipo-healthy-food-tv.jpg", type: "TƯ VẤN" },
  // ... thêm các dự án khác nếu muốn ...
];

// Mapping dịch vụ -> type dự án liên quan
const SERVICE_TYPE_MAP = {
  "seo-tong-the": "SEO",
  "quang-cao-facebook": "QUẢNG CÁO",
  "quang-cao-google": "QUẢNG CÁO",
  "thiet-ke-logo-bo-nhan-dien": "TƯ VẤN",
  "thiet-ke-an-pham-quang-cao": "QUẢNG CÁO",
  "san-xuat-video-anh": "QUẢNG CÁO",
  "tu-van-chien-luoc-marketing": "TƯ VẤN",
  "dao-tao-digital-marketing": "TƯ VẤN",
  "xay-kenh-tiktok": "QUẢNG CÁO",
  "content-marketing": "SEO",
  "video-marketing": "QUẢNG CÁO",
  "marketing-influencer": "QUẢNG CÁO",
  "email-sms-marketing": "QUẢNG CÁO",
  "ban-hang-shopee": "SÀN THƯƠNG MẠI ĐIỆN TỬ",
  "ban-hang-tiktok": "SÀN THƯƠNG MẠI ĐIỆN TỬ",
  "dich-vu-livestream": "QUẢNG CÁO",
  "quay-chup-san-pham-san": "SÀN THƯƠNG MẠI ĐIỆN TỬ",
  "app-install": "QUẢNG CÁO",
  "zalo-oa": "QUẢNG CÁO",
};

// Hàm sinh thành tựu mẫu
function getProjectAchievement(type) {
  switch(type) {
    case "SEO": return "Tăng trưởng traffic 300%, Top 1 Google nhiều từ khóa";
    case "QUẢNG CÁO": return "Doanh số tăng gấp 2, tiếp cận hàng triệu khách hàng";
    case "SÀN THƯƠNG MẠI ĐIỆN TỬ": return "Tăng trưởng đơn hàng 250%, mở rộng thị trường toàn quốc";
    case "TƯ VẤN": return "Chiến lược thành công, tăng trưởng bền vững cho doanh nghiệp";
    default: return "Thành tựu nổi bật, khách hàng hài lòng";
  }
}

// Hàm lấy 3 dự án liên quan (ưu tiên cùng nhóm, nếu thiếu thì random từ các dự án khác)
function getRelatedProjects(slug) {
  const type = SERVICE_TYPE_MAP[slug];
  const related = ALL_PROJECTS.filter(p => p.type === type);
  if (related.length >= 3) return related.slice(0, 3);
  // Nếu chưa đủ 3, lấy thêm random từ các dự án khác (không trùng)
  const others = ALL_PROJECTS.filter(p => p.type !== type);
  while (related.length < 3 && others.length > 0) {
    const idx = Math.floor(Math.random() * others.length);
    related.push(others[idx]);
    others.splice(idx, 1);
  }
  return related.slice(0, 3);
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const data = SERVICE_DETAIL[slug] || {
    title: "Dịch vụ đang cập nhật",
    subtitle: "Thông tin dịch vụ sẽ được cập nhật sớm",
    bannerImage: "/images/banner/banner-1.png",
    serviceImage: "/images/services/service-1.jpg",
    what: "Thông tin dịch vụ sẽ được cập nhật sớm.",
    benefits: [],
    why: [],
    process: []
  };
  const color = COLOR_MAP[slug] || COLOR_MAP["default"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className={`relative h-[60vh] bg-gradient-to-r ${color.from} ${color.to}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">LĨNH VỰC</p>
                <p className="text-white font-semibold">DỊCH VỤ</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-medium">GIẢI PHÁP</p>
                <p className="text-white font-semibold">{data.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-4 min-w-max border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`py-4 px-4 min-w-max border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === 'challenge'
                  ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Thách thức
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`py-4 px-4 min-w-max border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === 'solution'
                  ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Giải pháp
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-4 min-w-max border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === 'results'
                  ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">VỀ DỊCH VỤ {data.title.toUpperCase()}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">{data.what}</p>
            </div>
            <div className="flex justify-center mt-8">
              <Image src={data.serviceImage} alt={data.title} width={480} height={320} className="rounded-2xl shadow-xl border border-blue-100" />
            </div>
            {/* Dự án tiêu biểu liên quan */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">DỰ ÁN TIÊU BIỂU LIÊN QUAN</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {getRelatedProjects(slug).map((project, idx) => (
                  <div key={project.slug} className="rounded-2xl shadow-lg bg-white overflow-hidden group hover:shadow-2xl transition-all border border-blue-100 flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">{project.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{getProjectAchievement(project.type)}</p>
                      </div>
                      <Link href={`/projects/${project.slug}`} className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow hover:from-blue-700 hover:to-indigo-700 transition-all">Xem chi tiết</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'challenge' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">THÁCH THỨC</h2>
            <div className="space-y-6">
              {data.benefits && data.benefits.map((b, idx) => (
                <div key={idx} className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">{idx + 1}. {b.title}</h3>
                  <p className="text-red-700">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'solution' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">GIẢI PHÁP TỪ CHÚNG TÔI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.why && data.why.map((w, idx) => (
                <div key={idx} className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{w.title}</h3>
                  <p className="text-green-700">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'results' && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">KẾT QUẢ ĐẠT ĐƯỢC</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.process && data.process.map((p, idx) => (
                <div key={idx} className="text-center p-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg text-white">
                  <div className="text-4xl font-bold mb-2">{p.step}</div>
                  <div className="text-lg">{p.title}</div>
                  <p className="text-sm mt-2 opacity-90">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            SẴN SÀNG SỞ HỮU DỊCH VỤ {data.title.toUpperCase()}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi giúp bạn phát triển thương hiệu và tăng trưởng doanh nghiệp vượt trội
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Liên hệ tư vấn
            </Link>
            <Link 
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Xem thêm dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
