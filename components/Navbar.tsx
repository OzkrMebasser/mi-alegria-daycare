"use client";
import { useState, useEffect } from "react";
import { FaChild } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useLanguage } from "../hooks/useLanguage"; 
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); 

  // Obtiene la ruta actual
  const pathname = usePathname();

  // Usa el hook personalizado para manejar el idioma
  const { t, language, handleLanguageChange } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Puedes ajustar el valor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavItem {
    href: string;
    label: string;
    btnBgHover: string; // Hover style
    btnBgActive: string; // Active style
  }

  const navItems: NavItem[] = [
    {
      href: "/home",
      label: t("nav.home"),
      btnBgHover: "hover:bg-yellow-300",
      btnBgActive: "bg-yellow-300 text-gray-800",
    },
    {
      href: "/services",
      label: t("nav.services"),
      btnBgHover: "hover:bg-green-500",
      btnBgActive: "bg-green-500 text-gray-800",
    },
    {
      href: "/about",
      label: t("nav.about"),
      btnBgHover: "hover:bg-orange-500",
      btnBgActive: "bg-orange-500 text-gray-800",
    },
    {
      href: "/contact",
      label: t("nav.contact"),
      btnBgHover: "hover:bg-blue-400",
      btnBgActive: "bg-blue-400 text-gray-800",
    },
    {
      href: "/blog",
      label: t("nav.blog"),
      btnBgHover: "hover:bg-pink-400",
      btnBgActive: "bg-pink-400 text-gray-800",
    },
  ];

  return (
    <>
      <nav className="bg-[white] shadow-md h-full sticky top-0 z-50">
        {/* Logo centrado sobre el hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
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
                  className={`flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors ${
                    item.btnBgHover
                  } rounded-md px-3 py-2 ${
                    pathname === item.href ? item.btnBgActive : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Selector de idioma con banderas */}
              <div className="relative ">
                <button
                  
                  onClick={() => setIsLangMenuOpen((prev) => !prev)}
                  className="flex items-center justify-center    "
                >
                  {/* Bandera dinámica según el idioma */}
                  <span
                    className={`fi ${
                      language === "en" ? "fi-ca" : "fi-mx"
                    } w-8 h-8 rounded-sm`}
                  ></span>
                </button>

                {/* Menú desplegable de idiomas */}
                {isLangMenuOpen && (
                  <ul className="absolute mt-4 -ml-[4rem] w-32 bg-white  rounded-b-md shadow-lg">
                    <li
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer border-b-[1px] b"
                      onClick={() => {
                        handleLanguageChange("en");
                        setIsLangMenuOpen(false);
                      }}
                    >
                      <span className="fi fi-ca w-5 h-5 rounded-sm"></span>
                      <span>English</span>
                    </li>
                    <li
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleLanguageChange("es");
                        setIsLangMenuOpen(false);
                      }}
                    >
                     
                      <span className="fi fi-mx w-5 h-5 rounded-sm"></span>
                      <span>Español</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                {isOpen ? (
                  <FaChild className="h-7 w-7 text-gray-700" />
                ) : (
                  <FaHandsHoldingChild className="h-8 w-8 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 z-40">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-primary-dark hover:bg-gray-50 ${
                    pathname === item.href ? item.btnBgActive : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
              {/* Selector de idioma con banderas */}
              <div className="relative">
                <button
                  title={t("nav.languageSelector")}
                  onClick={() => setIsLangMenuOpen((prev) => !prev)}
                  className="flex items-center justify-center h-[42px] w-[42px] rounded-b-sm shadow-sm bg-white"
                >
                  {/* Bandera dinámica según el idioma */}
                  <span
                    className={`fi ${
                      language === "en" ? "fi-ca" : "fi-mx"
                    } w-5 h-5 rounded-sm`}
                  ></span>
                </button>

                {/* Menú desplegable de idiomas */}
                {isLangMenuOpen && (
                  <ul className="absolute left-0 mt-2 w-32 bg-white  rounded-b-md shadow-lg">
                    <li
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleLanguageChange("en");
                        setIsLangMenuOpen(false);
                      }}
                    >
                      
                      <span className="fi fi-ca w-5 h-5 rounded-sm"></span>
                      <span>English</span>
                      
                    </li>
                    <li
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer border border-b-[1px]"
                      onClick={() => {
                        handleLanguageChange("es");
                        setIsLangMenuOpen(false);
                      }}
                    >
                      <span className="fi fi-mx w-5 h-5 rounded-sm"></span>
                      <span>Español</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;