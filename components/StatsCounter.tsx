import { useState, useEffect } from "react";

const StatsCounter = () => {
  // Valores finales a los que queremos llegar
  const targetValues = {
    kids: 120,
    years: 10,
    resources: 70,
    satisfaction: 98,
  };

  // Estado para los valores actuales que se mostrarán
  const [currentValues, setCurrentValues] = useState({
    kids: 0,
    years: 0,
    resources: 0,
    satisfaction: 0,
  });

  // Duración de la animación en milisegundos (10 segundos para una animación muy lenta)
  const animationDuration = 10000;
  // Intervalo de actualización
  const updateInterval = 30;
  // Número total de pasos para la animación
  const steps = animationDuration / updateInterval;

  useEffect(() => {
    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step > steps) {
        clearInterval(timer);
        setCurrentValues({ ...targetValues }); // Aseguramos que los valores finales sean exactos
        return;
      }

      // Calculamos los valores actuales basados en el progreso de la animación
      setCurrentValues({
        kids: Math.floor((targetValues.kids / steps) * step),
        years: Math.floor((targetValues.years / steps) * step),
        resources: Math.floor((targetValues.resources / steps) * step),
        satisfaction: Math.floor((targetValues.satisfaction / steps) * step),
      });
    }, updateInterval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex w-full border-b">
        {/* Niños cuidados */}
        <div className="w-1/2 p-8 text-center border-r">
          <h4 className="mt-2 text-sm uppercase text-gray-600">
            {" "}
            Niños atendidos{" "}
          </h4>
          <div className="text-5xl font-bold text-teal-500">
            {currentValues.kids.toLocaleString()}+
          </div>
          <div className="mt-2 text-sm  text-gray-600">
            Hemos cuidado de más de 120 niños felices.
          </div>
        </div>

        {/* Años de servicio*/}
        <div className="w-1/2 p-8 text-center">
          <h4 className="mt-2 text-sm uppercase text-gray-600">
            {" "}
            Años de servicio{" "}
          </h4>
          <div className="text-5xl font-bold text-red-500">
            {currentValues.years.toLocaleString()}+
          </div>
          <div className="mt-2 text-sm  text-gray-600">
            Brindando cuidado de calidad por más de 10 años
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-1/2 p-8 text-center border-r">
          {/* Familias impactadas */}
          <h4 className="mt-2 text-sm uppercase text-gray-600">
            {" "}
            Familias impactadas{" "}
          </h4>
          <div className="text-5xl font-bold text-orange-500">
            {currentValues.resources}+
          </div>
          <div className="mt-2 text-sm  text-gray-600">
            Más de 70 familias han confiado en nosotros
          </div>
        </div>

        {/* Índice de satisfacción */}
        <div className="w-1/2 p-8 text-center">
          <h4 className="mt-2 text-sm uppercase text-gray-600">
            {" "}
            Índice de satisfacción{" "}
          </h4>
          <div className="text-5xl font-bold text-purple-500">
            {currentValues.satisfaction}%
          </div>
          <div className="mt-2 text-sm  text-gray-600">
            Clientes satisfechos con nuestro servicio de calidad
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
