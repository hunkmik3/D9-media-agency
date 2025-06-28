"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import config from "../../config/config.json";
import services from "../../config/services.json";

const Header = () => {
  const pathname = usePathname();
  const { main } = menu;
  const { logo } = config.site;

  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Ref cho vùng header/menu để detect click ngoài
  const navRef = useRef(null);

  // Đóng services dropdown khi menu mobile đóng
  useEffect(() => {
    if (!navOpen) setServicesOpen(false);
  }, [navOpen]);

  // Bắt sự kiện click ngoài vùng navRef để tự đóng menu mobile
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navOpen]);

  return (
    <header className="header" ref={navRef}>
      <nav className="navbar container flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <Logo src={logo} />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-6 md:overflow-visible">
          {main.map((item, idx) =>
            item.name === "Dịch Vụ" ? (
              <div
                key={idx}
                className="relative group services-dropdown-trigger"
              >
                <Link
                  href="/services"
                  className="nav-link inline-flex items-center"
                >
                  Dịch Vụ
                  <svg
                    className="ml-1 h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </Link>
                <div className="services-dropdown">
                  <ul className="services-grid">
                    {services.map((g) => (
                      <li key={g.name} className="services-group">
                        <h3 className="services-group-title">{g.name}</h3>
                        <ul className="services-list">
                          {Array.isArray(g.services) ? (
                            g.services.map((sv) => {
                              const mapping = [
                                { name: "SEO TỔNG THỂ", slug: "/services/seo-tong-the" },
                                { name: "FACEBOOK ADS", slug: "/services/quang-cao-facebook" },
                                { name: "GOOGLE ADS", slug: "/services/quang-cao-google" },
                                { name: "THIẾT KẾ LOGO & BỘ NHẬN DIỆN", slug: "/services/thiet-ke-logo-bo-nhan-dien" },
                                { name: "THIẾT KẾ ẤN PHẨM QUẢNG CÁO", slug: "/services/thiet-ke-an-pham-quang-cao" },
                                { name: "SẢN XUẤT VIDEO/ẢNH", slug: "/services/san-xuat-video-anh" },
                                { name: "TƯ VẤN CHIẾN LƯỢC MARKETING", slug: "/services/tu-van-chien-luoc-marketing" },
                                { name: "ĐÀO TẠO DIGITAL MARKETING", slug: "/services/dao-tao-digital-marketing" },
                                { name: "XÂY KÊNH TIKTOK", slug: "/services/xay-kenh-tiktok" },
                                { name: "CONTENT MARKETING", slug: "/services/content-marketing" },
                                { name: "VIDEO MARKETING", slug: "/services/video-marketing" },
                                { name: "MARKETING INFLUENCER", slug: "/services/marketing-influencer" },
                                { name: "EMAIL/ SMS MARKETING", slug: "/services/email-sms-marketing" },
                                { name: "BÁN HÀNG SHOPEE", slug: "/services/ban-hang-shopee" },
                                { name: "BÁN HÀNG TIKTOK", slug: "/services/ban-hang-tiktok" },
                                { name: "DỊCH VỤ LIVESTREAM", slug: "/services/dich-vu-livestream" },
                                { name: "QUAY CHỤP SẢN PHẨM SÀN", slug: "/services/quay-chup-san-pham-san" },
                                { name: "APP INSTALL", slug: "/services/app-install" },
                                { name: "ZALO OA", slug: "/services/zalo-oa" },
                              ];
                              const serviceDetail = mapping.find(item => item.name.toUpperCase() === sv.toUpperCase());
                              if (serviceDetail) {
                                return (
                                  <li key={sv} className="service-item">
                                    <Link href={serviceDetail.slug} className="service-link">
                                      {sv}
                                    </Link>
                                  </li>
                                );
                              } else {
                                return (
                                  <li key={sv} className="service-item">
                                    <span className="service-link cursor-default opacity-60">{sv}</span>
                                  </li>
                                );
                              }
                            })
                          ) : (
                            g.slug && (
                              <li className="service-item">
                                <Link href={g.slug} className="service-link">
                                  {g.name}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : item.hasChildren ? (
              <div key={idx} className="relative group">
                <span className="nav-link inline-flex items-center cursor-pointer">
                  {item.name}
                  <svg
                    className="ml-1 h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                <ul className="nav-dropdown-list">
                  {item.children.map((c, i) => (
                    <li key={i}>
                      <Link href={c.url} className="nav-dropdown-link">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.url}
                className={`nav-link ${
                  pathname === item.url ? "nav-link-active" : ""
                } ${item.name === "Liên Hệ" ? "bg-primary text-white rounded-lg px-4 py-1 font-semibold border-2 border-primary transition-colors duration-200 hover:bg-white hover:text-primary" : ""}`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 20 20">
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Mobile menu (scroll nội bộ) */}
        <div
          className={`absolute top-full inset-x-0 bg-white md:hidden overflow-y-auto transition-[max-height] duration-300 ${
            navOpen ? "max-h-[80vh] border-t" : "max-h-0"
          }`}
        >
          <ul className="p-6 space-y-4">
            {main.map((item, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.name === "Dịch Vụ" ? "/services" : item.url}
                    onClick={() => setNavOpen(false)}
                    className={`text-lg font-medium ${item.name === "Liên Hệ" ? "bg-primary text-white rounded-lg px-4 py-1 font-semibold border-2 border-primary transition-colors duration-200 hover:bg-white hover:text-primary" : ""}`}
                  >
                    {item.name}
                  </Link>
                  {item.name === "Dịch Vụ" && (
                    <button
                      onClick={() => setServicesOpen((o) => !o)}
                      className="p-1"
                    >
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.name === "Dịch Vụ" && servicesOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {services.map((g) => (
                      <React.Fragment key={g.name}>
                        <li className="font-semibold">{g.name}</li>
                        {g.services.map((sv) => (
                          (() => {
                            const mapping = [
                              { name: "SEO TỔNG THỂ", slug: "/services/seo-tong-the" },
                              { name: "FACEBOOK ADS", slug: "/services/quang-cao-facebook" },
                              { name: "GOOGLE ADS", slug: "/services/quang-cao-google" },
                              { name: "THIẾT KẾ LOGO & BỘ NHẬN DIỆN", slug: "/services/thiet-ke-logo-bo-nhan-dien" },
                              { name: "THIẾT KẾ ẤN PHẨM QUẢNG CÁO", slug: "/services/thiet-ke-an-pham-quang-cao" },
                              { name: "SẢN XUẤT VIDEO/ẢNH", slug: "/services/san-xuat-video-anh" },
                              { name: "TƯ VẤN CHIẾN LƯỢC MARKETING", slug: "/services/tu-van-chien-luoc-marketing" },
                              { name: "ĐÀO TẠO DIGITAL MARKETING", slug: "/services/dao-tao-digital-marketing" },
                              { name: "XÂY KÊNH TIKTOK", slug: "/services/xay-kenh-tiktok" },
                              { name: "CONTENT MARKETING", slug: "/services/content-marketing" },
                              { name: "VIDEO MARKETING", slug: "/services/video-marketing" },
                              { name: "MARKETING INFLUENCER", slug: "/services/marketing-influencer" },
                              { name: "EMAIL/ SMS MARKETING", slug: "/services/email-sms-marketing" },
                              { name: "BÁN HÀNG SHOPEE", slug: "/services/ban-hang-shopee" },
                              { name: "BÁN HÀNG TIKTOK", slug: "/services/ban-hang-tiktok" },
                              { name: "DỊCH VỤ LIVESTREAM", slug: "/services/dich-vu-livestream" },
                              { name: "QUAY CHỤP SẢN PHẨM SÀN", slug: "/services/quay-chup-san-pham-san" },
                              { name: "APP INSTALL", slug: "/services/app-install" },
                              { name: "ZALO OA", slug: "/services/zalo-oa" },
                            ];
                            const serviceDetail = mapping.find(item => item.name.toUpperCase() === sv.toUpperCase());
                            if (serviceDetail) {
                              return (
                                <li key={sv} className="service-item pl-2">
                                  <Link href={serviceDetail.slug} className="service-link">
                                    {sv}
                                  </Link>
                                </li>
                              );
                            } else {
                              return (
                                <li key={sv} className="service-item pl-2">
                                  <span className="service-link cursor-default opacity-60">{sv}</span>
                                </li>
                              );
                            }
                          })()
                        ))}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
