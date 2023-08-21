import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import LoginPage from './components/Login/Login';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = 'http://localhost:5000';
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
