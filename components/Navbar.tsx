"use client";
import { LuBaby } from "react-icons/lu";
import { FaChild } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaHandHoldingHeart,
  FaUsers,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";

const LogoMiAlegria = () => {
  return (
    <>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent z-10"></div> */}

      {/* Logo centrado sobre el hero */}
      <div className="absolute inset-0 flex justify-center items-center h-[300px] lg:top-[70px] top-8">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi_alegria-logo-transp.png?alt=media&token=002f824b-eedb-4e9e-b804-5c1c666efb55"
          alt="MI ALEGRIA DAYCARE LOGO"
          fill
          className="z-30 imgShadow  object-contain"
        />
      </div>
    </>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // puedes ajustar el valor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/home", label: t("nav.home"), icon: FaHome },
    { href: "/home2", label: t("nav.home2"), icon: FaHome },
    { href: "/services", label: t("nav.services"), icon: FaHandHoldingHeart },
    { href: "/about", label: t("nav.about"), icon: FaUsers },
    { href: "/contact", label: t("nav.contact"), icon: FaEnvelope },
    { href: "/blog", label: t("nav.blog"), icon: FaBlog },
  ];

  return (
    <>
      {scrolled ? (
        <nav className="bg-[white] shadow-md h-full sticky top-0 z-50">
          {/* Logo centrado sobre el hero */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-auto mx-auto">
              <div className="flex items-center h-auto">
                <Link
                  href="/home"
                  className="flex items-center transition-all duration-300"
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi%20Alegria%20(3).png?alt=media&token=e0b01ca9-1cb5-4a29-ae06-0eacfe63d4da"
                    alt="MI ALEGRIA DAYCARE LOGO"
                    width={100}
                    height={100}
                    className="w-auto mr-2 h-[65px]"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-dark transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}

                <select
                  aria-label="Language Selector"
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  value={i18n.language}
                  className="ml-4 rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" focus:outline-none"
                >
                  {isOpen ? (
                    <FaChild className="h-7 w-7 text-[#000000]" />
                  ) : (
                    <FaHandsHoldingChild className="h-8 w-8 text-[#000000] " />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-primary-dark hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <select
                  aria-label="Language Selector"
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  value={i18n.language}
                  className="mt-4 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </div>
          )}
        </nav>
      ) : (
        <LogoMiAlegria />
      )}
    </>
  );
};

export default Navbar;
