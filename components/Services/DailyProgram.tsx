"use client";
import SwiperCubeSlides from "../SwiperCubeSlides/SwiperCubeSlides";
import { FaWalking, FaHeartbeat } from "react-icons/fa";

interface DailyProgramProps {
  t: (key: string) => string;
}

const DailyProgram = ({ t }: DailyProgramProps) => {
  return (
    <>
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
    </>
  );
};

export default DailyProgram;
