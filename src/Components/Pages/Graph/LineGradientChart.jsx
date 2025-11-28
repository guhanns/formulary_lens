import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const LineGradientChart = () => {
  const chartRef = useRef(null);

  // X Labels
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  // Data values
  const values = [10, 35, 25, 50, 40, 60, 55];

  const data = {
    labels,
    datasets: [
      {
        label: "Sales Trend",
        data: values,
        fill: true,
        borderColor: "#7C3AED", // purple
        pointBackgroundColor: "#fff",
        pointBorderColor: "#7C3AED",
        pointRadius: 4,
        tension: 0.35,

        // Gradient fill
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(0, "rgba(124, 58, 237, 0.5)"); // top purple
          gradient.addColorStop(1, "rgba(124, 58, 237, 0.05)"); // bottom faint

          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#111",
        bodyColor: "#111",
        borderWidth: 1,
        borderColor: "#ddd",
      },
    },
    scales: {
      x: {
        ticks: { color: "#888" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#888" },
        grid: {
          color: "rgba(255,255,255,0.08)", // very soft grid
        },
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineGradientChart;
