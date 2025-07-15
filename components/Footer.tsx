"use client";
import { useTranslation } from "react-i18next";
import SocialButtons from "./SocilaMediaBtns";
import Link from "next/link";
import Image from "next/image";

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

const WildernessFooter = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const whatsappUrlEs = `https://wa.me/12508843091?text=Hola%20Mi%20Alegria%20Daycare!%20Me%20gustaria%20saber%20mas%20sobre%20sus%20servicios.`;
  const whatsappUrlEn = `https://wa.me/12508843091?text=Hello%20Mi%20Alegria%20Daycare!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  const whatsappUrl = i18n.language.startsWith("es")
    ? whatsappUrlEs
    : whatsappUrlEn;

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-400  text-white px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 ">
          {/* Logo */}
          <div className="col-span-1 ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi_alegria-logo-transp.png?alt=media&token=002f824b-eedb-4e9e-b804-5c1c666efb55"
              alt="logo mi alegria family daycare"
              width={240}
              height={240}
              className="h-[8rem] w-[8rem] lg:h-[15rem] lg:w-[15rem] object-fit "
              priority
            />
          </div>

          {/* FOLLOW US Section */}
          <div className="col-span-1 lg:ml-[2rem]">
            <h3 className="text-lg font-bold mb-6 tracking-wider">
              <strong className="strong-underline underline-gold">
                {t("footer.followUs")}
              </strong>
            </h3>
            {/* Social Icons */}
            <SocialButtons />
          </div>

          {/* Sections menu*/}
          <div className="col-span-1 lg:ml-[2rem]">
            <h3 className="text-lg font-bold mb-6 tracking-wider">
              <strong className="strong-underline underline-green">
                {t("footer.menuFooter")}
              </strong>
            </h3>
            <ul className="space-y-3 flex flex-col ">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary-light transition relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  {t(item.key)}
                </Link>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="col-span-1 lg:ml-[2rem]">
            <h3 className="text-lg font-bold mb-6 tracking-wider">
              {" "}
              <strong className="strong-underline underline-blue">
                {t("footer.contact")}
              </strong>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12508843091"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  {t("footer.telephone")}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20">
          {/* Copyright */}
          <div className="text-center md:text-left">
            © {currentYear} Mi Alegría Daycare{" "}
            <span className="hidden lg:inline">—</span>
            <span className="block lg:inline">{t("footer.rights")}</span>
          </div>

          {/* Design Credit */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <a
              href="https://oscarmorenodev.vercel.app/"
              className=" text-sm py-2 px-4 text-white inline-block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with &#x1F9E1; by Ozkr Mebasser
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WildernessFooter;
