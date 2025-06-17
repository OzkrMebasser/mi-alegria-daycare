import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const AnimatedSocialIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [animationDemo, setAnimationDemo] = useState<number | null>(null);

  const socialIcons = [
    {
      id: 1,
      icon: FaFacebook,
      color: "#4065B1",
      name: "Facebook",
      splashPath:
        "M64.390766 7.893908c9.13892 9.586965-3.91575 14.742016.007852 26.63074 3.923603 11.888725 14.324106 14.96342 8.658127 27.114154-5.66598 12.150732-26.532488 3.603945-34.986257 10.31272-8.45377 6.708774-18.30274 6.258113-20.89926-9.745485-2.596518-16.0036-21.680047-20.760404-6.134962-40.13869 15.545086-19.378288 44.21558-23.760404 53.3545-14.17344z",
    },
    {
      id: 2,
      icon: FaInstagram,
      color: "url(#instagram-gradient)",
      name: "Instagram",
      isGradient: true,
      splashPath:
        "M23.18745 12.944335c-6.54792 27.757068-21.791687 24.90854-17.407975 39.16266 4.383713 14.25412 15.53734 9.09612 28.702498 17.354234 13.165158 8.25811 22.386095 16.8613 37.302005-15.81006s-42.04861-68.4639-48.596528-40.706835z",
    },
  ];

  // Demo animation effect
  useEffect(() => {
    const runDemo = () => {
      socialIcons.forEach((_, index) => {
        setTimeout(() => {
          setAnimationDemo(index);
          setTimeout(() => setAnimationDemo(null), 1000);
        }, index * 100);
      });
    };

    const timer = setTimeout(runDemo, 500);
    return () => clearTimeout(timer);
  }, []);

  const isAnimated = (index: number) => {
    return hoveredIcon === index || animationDemo === index;
  };

  return (
    <div className=" flex items-left justify-left ">
      <div className="scale-150 ">
        <ul className="flex justify-center items-center list-none p-0 m-0">
          {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            const animated = isAnimated(index);

            return (
              <li
                key={social.id}
                className={`opacity-100 transition-all duration-300 ease-in-out relative `}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <a
                  href="#"
                  className="block relative overflow-visible "
                  onClick={(e) => e.preventDefault()}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 80 80"
                    className="overflow-visible"
                  >
                    <defs>
                      {social.isGradient && (
                        <linearGradient
                          id={`instagram-gradient-${index}`}
                          x1="45.337221%"
                          x2="45.337218%"
                          y1="93.122416%"
                          y2="-8.953903%"
                        >
                          <stop
                            offset="0%"
                            stopColor={animated ? "#FBBC6E" : "#fff"}
                            className="transition-all duration-700 ease-in-out"
                          />
                          <stop
                            offset="50.773063%"
                            stopColor={animated ? "#D8456A" : "#fff"}
                            className="transition-all duration-700 ease-in-out"
                          />
                          <stop
                            offset="100%"
                            stopColor={animated ? "#4459A9" : "#fff"}
                            className="transition-all duration-700 ease-in-out"
                          />
                        </linearGradient>
                      )}
                    </defs>

                    {/* Circle that morphs to splash */}
                    <path
                      d={
                        animated
                          ? social.splashPath
                          : "M40 16c-13.254822 0-24 10.747563-24 24.000975C16 53.256335 26.745178 64 40 64s24-10.743665 24-23.999025C64 26.747563 53.253848 16 40 16z"
                      }
                      fill={
                        social.isGradient
                          ? `url(#instagram-gradient-${index})`
                          : animated
                          ? social.color
                          : "#fff"
                      }
                      className="transition-all duration-700 ease-in-out"
                      style={{
                        transformOrigin: "center",
                        transform: animated ? "scale(1.1)" : "scale(1)",
                      }}
                    />

                    {/* Icon */}
                    <foreignObject
                      x="0"
                      y="0"
                      width="80"
                      height="80"
                      className="flex items-center justify-center"
                    >
                      <div
                        className={`
                          w-full h-full flex items-center justify-center 
                          transition-transform duration-700 ease-in-out
                          ${animated ? "scale-125" : "scale-100"}
                        `}
                        style={{
                          transformOrigin: "center center",
                          transform: animated ? "scale(1.2)" : "scale(1)",
                        }}
                      >
                        <IconComponent
                          className={`text-2xl ${
                            animated ? "text-white" : "text-red-800"
                          }`}
                        />
                      </div>
                    </foreignObject>
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedSocialIcons;
