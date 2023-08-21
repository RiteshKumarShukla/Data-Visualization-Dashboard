// src/components/DataVisualization.js
import React, { useRef, useEffect } from 'react';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import { Chart, CategoryScale, LinearScale } from 'chart.js/auto';
Chart.register(CategoryScale, LinearScale); 
const DataVisualization = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const chartData = {
      labels: data.map((item) => item.title),
      datasets: [
        {
          label: 'Intensity',
          data: data.map((item) => item.intensity),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    };

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="data-visualization">
      <canvas ref={chartRef} />
      <DoughnutChart data={data.slice(0, 5)} />
      <PieChart data={data.slice(0, 5)} />
    </div>
  );
};

export default DataVisualization;
