"use client";
import { FiMessageCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function WhatsAppButton() {
  const { i18n } = useTranslation();
  
  const whatsappUrlEs = `https://wa.me/12508843091?text=Hola%20Mi%20Alegria%20Daycare!%20Me%20gustaria%20saber%20mas%20sobre%20sus%20servicios.`;
  const whatsappUrlEn = `https://wa.me/12508843091?text=Hello%20Mi%20Alegria%20Daycare!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  const whatsappUrl = i18n.language.startsWith("es")
    ? whatsappUrlEs
    : whatsappUrlEn;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isVisible ? "block" : "hidden"}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chatear por WhatsApp"
      >
        <FiMessageCircle className="text-white w-8 h-8" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
