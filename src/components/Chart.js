import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //  labels for data points
    datasets: [
      {
        label: 'Block Statistics',
        data: data,
        borderColor: 'rgb(103, 128, 159)',
        backgroundColor: 'rgba(103, 128, 159, 0.5)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time in Sec',
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Block Count',
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
  };

  return (
    <div className="h-48">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
