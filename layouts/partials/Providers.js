"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Providers = ({ children }) => {
  const pathname = usePathname();
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setTransitionStage("fadeOut");
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    window.scroll(0, 0);
    }, 250); // thời gian fade out
    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className={`page-transition ${transitionStage}`}>
      {displayChildren}
    </div>
  );
};

export default Providers;
