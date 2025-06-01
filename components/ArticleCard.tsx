"use client";
import React from "react";
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
  quote?: string;

  references?: Reference[]; // ← nuevo prop
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
  quote,
  references = [],
}) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative ">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{ minHeight: "500px", backgroundImage: `url('${imageUrl}')` }}
        title={title}
      ></div>

      <div className="max-w-3xl mx-auto ">
        <div className="mt-3  bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-medium text-3xl mb-2">
              {t(title)}
            </h1>

            {subtitle && (
              <h2 className="text-gray-600 text-lg font-medium mb-2 ">
                {t(subtitle)}
              </h2>
            )}

            <div className="text-justify">
              <p className="text-gray-700 text-xs mt-2 items-center flex ">
                <span className="inline-block">
                  {" "}
                  <img
                    src="https://scontent.fyvr1-1.fna.fbcdn.net/v/t39.30808-6/470205516_10170066345695015_3676747344619980933_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eaZsByCEPMgQ7kNvwE5jqnR&_nc_oc=AdmfzceBx3KYz1CEQRpwcL51ejzLiiIq73-2VftAvzrrwcWCgRr5g7f5p3WJ0FwtanyhkDljdV8tKaxx690N3GoG&_nc_zt=23&_nc_ht=scontent.fyvr1-1.fna&_nc_gid=kj8P9WTcSAhPsUvNLY0zsA&oh=00_AfL-GQtoC3AcK-E_Lj3STKU0PNB5YejdcnMg8SlAtU_Fhw&oe=683C5AB0"
                    alt=""
                    className="h-8 w-8 rounded-full mr-2 inline-block"
                  />
                </span>
                By:
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {" "}
                  {author}
                </a>{" "}
                <br />
              </p>

              <p className="text-base leading-8 my-5">{t(paragraph_1)}</p>

              {quote && (
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                  {t(quote)}
                </blockquote>
              )}

              {paragraph_2 && (
                <p className="text-base leading-8 my-5">{t(paragraph_2)}</p>
              )}

              {paragraph_3 && (
                <p className="text-base leading-8 my-5">{t(paragraph_3)}</p>
              )}
              {paragraph_4 && (
                <p className="text-base leading-8 my-5">{t(paragraph_4)}</p>
              )}
              {paragraph_5 && (
                <p className="text-base leading-8 my-5">{t(paragraph_5)}</p>
              )}
              {paragraph_6 && (
                <p className="text-base leading-8 my-5">{t(paragraph_6)}</p>
              )}
            </div>
            {/*References*/}
            {references && references.length > 0 && (
              <div className="mt-10 border-t pt-5">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {t("blog.blogOne.references.title")}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-blue-700">
                  {references.map((ref, index) => (
                    <li key={index}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-900"
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
          <Link href="/contact" target="_blank" rel="noopener noreferrer">
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
