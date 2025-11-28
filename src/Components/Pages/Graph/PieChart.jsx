import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: [
      "Tier 1 - 45 plans (6%)",
      "Tier 2 - 156 plans (20%)",
      "Tier 3 - 289 plans (37%)",
      "Tier 4 - 234 plans (30%)",
      "Tier 5 - 56 plans (7%)",
    ],
    datasets: [
      {
        data: [45, 156, 289, 234, 56],
        backgroundColor: [
          "#0f8b4c", // Tier 1
          "#17b26a", // Tier 2
          "#f79f1f", // Tier 3
          "#ff6f61", // Tier 4
          "#e63946", // Tier 5
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#ffffff",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}
