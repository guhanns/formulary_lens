import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const Marketshare = () => {
      const labels = [
    "Atorvastatin",
    "Metformin",
    "Ozempic",
    "Eliquis",
    "Jardiance",
    "Lisinopril",
    "Amlodipine",
    "Trulicity",
    "Crestor",
    "Symbicort",
  ];

  const marketShare = [95, 90, 80, 55, 50, 45, 40, 30, 20, 15];

  const data = {
    labels,
    datasets: [
      {
        label: "Market Share (%)",
        data: marketShare,
        backgroundColor: "#6941C6",
        // borderRadius: 8,
        barThickness: 18,
      },
    ],
  };

  const options = {
    indexAxis: "y",      
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          color: "#ccc",
          callback: function (value) {
            return value + "%";
          },
        },
        // grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#ccc" },
        // grid: { display: false },
      },
    },
  };

  return (
    <>
    
      <Bar data={data} options={options} />
    </>
  )
}

export default Marketshare