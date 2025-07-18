"use client";

import { useTranslation } from "react-i18next";
import Terms from "@/components/Terms";

export default function About() {
  const { t } = useTranslation();


  return (
    <>
      <Terms />
    </>
  );
}
