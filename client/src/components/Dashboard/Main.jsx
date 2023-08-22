import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from './Navbar';
import RegionChart from "./RegionChart";
import AdminDashboard from './Sidebar';
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import SectorDoughnutChart from "./SectorChart";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:5000";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <Navbar />
      <AdminDashboard />
      <IntensityChart data={data} />
      <Flex
        direction={{ base: "column", md: "row" }} m={50}>
        <Box flex={{ base: "1", md: "0.5" }} maxW="50%" p={5} m={2} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)">
          <RegionChart data={data} />
        </Box>
        <Box flex={{ base: "1", md: "0.5" }} maxW="50%" p={5} m={2} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)">
          <TopicsRadarChart data={data} />
        </Box>
      </Flex>
      <RelevanceBubbleChart data={data} />
      <SectorDoughnutChart data={data} />
    </ChakraProvider>
  );
};

export default Main;
