// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Map from './components/Map';
import StatePage from './components/StatePage';
import NationalSummary from './components/NationalSummary';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/state/:state" element={<StatePage />} />
        <Route path="/national" element={<NationalSummary />} />
      </Routes>
    </Router>
  );
}

export default App;