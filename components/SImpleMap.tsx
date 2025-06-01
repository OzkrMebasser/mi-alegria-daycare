"use client";
import { useState, useMemo } from 'react';
import Map from 'react-map-gl/maplibre';
import { Layer, Source } from 'react-map-gl/maplibre';
import circle from '@turf/circle';
import type { Feature, Polygon } from 'geojson';
import 'maplibre-gl/dist/maplibre-gl.css';


const MapLibreMap = () => {
  const position: [number, number] = [48.473695, -123.3257511]; // [lat, lng]
  
  // Crear el círculo con Turf.js (1500m de radio)
  const circleData: Feature<Polygon> = useMemo(() => {
    return circle(
      [position[1], position[0]], // [lng, lat]
      1.5, // 1500m = 1.5km
      { units: 'kilometers', steps: 64 }
    );
  }, []);

  // Estilo del mapa base (OSM)
  const mapStyle = {
    version: 8 as 8,
    sources: {
      'osm-raster-tiles': {
        type: 'raster',
        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        tileSize: 256,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      },
    },
    layers: [{
      id: 'osm-layer',
      type: 'raster',
      source: 'osm-raster-tiles',
      minzoom: 0,
      maxzoom: 22,
    }],
  };

  return (
    <div className="w-full h-[400px] shadow-md overflow-hidden z-10 rounded-lg">
      <Map
        initialViewState={{
          longitude: position[1],
          latitude: position[0],
          zoom: 11,
          
        }}
        mapStyle={mapStyle}
        style={{ width: '100%', height: '100%' }}
        controlls={true}
        attribution={true}
        scrollZoom={true}
        doubleClickZoom={true}
        touchZoom={true}
        dragRotate={true}
        dragPan={true}
        boxZoom={true}
        keyboard={true}
        pitchWithRotate={true}
        maxZoom={22}
        minZoom={2}
        

      >
        <Source type="geojson" data={circleData}>
          <Layer
            id="circle-fill"
            type="fill"
            paint={{
              'fill-color': 'blue',
              'fill-opacity': 0.3,
            }}
          />
          <Layer
            id="circle-border"
            type="line"
            paint={{
              'line-color': 'blue',
              'line-opacity': 0.8,
              'line-width': 2,
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default MapLibreMap;