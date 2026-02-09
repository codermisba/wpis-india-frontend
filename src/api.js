// src/api.js
import axios from 'axios';

const API_BASE = 'https://wpis-india-backend.onrender.com';

export const fetchMapData = () => axios.get(`${API_BASE}/map-data`);
export const fetchStateData = (state) => axios.get(`${API_BASE}/state/${state}`);
export const fetchStateYearly = (state) => axios.get(`${API_BASE}/state/${state}/yearly`);
export const fetchStateCrimeSplit = (state) => axios.get(`${API_BASE}/state/${state}/crime-split`);
export const fetchStateInsights = (state) => axios.get(`${API_BASE}/state/${state}/insights`);
export const fetchNationalSummary = () => axios.get(`${API_BASE}/national/summary`);