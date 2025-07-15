"use client"
import { useTranslation } from "react-i18next";

import { useState, useEffect, useRef } from "react";

const StatsCounter = () => {
    const { t } = useTranslation();
  const targetValues = {
    kids: 120,
    years: 10,
    resources: 70,
    satisfaction: 98,
  };

  const [currentValues, setCurrentValues] = useState({
    kids: 0,
    years: 0,
    resources: 0,
    satisfaction: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animationDuration = 3000; // Puedes ajustar esto
  const updateInterval = 30;
  const steps = animationDuration / updateInterval;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // Cuando el 30% del componente esté visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step > steps) {
        clearInterval(timer);
        setCurrentValues({ ...targetValues });
        return;
      }

      setCurrentValues({
        kids: Math.floor((targetValues.kids / steps) * step),
        years: Math.floor((targetValues.years / steps) * step),
        resources: Math.floor((targetValues.resources / steps) * step),
        satisfaction: Math.floor((targetValues.satisfaction / steps) * step),
      });
    }, updateInterval);
  };

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex w-full border-b">
        <div className="w-1/2 p-8 text-center">
          <h4 className="mt-2 text-sm uppercase text-gray-600">
            {/* Índice de satisfacción */}
            {t("homeSection.stats.satisfaction")}
          </h4>
          <div className="text-5xl font-bold text-purple-500">
            {currentValues.satisfaction}%
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {/* Clientes satisfechos con nuestro servicio de calidad */}
            {t("homeSection.stats.satisfactionDescription")}
          </div>
        </div>

        <div className="w-1/2 p-8 text-center">
          <h4 className="mt-2 text-sm uppercase text-gray-600">
            {/* Años de servicio */}
                         {t("homeSection.stats.years")}

          </h4>
          <div className="text-5xl font-bold text-red-500">
            {currentValues.years.toLocaleString()}+
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {/* Brindando cuidado de calidad por más de 10 años */}
            {t("homeSection.stats.yearsDescription")}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default StatsCounter;
