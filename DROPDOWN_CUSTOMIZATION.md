# Hướng Dẫn Chỉnh Sửa CSS Dropdown Menu

## Tổng Quan
File `styles/dropdown.scss` chứa tất cả CSS cho dropdown menu. Bạn có thể chỉnh sửa file này mà không ảnh hưởng đến các phần khác của website.

## Cấu Trúc File

### 1. General Dropdown Styles (`.nav-dropdown`)
- Áp dụng cho tất cả dropdown menu thông thường
- Các class chính:
  - `.nav-dropdown-list`: Container chính của dropdown
  - `.nav-dropdown-item`: Từng item trong dropdown
  - `.nav-dropdown-link`: Link trong dropdown

### 2. Services Dropdown Styles (`.services-dropdown`)
- Áp dụng riêng cho dropdown "Dịch Vụ"
- Các class chính:
  - `.services-grid`: Grid layout cho services
  - `.service-item`: Từng service item
  - `.service-link`: Link của service
  - `.service-category`: Tên category (PERFORMANCE BRANDING, E-COMMERCE, etc.)

## Cách Chỉnh Sửa

### 1. Thay Đổi Màu Sắc
```scss
// Thay đổi màu nền dropdown
.nav-dropdown-list {
  background: #your-color;
}

// Thay đổi màu text
.nav-dropdown-link {
  color: #your-color;
}

// Thay đổi màu hover
.nav-dropdown-link:hover {
  color: #your-hover-color;
}
```

### 2. Thay Đổi Kích Thước
```scss
// Thay đổi padding
.nav-dropdown-link {
  padding: 16px 20px; // Thay vì 12px 16px
}

// Thay đổi font size
.nav-dropdown-link {
  font-size: 16px; // Thay vì 14px
}
```

### 3. Thay Đổi Animation
```scss
// Thay đổi transition
.nav-dropdown-list {
  transition: all 0.5s ease; // Thay vì 0.3s
}

// Thay đổi transform
.nav-dropdown-list {
  transform: translateY(-20px); // Thay vì -10px
}
```

### 4. Thay Đổi Shadow
```scss
// Thay đổi box-shadow
.nav-dropdown-list {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}
```

### 5. Thay Đổi Border Radius
```scss
// Thay đổi border-radius
.nav-dropdown-list {
  border-radius: 16px; // Thay vì 8px
}
```

## CSS Variables (Biến CSS)

Bạn có thể sử dụng các biến CSS để dễ dàng thay đổi:

```scss
:root {
  --dropdown-bg: #ffffff;
  --dropdown-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  --dropdown-border-radius: 8px;
  --dropdown-transition: all 0.3s ease;
  --dropdown-text-color: #374151;
  --dropdown-hover-bg: #f9fafb;
  --dropdown-hover-color: #2563eb;
  --dropdown-padding: 12px 16px;
  --dropdown-font-size: 14px;
}
```

## Responsive Design

### Desktop (768px+)
- Dropdown hiển thị khi hover
- Position: absolute
- Có shadow và animation

### Mobile (< 768px)
- Dropdown hiển thị luôn
- Position: static
- Không có shadow
- Padding-left: 20px

## Troubleshooting

### Nếu Dropdown Không Hiển Thị
1. Kiểm tra z-index có đủ cao không
2. Kiểm tra parent element có `position: relative` không
3. Kiểm tra CSS có bị override không

### Nếu Animation Không Hoạt Động
1. Kiểm tra transition property
2. Kiểm tra transform values
3. Kiểm tra opacity và visibility

### Nếu Layout Bị Hỏng
1. Kiểm tra grid-template-columns
2. Kiểm tra min-width
3. Kiểm tra padding và margin

## Ví Dụ Chỉnh Sửa

### Thay Đổi Màu Theme
```scss
.nav-dropdown-link:hover {
  background-color: #e3f2fd;
  color: #1976d2;
}

.service-category {
  color: #1976d2;
}
```

### Thêm Border
```scss
.nav-dropdown-list {
  border: 2px solid #e0e0e0;
}
```

### Thay Đổi Animation
```scss
.nav-dropdown-list {
  transform: scale(0.95) translateY(-10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-dropdown:hover .nav-dropdown-list {
  transform: scale(1) translateY(0);
}
```

## Lưu Ý Quan Trọng

1. **Không xóa file `dropdown.scss`** - Nó đã được import vào `style.scss`
2. **Backup trước khi chỉnh sửa** - Để có thể khôi phục nếu cần
3. **Test trên nhiều thiết bị** - Đảm bảo responsive hoạt động tốt
4. **Kiểm tra performance** - Animation không nên quá nặng

## Hỗ Trợ

Nếu gặp vấn đề, hãy kiểm tra:
1. Console trong Developer Tools
2. CSS specificity
3. File import order
4. Tailwind CSS conflicts 