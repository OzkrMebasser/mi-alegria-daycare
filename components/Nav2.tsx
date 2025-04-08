"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaHandHoldingHeart,
  FaUsers,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

const ToggleSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/home", label: t("nav.home"), icon: FaHome },
    { href: "/home2", label: t("nav.home2"), icon: FaHome },
    { href: "/services", label: t("nav.services"), icon: FaHandHoldingHeart },
    { href: "/about", label: t("nav.about"), icon: FaUsers },
    { href: "/contact", label: t("nav.contact"), icon: FaEnvelope },
    { href: "/blog", label: t("nav.blog"), icon: FaBlog },
  ];

  return (
    <div className="w-full font-sans bg-transparent ">

      <button
            type="button"
            className="bg-[#e4093b] text-white p-2 rounded absolute top-4 right-4 z-50 box-shadow-md"
            onClick={toggleSidebar}
            title="Toggle Sidebar"
            aria-label="Toggle Sidebar"
          >
            <TfiMenu size={20} />
          </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0  w-[280px] h-full bg-white shadow-lg transition-all duration-500 z-50 ${
          isOpen ? "left-0 " : "-left-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="text-lg font-medium text-gray-800">
            {t("nav.menu")}
          </h4>
          <button
            className="bg-[#5a8dee] text-white p-2 rounded"
            onClick={toggleSidebar}
            title="Close Sidebar"
            aria-label="Close Sidebar"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="p-4 max-h-[calc(100vh-67px)] overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 w-full px-4 py-2 bg-gray-200 text-[#475f7b] rounded hover:bg-gray-300 transition-colors"
                  onClick={toggleSidebar}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default ToggleSidebar;
