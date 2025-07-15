"use client";
import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Reference {
  text: string;
  url: string;
}

interface ArticleCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  author: string;
  paragraph_1: string;
  paragraph_2?: string;
  paragraph_3?: string;
  paragraph_4?: string;
  paragraph_5?: string;
  paragraph_6?: string;
  quoteBg: string;
  quote: string;
  quoteColor: string;
  quoteBorder: string;
  referencesTitle: string;
  references?: Reference[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  subtitle,
  imageUrl,
  author,
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4,
  paragraph_5,
  paragraph_6,
  quoteBg,
  quote,
  quoteColor,
  quoteBorder,
  referencesTitle,
  references = [],
}) => {
  const { t } = useTranslation();

  console.log(referencesTitle)
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden rounded-lg shadow-xl"
        style={{
          minHeight: "500px",
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        title={title}
      ></div>

      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal shadow-lg">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10 rounded-lg">
            <h1 className="text-gray-900 font-medium text-4xl mb-3">
              {t(title)}
            </h1>
            {subtitle && (
              <h2 className="text-gray-600 text-xl font-medium mb-4">
                {t(subtitle)}
              </h2>
            )}

            <div className="text-justify">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="rounded-xl w-16 h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/priscila-spahn.jpg?alt=media&token=25570c91-d733-49b7-89d8-5ec05e20aff3"
                    alt="Priscila Spahn"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    {t("blog.writtenBy")}:{" "}
                    <span className="text-indigo-600">{author}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{t("blog.autorRole")}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                {t(paragraph_1)}
              </p>

              {quote && (
                <blockquote
                  className={`border-l-4  ${quoteBg} text-lg italic leading-relaxed my-6 p-5 text-gray-700 rounded-r-lg ${quoteBorder}`}
                >
                  <BiSolidQuoteRight
                    className={`w-8 h-8 mb-4 ${quoteColor} `}
                  />
                  {t(quote)}
                </blockquote>
              )}

              {paragraph_2 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_2)}
                </p>
              )}

              {paragraph_3 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_3)}
                </p>
              )}

              {paragraph_4 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_4)}
                </p>
              )}

              {paragraph_5 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_5)}
                </p>
              )}

              {paragraph_6 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_6)}
                </p>
              )}
            </div>

            {references && references.length > 0 && (
              <div className="mt-10 border-t pt-5">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t(referencesTitle)}
               
                </h3>
                <ul className="space-y-3">
                  {references.map((ref, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline transition-colors"
                      >
                        {t(ref.text)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-lg">
          <Link href="/contact">
            {t("homeSection.callToAction.contactButton")}
          </Link>
        </button>
        <button className="bg-primary-dark hover:bg-pink-500 text-white font-medium py-3 px-6 rounded-full shadow-lg">
          <Link href="/blog">{t("blog.moreBlogs")}</Link>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
