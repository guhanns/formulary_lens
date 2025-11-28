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
const TotalFillsDrug = () => {
     const labels = ["Atorvastatin", "Metformin", "Lisinopril", "Omeprazole", "Amlodipine"];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Claims",
        data: [650, 280, 500, 900, 600],
        backgroundColor: "#6941C6",
        borderRadius: 8,
        barThickness: 40
      },
      {
        label: "Total 30days fills",
        data: [560, 580, 610, 750, 740],
        backgroundColor: "#9470E4",
        borderRadius: 8,
          barThickness: 40
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#ccc" },
      },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#ccc" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      x: {
        ticks: { color: "#ccc" },
        grid: { display: false },
      },
    },
    barPercentage: 0.6,
    categoryPercentage: 0.5,
  };

  return (
    <>
       <Bar data={data} options={options} />
    </>
  )
}

export default TotalFillsDrug