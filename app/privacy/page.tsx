"use client";

import { useTranslation } from "react-i18next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function About() {
  const { t } = useTranslation();


  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
