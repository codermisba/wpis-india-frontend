import { useEffect, useState } from "react";
import IndiaMap from "./components/IndiaMap";
import { fetchNationalSummary } from "./api";
import Header from "./components/Header";
// import StateAnalytics from "./components/StateAnalytics";

import "./index.css";
import { fetchMapData } from "./api";


export default function App() {
  const [summary, setSummary] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [selectedState, setSelectedState] = useState(null);



  useEffect(() => {
    fetchMapData().then(res => {
    const sorted = res.data.sort((a,b) => a.Total_Crimes - b.Total_Crimes);
    setRanking(sorted);
  });
    fetchNationalSummary()
      .then((res) => {
        const yearly = res.data.yearly_trend;
        const crimeDist = res.data.crime_distribution;

        const total = yearly.reduce((s, y) => s + y.Total_Crimes, 0);

        const worstYear = yearly.reduce((a, b) =>
          a.Total_Crimes > b.Total_Crimes ? a : b
        );

        const worstCrime = crimeDist.reduce((a, b) =>
          a.count > b.count ? a : b
        );

        setSummary({
          total,
          worstYear: worstYear.Year,
          worstYearCases: worstYear.Total_Crimes,
          topCrime: worstCrime.crime_type.replaceAll("_", " ")
        });
      })
      .catch(console.error);
  }, []);

  

  return (
    <div className="app">

      <Header />

      {/* HERO */}
      <div className="hero">
        <h2>Understanding Crime Trends Across Indian States</h2>
        <p>
          A data-driven analytical platform designed to visualize and analyze
          crimes against women across India, supporting research, awareness,
          and informed policymaking.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="stats">
        <StatCard
          title="Total Crimes (2001–2021)"
          value={summary ? summary.total.toLocaleString() : "Loading..."}
        />

        <StatCard
          title="Worst Year"
          value={summary ? summary.worstYear : "Loading..."}
        />

        <StatCard
          title="Peak Cases"
          value={summary ? summary.worstYearCases.toLocaleString() : "Loading..."}
        />

        <StatCard
          title="Most Common Crime"
          value={summary ? summary.topCrime : "Loading..."}
        />
      </div>

      {/* DASHBOARD */}
      <div className="dashboard">

        {/* MAP */}
        <div className="map-container">
          <IndiaMap />
        </div>
{/* 
        {selectedState && (
  <div className="state-analytics">
    <h3>{selectedState.State} — Yearly Crime Trends</h3>
    <StateAnalytics state={selectedState.State} />
  </div>
)} */}



        {/* RANKING PANEL (Next Step) */}
       <div className="ranking">
  {ranking.map((s, i) => (
    <div 
      key={i} 
      className="rank-row"
      onClick={() => setSelectedState(s)}
    >
      <span className="rank">{i+1}</span>
      <span className="state">{s.State}</span>
      <span className="value">{s.Total_Crimes.toLocaleString()}</span>
    </div>
  ))}
</div>



      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}