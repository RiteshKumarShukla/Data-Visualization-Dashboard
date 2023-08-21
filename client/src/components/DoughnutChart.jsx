import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
  const createRadialGradient = () => {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0.6)');
    return gradient;
  };

  const chartData = {
    labels: data.map((item) => item.title),
    datasets: [
      {
        data: data.map((item) => item.intensity),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          // Add more colors as needed
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          // Add hover colors
        ],
        // Add a radial gradient background
        background: createRadialGradient(),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};

export default DoughnutChart;

