// src/components/NationalSummary.jsx
import { useEffect, useState } from 'react';
import { fetchNationalSummary } from '../api';

const NationalSummary = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetchNationalSummary().then(res => setSummary(res.data));
  }, []);

  return (
    <div>
      <h1>National Summary</h1>
      <p>Total Crimes: {summary.totalCrimes}</p>
      {/* Add more fields like rankings or charts */}
    </div>
  );
};

export default NationalSummary;