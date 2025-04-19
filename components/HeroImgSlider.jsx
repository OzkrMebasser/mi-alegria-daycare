import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Hero = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/*Overlayer*/}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>

      {/* <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center ">
          <div className="max-w-lg">
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl text-white mb-8">{t("home.hero.subtitle")}</p>
            <button className="bg-accent hover:bg-accent-dark text-gray-800 font-bold py-3 px-6 rounded-full transition-colors">
              {t("home.hero.cta")}
            </button>
          </div>
        </div>
      </div> */}
      {/* Imágenes */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Indicadores de puntos */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white bg-opacity-90"
                : "bg-white bg-opacity-50 hover:bg-opacity-80"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
