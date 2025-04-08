"use client";
import Nav2 from "@/components/Nav2";

import { useTranslation } from "react-i18next";
import { FaShieldAlt, FaGraduationCap, FaLanguage } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: FaShieldAlt,
      title: t("home.features.safe.title"),
      description: t("home.features.safe.description"),
    },
    {
      icon: FaGraduationCap,
      title: t("home.features.educational.title"),
      description: t("home.features.educational.description"),
    },
    {
      icon: FaLanguage,
      title: t("home.features.bilingual.title"),
      description: t("home.features.bilingual.description"),
    },
  ];

  return (
    <>
      <Nav2 />
      <div className="min-h-screen  ">
        {/* Hero Section */}
        <section className="relative h-[600px]  ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi-alegria-daycare-hero.jpg?alt=media&token=719c1299-7958-40a2-ab91-caffb81942ad"
            alt="Happy children playing"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>

          {/* Logo centrado sobre el hero */}
          <div className="absolute inset-0 flex justify-center items-center h-[250px] lg:top-2 top-8">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi_alegria-logo-transp.png?alt=media&token=002f824b-eedb-4e9e-b804-5c1c666efb55"
              alt="MI ALEGRIA DAYCARE LOGO"
              fill
              className="z-30 imgShadow  object-contain"
            />
          </div>

          {/* <div className="absolute inset-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-lg">
                <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
                  {t("home.hero.title")}
                </h1>
                <p className="text-xl text-white mb-8">
                  {t("home.hero.subtitle")}
                </p>
                <button className="bg-accent hover:bg-accent-dark text-gray-800 font-bold py-3 px-6 rounded-full transition-colors">
                  {t("home.hero.cta")}
                </button>
              </div>
            </div>
          </div> */}
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-center text-gray-800 mb-12">
              {t("home.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-secondary-light rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <feature.icon className="w-12 h-12 mx-auto text-secondary-dark mb-4" />
                  <h3 className="font-display text-xl text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
