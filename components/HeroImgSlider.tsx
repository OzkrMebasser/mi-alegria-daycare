import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  images: string[];
}

const Hero = ({ images }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);

  const { t } = useTranslation();
  const imageCount = images.length;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlayActive) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === imageCount - 1 ? 0 : prevIndex + 1));
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [imageCount, isAutoPlayActive]);

  const buttonStyle = (isActive: boolean) =>
    `w-3 h-3 rounded-full transition-all duration-300 pointer  ${
      isActive
        ? "bg-[#e423a3] bg-opacity-90"
        : "bg-white bg-opacity-50 hover:bg-opacity-80"
    }`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlayer */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div> */}

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
            aria-label={`Ir a la imagen ${index + 1}`}
            title={`Image ${index + 1}`}
            key={index}
            className={buttonStyle(index === currentIndex)}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlayActive(false); // Detener el autoplay
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;