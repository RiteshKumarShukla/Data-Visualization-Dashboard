import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
  const intensities = [...new Set(data.map(item => item.intensity))];
  const intensityCounts = intensities.map(intensity =>
    data.filter(item => item.intensity === intensity).length
  );

  const doughnutData = {
    labels: intensities,
    datasets: [
      {
        data: intensityCounts,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF5733',
          '#8B008B',
        ],
      },
    ],
  };

  return (
    <div className="doughnut-chart">
      <Doughnut data={doughnutData} />
    </div>
  );
};

export default DoughnutChart;
