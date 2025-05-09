"use client"
import { MapContainer, TileLayer, Circle } from "react-leaflet";

// Definir tipos para las propiedades del círculo
interface CircleStyleOptions {
  fillColor: string;
  fillOpacity: number;
  color: string;
  opacity: number;
  weight: number;
}

const SimpleMap = () => {
    const position: [number, number] = [48.473695, -123.3257511]; // Victoria, BC


  return (
    <div className="w-full h-[400px]  shadow-md overflow-hidden z-10">
      {/* MapContainer */}
      <MapContainer
        center={position} // Tipo: [number, number]
        zoom={12} // Tipo: number
        // style={{ height: "100%", width: "100%" , zIndex: "0" }} // Tipo: CSSProperties
        className="h-full w-full  shadow-md overflow-hidden z-10"
      >
        {/* Capa de tiles (mapa base) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Tipo: string
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Tipo: string
        />

        {/* Círculo azul transparente */}
        <Circle
          center={position} // Tipo: [number, number]
          radius={1500} // Tipo: number (en metros)
          pathOptions={{
            fillColor: "blue", // Tipo: string
            fillOpacity: 0.3, // Tipo: number
            color: "blue", // Tipo: string
            opacity: 0.8, // Tipo: number
            weight: 2, // Tipo: number
          }}
        />
      </MapContainer>
    </div>
  );
};

export default SimpleMap;