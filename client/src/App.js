// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FilterForm from './components/FilterForm';
import DataVisualization from './components/DataVisualization';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = async (filters) => {
    try {
      const response = await axios.get('http://localhost:5000/api/data', { params: filters });
      setFilteredData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Data Visualization Dashboard</h1>
      <FilterForm onFilterChange={handleFilterChange} />
      <DataVisualization data={filteredData} />
    </div>
  );
}

export default App;
