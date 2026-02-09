// src/components/StatePage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { fetchStateData, fetchStateYearly, fetchStateCrimeSplit, fetchStateInsights } from '../api';

const StatePage = () => {
  const { state } = useParams();
  const [data, setData] = useState({});
  const [yearly, setYearly] = useState([]);
  const [crimeSplit, setCrimeSplit] = useState([]);
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchStateData(state),
      fetchStateYearly(state),
      fetchStateCrimeSplit(state),
      fetchStateInsights(state)
    ]).then(([dataRes, yearlyRes, splitRes, insightsRes]) => {
      setData(dataRes.data);
      setYearly(yearlyRes.data); // Assume array of { year, crimes }
      setCrimeSplit(splitRes.data); // Assume array of { type, count }
      setInsights(insightsRes.data); // Assume array of strings
    });
  }, [state]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <h1>{state} Overview</h1>
      <p>Total Crimes: {data.totalCrimes}</p>
      
      <h2>Yearly Trends</h2>
      <LineChart width={600} height={300} data={yearly}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="crimes" stroke="#8884d8" />
      </LineChart>
      
      <h2>Crime Split</h2>
      <PieChart width={400} height={400}>
        <Pie data={crimeSplit} cx={200} cy={200} labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="count">
          {crimeSplit.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
      
      <h2>Insights</h2>
      <ul>
        {insights.map((insight, idx) => <li key={idx}>{insight}</li>)}
      </ul>
    </div>
  );
};

export default StatePage;