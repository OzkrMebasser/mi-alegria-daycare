"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import LeftSideNavbar from "./LeftSideNavbar";

const LogoMiAlegria = () => {
  return (
    <>
      {/* Logo centrado sobre el hero */}
      <div className="absolute inset-0 flex justify-center items-center h-[300px] lg:top-[70px] top-8">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi_alegria-logo-transp.png?alt=media&token=002f824b-eedb-4e9e-b804-5c1c666efb55"
          alt="MI ALEGRIA DAYCARE LOGO"
          fill
          className="z-30 imgShadow object-contain"
        />
      </div>
      <LeftSideNavbar />
    </>
  );
};

const DualNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollLimit = isMobile ? 100 : 50;

      setScrolled(window.scrollY > scrollLimit);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Check initial scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return <>{scrolled ? <Navbar /> : <LogoMiAlegria />}</>;
};

export default DualNavbar;
