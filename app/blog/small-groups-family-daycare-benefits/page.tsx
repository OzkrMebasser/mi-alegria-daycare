"use client";
import React from "react";
import ArticleCard from "@/components/ArticleCard";
import { useTranslation } from "react-i18next";

interface Reference {
  text: string;
  url: string;
}

const Page = () => {
  const { t } = useTranslation();

  const references: Reference[] = Array.isArray(
    t("blog.blogOne.references.items", { returnObjects: true })
  )
    ? (t("blog.blogOne.references.items", {
        returnObjects: true,
      }) as Reference[])
    : [];
  return (
    <>
      <ArticleCard
        title={"blog.blogOne.title"}
        subtitle={"blog.blogOne.subtitle"}
        imageUrl="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/blogs%2Fsmall-groups-family-daycare-benefits.jpeg?alt=media&token=f18c94f4-12a6-41c0-bd77-cb6f375b18a0"
        author="Priscila Sphan"
        paragraph_1={"blog.blogOne.paragraph_1"}
        quote={"blog.blogOne.quote"}
        paragraph_2={"blog.blogOne.paragraph_2"}
        paragraph_3={"blog.blogOne.paragraph_3"}
        paragraph_4={"blog.blogOne.paragraph_4"}
        paragraph_5={"blog.blogOne.paragraph_5"}
        paragraph_6={"blog.blogOne.paragraph_6"}
        references={references}
      />
    </>
  );
};

export default Page;
