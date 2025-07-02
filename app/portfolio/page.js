import React from "react";
import SeoMeta from "@layouts/SeoMeta";

const TOTAL_PAGES = 25;

const PortfolioPage = () => (
  <>
    <SeoMeta title="Portfolio" image="/images/logo.png" />
    <section className="bg-white min-h-[80vh] flex flex-col items-center justify-center p-0 m-0" style={{paddingTop:0, marginTop:0}}>
      <div style={{ width: "100%", maxWidth: 900 }}>
        {[...Array(TOTAL_PAGES)].map((_, idx) => (
          <img
            key={idx}
            src={`/portfolio-${idx + 1}.jpg`}
            alt={`Portfolio trang ${idx + 1}`}
            style={{ width: "100%", marginBottom: 24, borderRadius: 12, boxShadow: "0 2px 16px #0001" }}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  </>
);

export default PortfolioPage;