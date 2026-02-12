// import { useEffect, useState } from "react";
// import { fetchStateTrends } from "../api";

// export default function StateAnalytics({ state }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchStateTrends(state).then(res => setData(res.data));
//   }, [state]);

//   if (!data) return <p>Loading analytics...</p>;

//   return (
//     <div className="analytics-grid">

//       <div className="chart-card">
//         <h4>Year-wise Crime Trend</h4>
//         <p>📈 Graph will appear here</p>
//       </div>

//       <div className="chart-card">
//         <h4>Crime Distribution</h4>
//         <p>🍩 Pie chart will appear here</p>
//       </div>

//       <div className="chart-card">
//         <h4>Key Insights</h4>
//         <ul>
//           <li>Worst year: {data.worstYear}</li>
//           <li>Peak cases: {data.peakCases}</li>
//           <li>Top crime: {data.topCrime}</li>
//         </ul>
//       </div>

//     </div>
//   );
// }
