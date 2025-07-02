"use client";

import Link from "next/link";

const ProfileSection = ({ profile_section }) => {
  if (!profile_section) return null;
  const { title, description, video_url, button_label, button_link } = profile_section;

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 uppercase leading-tight">{title}</h2>
            <p className="mb-6 whitespace-pre-line text-lg text-dark/90">{description}</p>
            <Link href={button_link} className="btn btn-primary text-base px-6 py-2 font-bold">
              {button_label}
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={video_url}
                title="Profile Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection; 