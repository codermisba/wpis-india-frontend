// src/components/Map.jsx
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { scaleSequential } from 'd3-scale';
import { interpolateBlues } from 'd3-scale-chromatic';
import { fetchMapData } from '../api';
import indiaStates from '../data/indiaStates'; // Your GeoJSON

const Map = () => {
  const [mapData, setMapData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMapData().then(res => {
      setMapData(res.data); // Assume { stateName: totalCrimes, ... }
      setLoading(false);
    });
  }, []);

  const colorScale = scaleSequential(interpolateBlues).domain([0, Math.max(...Object.values(mapData))]);

  const onEachFeature = (feature, layer) => {
    const state = feature.properties.ST_NM; // Adjust based on your GeoJSON
    const crimes = mapData[state] || 0;
    layer.bindPopup(`${state}: ${crimes} crimes`);
    layer.setStyle({ fillColor: colorScale(crimes), fillOpacity: 0.7 });
  };

  if (loading) return <div>Loading map...</div>;

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={indiaStates} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default Map;