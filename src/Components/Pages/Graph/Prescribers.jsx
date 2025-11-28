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
const Prescribers = () => {
     const labels = [
    "Atorvastatin",
    "Metformin",
    "Lisinopril",
    "Omeprazole",
    "Amlodipine",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Drug Cost",
        data: [650000, 150000, 450000, 900000, 600000],
        backgroundColor: "#6941C6",
        borderRadius: 8,
        barThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#ccc",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ccc",
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      x: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
            <>
             <Bar data={data} options={options} />
            </>
  )
}

export default Prescribers