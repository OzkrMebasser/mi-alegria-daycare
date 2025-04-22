"use client";

import { useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiHomeSmile } from "react-icons/bi";
import { LuHandHeart } from "react-icons/lu";
import { BiIdCard } from "react-icons/bi";
import { LiaPenAltSolid } from "react-icons/lia";
import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  hoverClass: string;
  textColor: string;
  hoverBgLi: string;
}

const LeftSideNavbar = () => {
  const { t, toggleLangMenu, handleLanguageChange, isLangMenuOpen, language } =
    useLanguage(); // Asegúrate de desestructurar `language`

  const navItems: NavItem[] = [
    {
      href: "/",
      label: t("nav.home"),
      icon: <BiHomeSmile />,
      hoverClass: "hover:text-yellow-300",
      textColor: "text-yellow-300",
      hoverBgLi: "hover:bg-gray-800",
    },
    {
      href: "/services",
      label: t("nav.services"),
      icon: <LuHandHeart />,
      hoverClass: "hover:text-green-500",
      textColor: "text-green-500",
      hoverBgLi: "hover:bg-gray-800",
    },
    {
      href: "/about",
      label: t("nav.about"),
      icon: <BiIdCard />,
      hoverClass: "hover:text-orange-500",
      textColor: "text-orange-500",
      hoverBgLi: "hover:bg-gray-800",
    },
    {
      href: "/contact",
      label: t("nav.contact"),
      icon: <HiOutlineMail />,
      hoverClass: "hover:text-blue-400",
      textColor: "text-blue-400",
      hoverBgLi: "hover:bg-gray-800",
    },
    {
      href: "/blog",
      label: t("nav.blog"),
      icon: <LiaPenAltSolid />,
      hoverClass: "hover:text-pink-400",
      textColor: "text-pink-400",
      hoverBgLi: "hover:bg-gray-800",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-[65px] bg-[#ffffff] flex-col justify-center items-center z-50">
        <ul className="space-y-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative group border border-1 border-gray-700 p-2 rounded-sm bg-white ${item.hoverBgLi} ${item.hoverClass} hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
            >
              <Link
                href={item.href}
                className="text-2xl transition-transform duration-300 transform"
                aria-label={item.label}
              >
                {item.icon}
              </Link>
              {/* Tooltip ajustado para aparecer a la derecha */}
              <div
                className={`${item.textColor} flex items-center h-[42px] absolute bottom-0 left-full w-auto ml-[.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-xl px-4 rounded-r-md whitespace-nowrap shadow-2xl`}
              >
                {item.label}
              </div>
            </li>
          ))}
        </ul>
        <div className="relative mt-6 w-10 ">
          {/* Botón para alternar el menú de idiomas */}
          <button
            onClick={toggleLangMenu}
            className="flex items-center justify-center border border-1 border-gray-700 h-[42px] w-[42px] px-2 rounded-sm shadow-sm bg-white"
          >
            {/* Usar `language` para determinar la bandera */}
            <span
              className={`fi ${
                language === "en" ? "fi-ca" : "fi-mx"
              } w-5 h-5 rounded-sm`}
            ></span>
          </button>
          {/* Menú de idiomas */}
          {!isLangMenuOpen ? null : (
            <ul className="absolute z-10 w-32 -top-2 ml-[3.3rem] bg-white text-gray-700 rounded-r-md shadow-r-md">
              <li
                className="flex items-center gap-2 px-2 py-1 hover:bg-white hover:text-gray-700 cursor-pointer rounded-tr-md border-b-[1px]"
                onClick={() => handleLanguageChange("en")}
              >

<span className="fi fi-ca w-5 h-5 rounded-sm"></span>
<span>English</span>

               
              </li>
              <li
                className="flex items-center gap-2 px-2 py-1 hover:bg-white hover:text-gray-700 cursor-pointer rounded-br-md"
                onClick={() => handleLanguageChange("es")}
              >
                <span className="fi fi-mx w-5 h-5 rounded-sm"></span>
                <span>Español</span>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white flex justify-around items-center z-50">
        <ul className="flex justify-around w-full items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative group border border-1 border-gray-700 p-2 rounded-sm bg-white ${item.hoverBgLi} ${item.hoverClass} hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
            >
              <Link
                href={item.href}
                className="text-2xl transition-transform duration-300 transform"
                aria-label={item.label}
              >
                {item.icon}
              </Link>
              {/* Tooltip ajustado para aparecer arriba */}
              <div
                className={`${item.textColor} flex items-center h-[42px] absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-sm px-4 rounded-md whitespace-nowrap shadow-2xl`}
              >
                {item.label}
              </div>
            </li>
          ))}

          {/* Agregar el selector de idioma como un elemento <li> */}
          <li className="relative group border border-1 border-gray-700 h-[42px] px-2 rounded-sm bg-white  hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <button
              title={t("nav.languageSelector")}
              type="button"
              onClick={toggleLangMenu}
              className="w-full flex items-center justify-center rounded-md"
            >
              {/* Usar `language` para determinar la bandera */}
              <span
                className={`fi ${
                  language === "en" ? "fi-ca" : "fi-mx"
                } w-5 h-5 rounded-sm`}
              ></span>
            </button>
            {/* Menú de idiomas */}
            {!isLangMenuOpen ? null : (
              <ul className="absolute bottom-[3.55rem] -ml-[4.1rem] w-auto bg-white text-gray-700 rounded-t-md ">
                <li
                  className="flex items-center gap-2 px-2 py-1 hover:bg-white cursor-pointer rounded-md border-b-[1px]"
                  onClick={() => handleLanguageChange("en")}
                >
                <span className="fi fi-ca w-5 h-5 rounded-sm"></span>
                <span>English</span>
                </li>
                <li
                  className="flex items-center gap-2 px-2 py-1 hover:bg-white cursor-pointer rounded-bl-md rounded-br-md"
                  onClick={() => handleLanguageChange("es")}
                >
                 

                  <span className="fi fi-mx w-5 h-5 rounded-sm"></span>
                  <span>Español</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LeftSideNavbar;
