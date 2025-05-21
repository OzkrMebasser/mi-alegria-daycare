"use client";
import ItemsCards from "./ItemsCards";
import {  FaRunning } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";
import { LiaBrushSolid } from "react-icons/lia";
import { SlEmotsmile } from "react-icons/sl";
import { PiTranslateFill } from "react-icons/pi";
import { FaPeoplePulling } from "react-icons/fa6";


interface ChildDevelopmentProps {
  t: (key: string) => string;
}

const ChildDevelopment = ({ t }: ChildDevelopmentProps) => {
  return (
    <>
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-medium text-blue-600 mb-6">
          {/* Child Development */}
          {t("services.development.title")}
        </h2>
        <p className="text-gray-600 mb-8">
          {t("services.development.description")}
          {/* Our child-centered approach supports the five developmental
                    domains to ensure holistic growth for every child. */}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ItemsCards
            title={t("services.development.cards.social.title")}
            description={t("services.development.cards.social.description")}
            bgColor="bg-blue-100"
            icon={<FaPeoplePulling className="text-blue-500" />}
          />
          <ItemsCards
            title={t("services.development.cards.physical.title")}
            description={t("services.development.cards.physical.description")}
            bgColor="bg-green-100"
            icon={<FaRunning className="text-green-500" />}
          />
          <ItemsCards
            title={t("services.development.cards.intellectual.title")}
            description={t(
              "services.development.cards.intellectual.description"
            )}
            bgColor="bg-purple-200"
            icon={<BiSolidBookReader className="text-purple-500" />}
          />
          <ItemsCards
            title={t("services.development.cards.creative.title")}
            description={t("services.development.cards.creative.description")}
            bgColor="bg-yellow-100"
            icon={<LiaBrushSolid className="text-yellow-500" />}
          />
          <ItemsCards
            title={t("services.development.cards.emotional.title")}
            description={t("services.development.cards.emotional.description")}
            bgColor="bg-red-100"
            icon={<SlEmotsmile className="text-red-500" />}
          />
          <ItemsCards
            title={t("services.development.cards.bilingual.title")}
            description={t("services.development.cards.bilingual.description")}
            bgColor="bg-indigo-100"
            icon={<PiTranslateFill className="text-indigo-500" />}
          />
        </div>
      </div>
    </>
  );
};

export default ChildDevelopment;
