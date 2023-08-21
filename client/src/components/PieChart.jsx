// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.title),
    datasets: [
      {
        data: data.map((item) => item.intensity),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          // Add more colors for additional data
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          // Add more colors for additional data
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
  };

  return <Pie data={chartData} options={chartOptions} />;
};

export default PieChart;
