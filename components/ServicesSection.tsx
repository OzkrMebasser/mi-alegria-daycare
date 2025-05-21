"use client";
import React, { useState } from "react";
import DailyProgram from "./Services/DailyProgram";
import ChildDevelopment from "./Services/ChildDevelopment";
import NutritionSection from "./Services/NutritionSection";
import SafetyWellbeing from "./Services/SafetyWellbeing";
import { useTranslation } from "react-i18next";

import { FaClock, FaBrain, FaAppleAlt, FaShieldAlt } from "react-icons/fa";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const { t } = useTranslation();

  const tabs = [
    { id: "daily", name: `${t("services.tabs.daily")}`, icon: <FaClock /> },
    {
      id: "development",
      name: `${t("services.tabs.development")}`,
      icon: <FaBrain />,
    },
    {
      id: "nutrition",
      name: `${t("services.tabs.nutrition")}`,
      icon: <FaAppleAlt />,
    },
    {
      id: "safety",
      name: `${t("services.tabs.safety")}`,
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6  ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-800 mb-4">
            {/* Our Services */}
            {t("services.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* At Mi Alegria Daycare, we provide comprehensive care services
            focused on your child&apos;s growth, development, and happiness. */}
            {t("services.intro")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 m-2 rounded-full font-medium text-lg transition duration-300 ease-in-out ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}

        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          {activeTab === "daily" && <DailyProgram t={t} />}
          {activeTab === "development" && <ChildDevelopment t={t} />}
          {activeTab === "nutrition" && <NutritionSection t={t} />}
          {activeTab === "safety" && <SafetyWellbeing t={t} />}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
