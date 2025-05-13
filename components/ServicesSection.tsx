"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  FaClock,
  FaBrain,
  FaAppleAlt,
  FaShieldAlt,
  FaWalking,
  FaHeartbeat,
  FaRunning,
} from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";
import { LiaBrushSolid } from "react-icons/lia";
import { SlEmotsmile } from "react-icons/sl";
import { PiTranslateFill } from "react-icons/pi";
import { SiGreasyfork } from "react-icons/si";
import { GiForkKnifeSpoon } from "react-icons/gi";

import { FaPeoplePulling } from "react-icons/fa6";

import SwiperCubeSlides from "./SwiperCubeSlides/SwiperCubeSlides";

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
      <div className="container mx-auto px-4">
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
          {activeTab === "daily" && (
            <div className="animate-fadeIn">
              <div className="bg-white ">
                <h2 className="text-2xl font-medium text-blue-600 mb-6">
                  {/* Daily Program */}
                  {t("services.daily.title")}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t("services.daily.description")}
                  {/* Our structured daily program is designed to provide a balance
                  of learning, play, and rest for your child. */}
                </p>
              </div>
              {/* <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Daily Program
              </h2> */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-gray-800">
                    {/* Our Structured Schedule */}
                    {t("services.daily.subTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {/* We follow a consistent daily routine that provides children
                    with a sense of security while encouraging learning and
                    play. */}
                    {t("services.daily.subDescription")}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2 text-gray-800">
                      {/* Daily Schedule: */}
                      {t("services.daily.scheduleTitle")}
                    </h4>
                    <ul className=" text-gray-700 text-sm ">
                      {/*Activiy 1*/}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          8:00-8:30
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity1")}
                        </span>
                      </li>
                      {/*Activiy 2*/}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          8:30-9:00
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity2")}
                        </span>
                      </li>
                      {/*Activiy 3*/}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          9:00-9:30
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity3")}
                        </span>
                      </li>
                      {/*Activiy snackTime*/}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          10:00-10:15
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.snackTime")}
                        </span>
                      </li>
                      {/*Activiy 4 */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          10:15-11:30
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity4")}
                        </span>
                      </li>
                      {/*Activiy 5 */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          11:45-12:00
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity5")}
                        </span>
                      </li>
                      {/*Activiy lunchTime */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          12:00-12:30
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.lunchTime")}
                        </span>
                      </li>
                      {/*Activiy 6  */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          12:30-1:00
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity6")}
                        </span>
                      </li>
                      {/*Activiy 7  */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          1:00-3:00
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity7")}
                        </span>
                      </li>
                      {/*Activiy 8  */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          3:00-3:30
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity8")}
                        </span>
                      </li>
                      {/*Activity 9 */}

                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          3:30-3:45
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.activity9")}
                        </span>
                      </li>
                      {/*Activity goingHome */}
                      <li className="border border-1-gray-200 grid grid-cols-[1.1fr_2fr] lg:grid-cols-[.6fr_2fr] h-[auto]">
                        <span className="border-r border-gray-200 font-medium flex items-center pl-2">
                          4:00 pm
                        </span>
                        <span className="p-2 flex items-center text-justify">
                          {t("services.daily.schedule.goingHome")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <FaWalking className="text-7xl lg:text-4xl text-green-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800">
                        {/* Outdoor Activities */}
                        {t("services.daily.outdoorTitle")}
                      </h3>
                      <p className="text-gray-600">
                        {/* Daily visits to the park and participation in local
                        playgroups for socialization and physical activity. */}
                        {t("services.daily.outdoorText")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-6 mb-8 lg:mb-0">
                    <FaHeartbeat className="text-8xl lg:text-5xl text-red-500 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800">
                        {/* Physical Development */}
                        {t("services.daily.physicalTitle")}
                      </h3>
                      <p className="text-gray-600">
                        {/* At least 60 minutes of active play daily for
                        preschoolers, with a variety of indoor and outdoor
                        activities. */}
                        {t("services.daily.physicalText")}
                      </p>
                    </div>
                  </div>
                  <div className=" bg-gray-200 h-[15rem] lg:h-[28rem] relative mb-[4rem] lg:mt-8 lg:mb-0 rounded-lg">
                    {/*Images Cube slider*/}

                    <SwiperCubeSlides />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "development" && (
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
                <DevelopmentCard
                  title={t("services.development.cards.social.title")}
                  description={t(
                    "services.development.cards.social.description"
                  )}
                  color="bg-blue-100"
                  icon={<FaPeoplePulling className="text-blue-500" />}
                />
                <DevelopmentCard
                  title={t("services.development.cards.physical.title")}
                  description={t(
                    "services.development.cards.physical.description"
                  )}
                  color="bg-green-100"
                  icon={<FaRunning className="text-green-500" />}
                />
                <DevelopmentCard
                  title={t("services.development.cards.intellectual.title")}
                  description={t(
                    "services.development.cards.intellectual.description"
                  )}
                  color="bg-purple-200"
                  icon={<BiSolidBookReader className="text-purple-500" />}
                />
                <DevelopmentCard
                  title={t("services.development.cards.creative.title")}
                  description={t(
                    "services.development.cards.creative.description"
                  )}
                  color="bg-yellow-100"
                  icon={<LiaBrushSolid className="text-yellow-500" />}
                />
                <DevelopmentCard
                  title={t("services.development.cards.emotional.title")}
                  description={t(
                    "services.development.cards.emotional.description"
                  )}
                  color="bg-red-100"
                  icon={<SlEmotsmile className="text-red-500" />}
                />
                <DevelopmentCard
                  title={t("services.development.cards.bilingual.title")}
                  description={t(
                    "services.development.cards.bilingual.description"
                  )}
                  color="bg-indigo-100"
                  icon={<PiTranslateFill className="text-indigo-500" />}
                />
              </div>
            </div>
          )}

          {activeTab === "nutrition" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-medium text-blue-600 mb-6">
                {/* Nutrition */}
                {t("services.nutrition.title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-gray-800">
                    {/* Healthy Eating Habits */}
                    {t("services.nutrition.habitsTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {/* Following Canada&#39;s Food Guide, we promote healthy eating
                    habits through nutritious meals and snacks. */}
                    {t("services.nutrition.habitsText")}
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-lg mb-2 text-gray-800">
                      <GiForkKnifeSpoon className=" text-xl inline mr-2 text-green-500" />
                      {/* Meal Schedule: */}
                      {t("services.nutrition.scheduleTitle")}
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="font-medium">10:00-10:15</span>
                        <span className="mx-2">—</span>
                        <span>
                          {/* Morning snack */}
                          {t("services.nutrition.schedule.morningSnack")}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">12:00-12:30</span>
                        <span className="mx-2">—</span>
                        <span>
                          {/* Lunch time */}
                          {t("services.nutrition.schedule.lunch")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2 text-gray-800">
                      <FaAppleAlt className=" text-xl inline mr-2 text-red-500" />
                      {/* Healthy Snacks:  */}
                      {t("services.nutrition.healthySnacks.title")}
                      <br />
                      <span className="ml-7">
                        {/* (Recomended) */}
                        {t("services.nutrition.healthySnacks.reccomended")}
                      </span>
                    </h4>
                    <p className="text-gray-600">
                      {/* Granola bars, unsweetened fruit cups, seasonal fruits,
                      yogurt, cottage cheese, regular cheese, whole grain
                      crackers, whole grain toast, veggie sticks, and more. */}
                      {t("services.nutrition.healthySnacks.description")}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-gray-800">
                    {/* Our Nutrition Approach */}
                    {t("services.nutrition.nutritionApproach.title")}
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        {/* We respect your child&#39;s autonomy in deciding whether
                        to eat, what to eat from what is offered, and how much
                        to eat. */}
                        {t("services.nutrition.nutritionApproach.points.one")}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        {/* We never force children to eat, threaten them, or use
                        food as a reward or punishment. */}
                        {t("services.nutrition.nutritionApproach.points.two")}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        {/* We follow proper food storage and handling procedures to
                        ensure food safety. */}
                        {t("services.nutrition.nutritionApproach.points.three")}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        {/* We practice and teach proper hand washing before eating
                        to minimize the spread of germs. */}
                        {t("services.nutrition.nutritionApproach.points.four")}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        {/* We accommodate special dietary needs and allergies with
                        appropriate documentation. */}
                        {t("services.nutrition.nutritionApproach.points.five")}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-medium text-blue-600 mb-6">
                {/* Safety & Wellbeing */}
                {t("services.safety.tabTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-gray-800">
                    {/* Health & Safety Protocols */}
                    {t("services.safety.healthSafety.title")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {/* Your child&#39;s safety is our top priority. We maintain
                    strict health and safety protocols to ensure a secure
                    environment. */}
                    {t("services.safety.healthSafety.description")}
                  </p>
                  <div className="space-y-4">
                    <SafetyItem
                      title={t(
                        "services.safety.healthSafety.items.healthHygiene.title"
                      )}
                      description={t(
                        "services.safety.healthSafety.items.healthHygiene.description"
                      )}
                      // title="Health & Hygiene"
                      // description="Regular handwashing, sanitizing toys and surfaces, and teaching proper hygiene habits to minimize spread of illness."
                    />
                    <SafetyItem
                      title={t(
                        "services.safety.healthSafety.items.emergencyPreparedness.title"
                      )}
                      description={t(
                        "services.safety.healthSafety.items.emergencyPreparedness.description"
                      )}
                      // title="Emergency Preparedness"
                      // description="Monthly fire drills, earthquake procedures, and comprehensive emergency plans for various scenarios."
                    />
                    <SafetyItem
                      title={t(
                        "services.safety.healthSafety.items.safeEnvironment.title"
                      )}
                      description={t(
                        "services.safety.healthSafety.items.safeEnvironment.description"
                      )}
                      // title="Safe Environment"
                      // description="Childproofed areas, age-appropriate toys and equipment, and continuous supervision at all times."
                    />
                    <SafetyItem
                     title={t(
                      "services.safety.healthSafety.items.illnessPolicy.title"
                    )}
                    description={t(
                      "services.safety.healthSafety.items.illnessPolicy.description"
                    )}
                      // title="Illness Policy"
                      // description="Clear guidelines for when children should stay home due to illness to protect all children in our care."
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Child Guidance Approach
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our guidance policy helps children develop self-discipline,
                    self-confidence, and respect for others.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      Our Basic Limits:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="font-bold text-blue-500 mr-2">•</span>
                        <span>Be Safe</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-bold text-blue-500 mr-2">•</span>
                        <span>Be Kind</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-bold text-blue-500 mr-2">•</span>
                        <span>Have Fun!</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      Guidance Goals:
                    </h4>
                    <p className="text-gray-600">
                      We guide children to express emotions safely, show respect
                      for others&#39; feelings and ideas, solve conflicts
                      positively, and build self-confidence through mastery of
                      skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface DevelopmentCardProps {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const DevelopmentCard = ({
  title,
  description,
  color,
  icon,
}: DevelopmentCardProps) => {
  return (
    <div className={`${color} p-6 rounded-lg shadow-md`}>
      <span className="inline absolute mt-1 text-xl">{icon}</span>
      <h3 className="text-lg ml-7 font-medium mb-2 text-gray-800">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface SafetyItemProps {
  title: string;
  description: string;
}

const SafetyItem = ({ title, description }: SafetyItemProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServicesSection;
