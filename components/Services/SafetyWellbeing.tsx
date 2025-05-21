"use client";

import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaHandSparkles } from "react-icons/fa";
import { MdOutlineEmergency } from "react-icons/md";
import { RiShieldCrossFill } from "react-icons/ri";
import { FaVirusCovidSlash } from "react-icons/fa6";
import { FaPeoplePulling } from "react-icons/fa6";
import ItemsCards from "./ItemsCards";

interface SafetyWellbeingProps {
  t: (key: string) => string;
}

const SafetyWellbeing = ({ t }: SafetyWellbeingProps) => {
  return (
    <>
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
              <ItemsCards
                title={t(
                  "services.safety.healthSafety.items.healthHygiene.title"
                )}
                description={t(
                  "services.safety.healthSafety.items.healthHygiene.description"
                )}
                icon={
                  <FaHandSparkles className="text-xl text-yellow-500 mr-2" />
                }
                bgColor="bg-yellow-100" // title="Health & Hygiene"
                // description="Regular handwashing, sanitizing toys and surfaces, and teaching proper hygiene habits to minimize spread of illness."
              />
              <ItemsCards
                title={t(
                  "services.safety.healthSafety.items.emergencyPreparedness.title"
                )}
                description={t(
                  "services.safety.healthSafety.items.emergencyPreparedness.description"
                )}
                icon={
                  <MdOutlineEmergency className="text-xl text-red-500 mr-2" />
                }
                bgColor="bg-red-100" // title="Emergency Preparedness"
                // description="Monthly fire drills, earthquake procedures, and comprehensive emergency plans for various scenarios."
              />
              <ItemsCards
                title={t(
                  "services.safety.healthSafety.items.safeEnvironment.title"
                )}
                description={t(
                  "services.safety.healthSafety.items.safeEnvironment.description"
                )}
                icon={
                  <RiShieldCrossFill className="text-xl text-purple-500 mr-2" />
                }
                bgColor="bg-purple-100" // title="Safe Environment"
                // description="Childproofed areas, age-appropriate toys and equipment, and continuous supervision at all times."
              />
              <ItemsCards
                title={t(
                  "services.safety.healthSafety.items.illnessPolicy.title"
                )}
                description={t(
                  "services.safety.healthSafety.items.illnessPolicy.description"
                )}
                icon={
                  <FaVirusCovidSlash className="text-xl text-green-500 mr-2" />
                }
                bgColor="bg-green-100" // title="Illness Policy"
                // description="Clear guidelines for when children should stay home due to illness to protect all children in our care."
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-800">
              {/* Child Guidance Approach */}
              {t("services.safety.guidance.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {/* Our guidance policy helps children develop self-discipline,
          self-confidence, and respect for others. */}
              {t("services.safety.guidance.description")}
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium  text-lg mb-2 text-gray-800">
                {/* Our Basic Limits: */}
                {t("services.safety.guidance.basicLimits.title")}
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="font-medium  text-blue-500 mr-2">•</span>
                  <span>
                    {/* Be Safe */}
                    {t("services.safety.guidance.basicLimits.rules.one")}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-blue-500 mr-2">•</span>
                  <span>
                    {/* Be Kind */}
                    {t("services.safety.guidance.basicLimits.rules.two")}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-blue-500 mr-2">•</span>
                  <span>
                    {/* Have Fun! */}
                    {t("services.safety.guidance.basicLimits.rules.three")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium  text-lg mb-2 text-gray-800">
                {/* Guidance Goals: */}
                {t("services.safety.guidance.goals.title")}
              </h4>
              <p className="text-gray-600">
                {/* We guide children to express emotions safely, show respect
            for others&#39; feelings and ideas, solve conflicts
            positively, and build self-confidence through mastery of
            skills. */}
                {t("services.safety.guidance.goals.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafetyWellbeing;
