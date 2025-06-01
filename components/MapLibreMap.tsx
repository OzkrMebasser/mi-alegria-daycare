"use client";
import { useMemo } from 'react';
import Map, { Layer, Source } from 'react-map-gl/maplibre';
import circle from '@turf/circle';
import type { Feature, Polygon } from 'geojson';
import type { StyleSpecification } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapLibreMap = () => {
  const position: [number, number] = [48.473695, -123.3257511];
  
  const circleData: Feature<Polygon> = useMemo(() => {
    return circle(
      [position[1], position[0]],
      1.5,
      { units: 'kilometers', steps: 64 }
    );
  }, []);

  const mapStyle: StyleSpecification = {
    version: 8,
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