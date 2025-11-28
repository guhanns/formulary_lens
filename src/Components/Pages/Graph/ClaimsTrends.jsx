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
const ClaimsTrends = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Sample data (replace with API data if needed)
  const drugData = {
    Atorvastatin: {
      cost: [750, 800, 850, 740, 880, 900, 960, 940, 880, 820, 860, 920],
      //   claims: [120, 150, 200, 180, 220, 260, 280, 300, 290, 310, 320, 350],
    },
    Metformin: {
      cost: [550, 570, 600, 620, 650, 680, 700, 720, 710, 690, 700, 720],
      //   claims: [300, 320, 330, 350, 360, 380, 400, 420, 430, 440, 450, 460],
    },
    Lisinopril: {
      cost: [400, 420, 430, 440, 460, 480, 500, 510, 520, 530, 540, 550],
      //   claims: [200, 210, 230, 220, 240, 260, 280, 290, 300, 310, 320, 330],
    },
    Omeprazole: {
      cost: [500, 530, 560, 590, 620, 640, 660, 680, 690, 700, 710, 720],
      //   claims: [100, 120, 150, 140, 180, 200, 230, 240, 260, 270, 280, 300],
    },
    // Amlodipine: {
    //   cost: [300, 320, 340, 360, 380, 400, 420, 430, 440, 450, 460, 470],
    //     claims: [80, 100, 130, 120, 150, 180, 200, 210, 220, 230, 240, 250],
    // },
  };

  const colors = {
    Atorvastatin: "#a78bfa",
    Metformin: "#c084fc",
    Lisinopril: "#d946ef",
    Omeprazole: "#9d4edd",
    Amlodipine: "#7c3aed",
  };

  const datasets = [];

  // Create cost (solid line) & claims (dotted line)
  Object.keys(drugData).forEach((drug) => {
    datasets.push({
      label: `${drug} Cost`,
      data: drugData[drug].cost,
      borderColor: colors[drug],
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
    });

    // datasets.push({
    //   label: `${drug} Claims`,
    //   data: drugData[drug].claims,
    //   borderColor: colors[drug],
    //   borderWidth: 2,
    //   tension: 0.4,
    //   pointRadius: 0,
    //   borderDash: [5, 5],
    // });
  });

  const data = { labels: months, datasets };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", labels: { color: "#ccc" } },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { color: "#ccc" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#ccc" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default ClaimsTrends;
