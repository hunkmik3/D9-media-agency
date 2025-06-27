"use client";
import { useState } from "react";

const FeaturedProjects = ({ featured_projects }) => {
  if (!featured_projects) return null;
  const { title, tabs } = featured_projects;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-6 uppercase">{title}</h2>
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {tabs.map((tab, idx) => (
            <button
              key={tab.name}
              className={`uppercase font-semibold text-base md:text-lg px-2 pb-2 border-b-2 transition-all ${activeTab === idx ? "border-primary text-primary" : "border-transparent text-gray-400 hover:text-primary"}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabs[activeTab].projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src={project.image} alt={project.title} className="w-[318px] h-[220px] object-contain rounded-xl" />
            </div>
          ))}
        </div>
        {tabs[activeTab].show_contact_button && (
          <div className="flex justify-center mt-8">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3 font-bold">LIÊN HỆ NGAY</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects; 