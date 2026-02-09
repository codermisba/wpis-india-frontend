import { useEffect, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

export default function IndiaMap({ onSelect }) {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const india = feature(data, data.objects.states);
        setGeoData(india);
      })
      .catch(console.error);
  }, []);

  if (!geoData) return <p className="text-center mt-8">Loading map...</p>;

  const projection = geoMercator()
    .center([78.9629, 22.5937])
    .scale(1000)
    .translate([400, 450]);

  const pathGenerator = geoPath().projection(projection);

  return (
    <div className="flex justify-center mt-6">
      <svg width={800} height={900} viewBox="0 0 800 900">
        {geoData.features.map((state, i) => (
          <path
            key={i}
            d={pathGenerator(state)}
            fill="#e5e7eb"
            stroke="#374151"
            strokeWidth={0.5}
            className="hover:fill-blue-500 cursor-pointer transition"
            onClick={() => onSelect?.(state.properties.st_nm)}
          />
        ))}
      </svg>
    </div>
  );
}
