"use client";

import { useTranslation } from "react-i18next";
import { FaShieldAlt, FaGraduationCap, FaLanguage } from "react-icons/fa";
import MapLibreMap from "@/components/MapLibreMap";
import HeroImgSlider from "@/components/HeroImgSlider";
import HomeSection from "./HomeSection";
import StatsCounter from "./StatsCounter";
import Image from "next/image";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-1.png?alt=media&token=1a388a69-835a-4d2b-bbea-280452816f6a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-2.jpeg?alt=media&token=bf9c6ab6-d1a9-4de4-a7f4-cf2acad9a52b",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-10.png?alt=media&token=9022101f-7e93-42c0-bc2c-94a86b2962b2",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-3.jpeg?alt=media&token=afd47019-8594-44cd-9711-536b8448b6f9",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-4.jpeg?alt=media&token=e46a5f53-76db-406c-a109-749cd1ce7d89",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-5.png?alt=media&token=ac7a66a2-7256-4245-8f61-ab6050443524",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-6.jpeg?alt=media&token=4e03359c-cad5-4cf3-a471-9d9a4334eb1a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-7.png?alt=media&token=ab84529d-7943-4fdf-b579-173fca06b403",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-8.jpeg?alt=media&token=713e36dc-63aa-4f0e-8f80-09af59230c6c",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-9.jpeg?alt=media&token=3853d592-2391-4c1d-9d33-258ac62be35c"
  
];

export default function Home() {
  const { t } = useTranslation();

  // const features = [
  //   {
  //     icon: FaShieldAlt,
  //     title: t("home.features.safe.title"),
  //     description: t("home.features.safe.description"),
  //   },
  //   {
  //     icon: FaGraduationCap,
  //     title: t("home.features.educational.title"),
  //     description: t("home.features.educational.description"),
  //   },
  //   {
  //     icon: FaLanguage,
  //     title: t("home.features.bilingual.title"),
  //     description: t("home.features.bilingual.description"),
  //   },
  // ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroImgSlider images={images} />
        {/* Home/Features Section */}
        <HomeSection />
        {/*Stats counter*/}
        <StatsCounter />
        {/* Map Section */}
        <MapLibreMap />
      </div>
    </>
  );
}
