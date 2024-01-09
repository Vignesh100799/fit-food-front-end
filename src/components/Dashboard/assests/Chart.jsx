import React from 'react';
import Chart from 'react-apexcharts';

const WeightChart = () => {
  // Sample data for 4 weeks
  const chartOptions = {
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4',"Week 5"],
      title: {
        text: 'Weeks',
      },
    },
    yaxis: {
      title: {
        text: 'Weight (kg)',
      },
    },
  };

  const chartSeries = [
    {
      name: 'Weight',
      data: [70, 72, 71, 73,68], // Replace this array with your actual weight data
    },
  ];

  return (
    <div>
      <h2>Your Monthly Progress Here</h2>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};

export default WeightChart;
