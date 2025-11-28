import React from "react";
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

const Loetimelinechart = () => {
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
    "Symbicort"
  ];

  // Months remaining to exclusivity loss
  const months = [8, 10, 9, 14, 16, 17, 18, 26, 28, 30];

  // Color mapping (red → orange → green)
  const colors = [
    "#912018",
    "#912018",
    "#912018",
    "#93370D",
    "#93370D",
    "#93370D",
    "#93370D",
    "#085D3A",
    "#085D3A",
    "#085D3A",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Months to LOE",
        data: months,
        backgroundColor: colors,
        borderRadius: 6,
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
        max: 30,
        ticks: {
          color: "#94969C",
        },
        // grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: {
          color: "#94969C",
        },
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

export default Loetimelinechart