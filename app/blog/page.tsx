"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";


export default function Blog() {
  const { t } = useTranslation();

  // const trimmedTitleBlogOne = t("blog.blogOne.title")
  // .replace(/:/g, ".")
  // .split(".")[0] + ".";

  interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    url?: string;
  }

  // const trimmingTitle = (trimmedText: string): string => {
  //   const trimmedTitle = trimmedText.replace(/:/g, ".").split(".")[0] + ".";
  //   return trimmedTitle;
  // };

  const blogPosts = [
    {
      // title: trimmingTitle(`${t("blog.blogOne.title")}`),
      title: t("blog.blogOne.title"),
      excerpt: t("blog.blogOne.paragraph_1"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/blogs%2Fsmall-groups-family-daycare-benefits.jpeg?alt=media&token=f18c94f4-12a6-41c0-bd77-cb6f375b18a0",
      date: "2024-03-15",
      url: "small-groups-family-daycare-benefits",
    },
    {
      // title: trimmingTitle(`${t("blog.blogTwo.title")}`),
      title: t("blog.blogTwo.title"),
      excerpt: t("blog.blogTwo.paragraph_2"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/blogs%2Ffrom-home-to-home.jpeg?alt=media&token=0b3b97fa-9040-4832-ace0-d77f7e31516c",
      date: "2024-03-10",
      url: "from-home-to-home-why-many-parents-prefer-family-daycares",
    },
    {
      title: t("blog.blogThree.title"),
      excerpt: t("blog.blogThree.paragraph_3"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-3.jpeg?alt=media&token=afd47019-8594-44cd-9711-536b8448b6f9",
      date: "2024-03-05",
      url: "family-daycare-vs-traditional-advantages",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl text-center text-gray-800 mb-12">
          {t("nav.blog")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <h2 className=" h-[6rem] font-display text-xl text-gray-800 mt-2 flex items-center mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 text-justify ">
                  {post.excerpt.length > 150
                    ? post.excerpt.slice(0, 150) + "..."
                    : post.excerpt}
                </p>

                <div className=" mt-8 ">
                  <button className="bg-primary-dark hover:bg-pink-500 text-white semi-bold py-3 px-6 rounded-full shadow-lg">
                    <Link href={`/blog/${post.url}`}>
                      {t("blog.readMore")} →
                    </Link>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
