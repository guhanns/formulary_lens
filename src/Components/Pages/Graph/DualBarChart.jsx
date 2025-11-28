import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DualBarChart = () => {
  // --- Configuration for Chart Data ---
  const labels = [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Metric 1 (e.g., Actual)",
        data: [220, 180, 290, 240, 200], // Example data points
        backgroundColor: "rgba(53, 162, 235, 0.8)", // Blue color for the first set
        borderRadius: 5, // Adds rounded corners to the bars
      },
      {
        label: "Metric 2 (e.g., Target/Previous)",
        data: [190, 210, 250, 280, 230], // Example data points
        backgroundColor: "rgba(255, 99, 132, 0.8)", // Red/Pink color for the second set
        borderRadius: 5,
      },
    ],
  };

  // --- Configuration for Chart Options (Look & Feel) ---
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position the legend at the top
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Dual Bar Chart Comparison", // Chart Title
        font: {
          size: 18,
        },
      },
      tooltip: {
        // Custom styling for tooltips if needed
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides vertical grid lines
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value (Units)", // Y-Axis Title
        },
        // You can also adjust the max value if your data needs a fixed scale
        // max: 300,
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DualBarChart;
