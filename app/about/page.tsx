"use client";

import { useTranslation } from "react-i18next";
import { FaHeart, FaStar, FaGlobe, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import AboutUsSection from "@/components/AboutUsSection";

export default function About() {
  const { t } = useTranslation();


  return (
    <>
      <AboutUsSection />
    </>
  );
}
