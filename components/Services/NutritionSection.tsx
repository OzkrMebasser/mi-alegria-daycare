"use client"
import React from 'react'
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";


interface NutritionSectionProps {
  t: (key: string) => string;
}

const NutritionSection = ({ t }: NutritionSectionProps) => {
  return (
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
  );
}

export default NutritionSection;