import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,                                   
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const DrugTrajectoryRadar = () => {
    const labels = [
    "Total Claims",
    "Total Cost",
    "Total Prescribers",
    "YoY Growth in Cost",
    "Beneficiary Reach",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Drug Metrics",
        data: [80, 65, 50, 55, 75],
        backgroundColor: "rgba(155, 93, 229, 0.25)", 
        borderColor: "#9b5de5", 
        borderWidth: 2,
        pointBackgroundColor: "#9b5de5",
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: "rgba(255,255,255,0.1)",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
        pointLabels: {
          color: "#ccc",
          font: { size: 14 },
        },
        ticks: {
          display: false, 
        },
      },
    },
  };
  return (
    <>
        <Radar data={data} options={options} />
    </>
  )
}

export default DrugTrajectoryRadar