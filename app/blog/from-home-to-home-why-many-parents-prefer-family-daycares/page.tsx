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
    t("blog.blogTwo.references.items", { returnObjects: true })
  )
    ? (t("blog.blogTwo.references.items", {
        returnObjects: true,
      }) as Reference[])
    : [];
  return (
    <>
      <ArticleCard
        title={"blog.blogTwo.title"}
        subtitle={"blog.blogTwo.subtitle"}
        imageUrl="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/blogs%2Ffrom-home-to-home.jpeg?alt=media&token=0b3b97fa-9040-4832-ace0-d77f7e31516c"
        author="Priscila Sphan"
        paragraph_1={"blog.blogTwo.paragraph_1"}
        quote={"blog.blogTwo.quote"}
        paragraph_2={"blog.blogTwo.paragraph_2"}
        paragraph_3={"blog.blogTwo.paragraph_3"}
        paragraph_4={"blog.blogTwo.paragraph_4"}
        paragraph_5={"blog.blogTwo.paragraph_5"}
        paragraph_6={"blog.blogTwo.paragraph_6"}
        quoteBg="bg-purple-50"
        quoteColor="text-purple-400"
        quoteBorder="border-purple-500"
        referencesTitle={"blog.blogTwo.referencesTitle"}
        references={references}
      />
    </>
  );
};

export default Page;
