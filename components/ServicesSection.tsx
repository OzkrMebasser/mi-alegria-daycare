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
} from "react-icons/fa";
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
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
                <h2 className="text-2xl font-bold text-blue-600 mb-6">
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
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
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
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      {/* Daily Schedule: */}
                      {t("services.daily.scheduleTitle")}
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm lg:text-base">
                      <li className="grid grid-cols-[.6fr_2fr] text-sm lg:text-base h-[3rem]">
                        <span className="bg-teal-600 border-r-1 font-medium flex items-center pl-2">
                          8:00-8:30   <span className="mx-2 font-thin">—</span>
                        </span>
                        <span className=" items-left bg-red-500 ">
                          {t("services.daily.schedule.activity2")}
                        </span>
                      </li>

                      <li className="flex items-center ">
                        <span className="font-medium">8:30-9:00</span>
                        <span className="mx-2">—</span>
                        <span>
                          {/*Activiy 2*/}
                          {/* Crafts / Drawing Activities, Clean up, toilet routine and handwashing */}
                          {t("services.daily.schedule.activity2")}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">9:00-9:30</span>
                        <span className="mx-2">—</span>
                        <span>
                          {/* Leave to playgroup or park */}
                          {t("services.daily.schedule.activity2")}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">12:00-12:30</span>
                        <span className="mx-2">—</span>
                        <span>Lunch time</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">12:30-1:00</span>
                        <span className="mx-2">—</span>
                        <span>Story time in Spanish</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">1:00-3:00</span>
                        <span className="mx-2">—</span>
                        <span>Nap time/Quiet time</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">3:30-4:00</span>
                        <span className="mx-2">—</span>
                        <span>Outdoor play/Going Home</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center mt-6">
                    <FaWalking className="text-4xl text-green-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Outdoor Activities
                      </h3>
                      <p className="text-gray-600">
                        Daily visits to the park and participation in local
                        playgroups for socialization and physical activity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-6">
                    <FaHeartbeat className="text-4xl text-red-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Physical Development
                      </h3>
                      <p className="text-gray-600">
                        At least 60 minutes of active play daily for
                        preschoolers, with a variety of indoor and outdoor
                        activities.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
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
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Child Development
              </h2>
              <p className="text-gray-600 mb-8">
                Our child-centered approach supports the five developmental
                domains to ensure holistic growth for every child.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DevelopmentCard
                  title="Social Development"
                  description="Building relationships, learning to share, developing empathy, and working cooperatively with others."
                  color="bg-blue-100"
                />
                <DevelopmentCard
                  title="Physical Development"
                  description="Developing both fine and gross motor skills through active play and age-appropriate activities."
                  color="bg-green-100"
                />
                <DevelopmentCard
                  title="Intellectual Development"
                  description="Stimulating curiosity, problem-solving abilities, and foundational knowledge across various subjects."
                  color="bg-purple-100"
                />
                <DevelopmentCard
                  title="Creative Development"
                  description="Encouraging imagination, self-expression, and artistic exploration through various mediums."
                  color="bg-yellow-100"
                />
                <DevelopmentCard
                  title="Emotional Development"
                  description="Learning to identify and express feelings appropriately, build self-confidence, and develop resilience."
                  color="bg-red-100"
                />
                <DevelopmentCard
                  title="Bilingual Environment"
                  description="Exposure to Spanish language through stories, songs, and daily interactions to promote language development."
                  color="bg-indigo-100"
                />
              </div>
            </div>
          )}

          {activeTab === "nutrition" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Nutrition
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Healthy Eating Habits
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Following Canada&#39;s Food Guide, we promote healthy eating
                    habits through nutritious meals and snacks.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      Meal Schedule:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="font-medium">10:00-10:15</span>
                        <span className="mx-2">—</span>
                        <span>Morning snack</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium">12:00-12:30</span>
                        <span className="mx-2">—</span>
                        <span>Lunch time</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      Recommended Healthy Snacks:
                    </h4>
                    <p className="text-gray-600">
                      Granola bars, unsweetened fruit cups, seasonal fruits,
                      yogurt, cottage cheese, regular cheese, whole grain
                      crackers, whole grain toast, veggie sticks, and more.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Our Nutrition Approach
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        We respect your child&#39;s autonomy in deciding whether
                        to eat, what to eat from what is offered, and how much
                        to eat.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        We never force children to eat, threaten them, or use
                        food as a reward or punishment.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        We follow proper food storage and handling procedures to
                        ensure food safety.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        We practice and teach proper hand washing before eating
                        to minimize the spread of germs.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p>
                        We accommodate special dietary needs and allergies with
                        appropriate documentation.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Safety & Wellbeing
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Health & Safety Protocols
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your child&#39;s safety is our top priority. We maintain
                    strict health and safety protocols to ensure a secure
                    environment.
                  </p>
                  <div className="space-y-4">
                    <SafetyItem
                      title="Health & Hygiene"
                      description="Regular handwashing, sanitizing toys and surfaces, and teaching proper hygiene habits to minimize spread of illness."
                    />
                    <SafetyItem
                      title="Emergency Preparedness"
                      description="Monthly fire drills, earthquake procedures, and comprehensive emergency plans for various scenarios."
                    />
                    <SafetyItem
                      title="Safe Environment"
                      description="Childproofed areas, age-appropriate toys and equipment, and continuous supervision at all times."
                    />
                    <SafetyItem
                      title="Illness Policy"
                      description="Clear guidelines for when children should stay home due to illness to protect all children in our care."
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
}

const DevelopmentCard = ({
  title,
  description,
  color,
}: DevelopmentCardProps) => {
  return (
    <div className={`${color} p-6 rounded-lg shadow-md`}>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
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
