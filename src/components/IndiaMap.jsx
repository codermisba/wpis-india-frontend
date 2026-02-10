import { useEffect, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { fetchStateInsights } from "../api";

const getColor = (total) => {
  if (total > 500000) return "#450a0a";
  if (total > 300000) return "#7f1d1d";
  if (total > 150000) return "#b91c1c";
  if (total > 50000) return "#dc2626";
  if (total > 10000) return "#ef4444";
  return "#fca5a5";
};


export default function IndiaMap() {
  const [geoData, setGeoData] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [stateData, setStateData] = useState(null);

  const normalizeStateName = (name) => {
    const mapping = {
      "Andaman & Nicobar Islands": "A And N Islands",
      "Dadra & Nagar Haveli": "D And N Haveli",
      "Daman & Diu": "Daman and Diu",
      "Uttar Pradesh": "Tar Pradesh",
      "Uttarakhand": "Tarakhand"
    };
    return mapping[name] || name;
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/adarshbiradar/maps/master/india.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch(console.error);
  }, []);

  const handleHover = async (e, state) => {
    const stateName = normalizeStateName(state.properties.st_nm);
    setHoveredState(stateName);
    setTooltipPos({ x: e.clientX, y: e.clientY });

    try {
      const res = await fetchStateInsights(stateName);
      setStateData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!geoData) return <h3>Loading Map...</h3>;

  const projection = geoMercator()
    .scale(1000)
    .center([82, 23])
    .translate([400, 400]);

  const pathGenerator = geoPath().projection(projection);

  return (
    <div style={{ position: "relative" }}>
      <svg width={800} height={800}>
        {geoData.features.map((state, i) => (
          <path
            key={i}
            d={pathGenerator(state)}
            fill={
  hoveredState === normalizeStateName(state.properties.st_nm)
    ? "#c2185b"
    : "#f8bbd0"
}

            stroke="#880e4f"
            strokeWidth={0.6}
            style={{ cursor: "pointer" }}
            onMouseMove={(e) => handleHover(e, state)}
            onMouseLeave={() => {
              setHoveredState(null);
              setStateData(null);
            }}
          />
        ))}
      </svg>

      {hoveredState && stateData && (
  <div
    style={{
      position: "fixed",
      left: tooltipPos.x + 15,
      top: tooltipPos.y + 15,
      background: "#0f172a",
      color: "#f8fafc",
      padding: "14px 16px",
      borderRadius: "10px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      fontSize: "13px",
      pointerEvents: "none",
      zIndex: 999,
      minWidth: "230px",
      border: "1px solid #334155"
    }}
  >
    <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: 6 }}>
      {hoveredState}
    </div>

    <div>Total Crimes: <b>{stateData.total_cases.toLocaleString()}</b></div>
    <div>Worst Year: <b>{stateData.worst_year}</b></div>
    <div>Peak Cases: <b>{stateData.worst_year_cases.toLocaleString()}</b></div>
    <div>Most Common: <b>{stateData.most_common_crime.replaceAll("_"," ")}</b></div>
  </div>
)}

    </div>
  );
}
