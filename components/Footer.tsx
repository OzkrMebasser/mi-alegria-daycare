"use client";

import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
export interface NavItem {
  href: string;
  key: string; // clave de traducción
  btnBgHover?: string;
  btnBgActive?: string;
}

export const navItems: NavItem[] = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
  { href: "/blog", key: "nav.blog" },
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-400  text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-16">
        {/* Navigation */}

        <div className="flex flex-col space-y-2 text-sm">
          <span className="font-semibold text-white mb-2">
            {t("footer.linksTitle") || "Quick Links"}
          </span>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary-light transition"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
        {/* Branding & Contact */}
        <div className="">
          {/* <h3 className="text-3xl font-display mb-4">Mi Alegría</h3> */}
          <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
            <FaPhone className="text-primary-light" />
            {t("footer.phone")}
          </p>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <FaEnvelope className="text-primary-light" />
            info@mialegria.com
          </p>
        </div>

        {/* Social Media & Logo */}
        <div className="flex flex-col ">
          <span className="font-semibold text-white mb-2 block">
            {t("footer.followUs") || "Follow us"}
          </span>
          <div className="flex space-x-4 mt-2 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 text-white rounded-full p-2 hover:scale-110 transition transform"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 text-white rounded-full p-2 hover:scale-110 transition transform"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi_alegria-logo-transp.png?alt=media&token=002f824b-eedb-4e9e-b804-5c1c666efb55"
            alt="logo mi alegria"
            className="h-32 w-32 mt-8 "
          />
        </div>
      </div>

      <div className=" text-sm text-center py-4 mb-8">
        © {currentYear} Mi Alegría Daycare — {t("footer.rights")}
        <br />
        <a
          href="#"
          className=" text-sm py-2 px-4 text-white inline-block hover:underline"
        >
          Made with &#x1F9E1; by Ozkr Mebasser
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
