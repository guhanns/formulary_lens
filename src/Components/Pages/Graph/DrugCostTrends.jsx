
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const DrugCostTrends = () => {
      const labels = ["2018", "2019", "2020", "2021", "2022", "2023"];

  // Example cost numbers (in millions)
  const data = {
    labels,
    datasets: [
      {
        label: "Total Drugs Cost",
        data: [20_000_000, 25_000_000, 28_000_000, 30_000_000, 26_000_000, 24_000_000],
        borderColor: "#a78bfa",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
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
      tooltip: {
        callbacks: {
          label: (context) =>
            `$${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#ccc",
          callback: function (value) {
            return "$" + value / 1_000_000 + "M";
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      x: {
        ticks: { color: "#ccc" },
        grid: { display: false },
      },
    },
  };

  return (
        
    <>
      <Line data={data} options={options} />
    </>
     
   
  )
}

export default DrugCostTrends