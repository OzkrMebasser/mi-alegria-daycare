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
    t("blog.blogThree.references.items", { returnObjects: true })
  )
    ? (t("blog.blogThree.references.items", {
        returnObjects: true,
      }) as Reference[])
    : [];
  return (
    <>
      <ArticleCard
        title={"blog.blogThree.title"}
        subtitle={"blog.blogThree.subtitle"}
        imageUrl="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-3.jpeg?alt=media&token=5b88fcc5-d81a-4e76-98a8-864e5a50c255"
        author="Priscila Sphan"
        paragraph_1={"blog.blogThree.paragraph_1"}
        quote={"blog.blogThree.quote"}
        paragraph_2={"blog.blogThree.paragraph_2"}
        paragraph_3={"blog.blogThree.paragraph_3"}
        paragraph_4={"blog.blogThree.paragraph_4"}
        paragraph_5={"blog.blogThree.paragraph_5"}
        paragraph_6={"blog.blogThree.paragraph_6"}
        quoteBg="bg-green-50"
        quoteColor="text-green-400"
        quoteBorder="border-green-500"
        references={references}
      />
    </>
  );
};

export default Page;
