import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand flex items-center py-0 md:py-1"
      style={{
        height: logo_height.replace("px", "") + "px",
        width: logo_width.replace("px", "") + "px",
        minHeight: logo_height.replace("px", "") + "px",
        minWidth: logo_width.replace("px", "") + "px",
      }}
    >
      {src || logo ? (
        <Image
          width={logo_width.replace("px", "")}
          height={logo_height.replace("px", "")}
          src={src ? src : logo}
          alt={title}
          priority
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      ) : logo_text ? (
        <span className="text-xl font-bold">{logo_text}</span>
      ) : (
        <span className="text-xl font-bold">{title}</span>
      )}
    </Link>
  );
};

export default Logo;
