import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export default function LineChart() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Claim Volume",
        data: [200, 230, 300, 260, 400, 520], // sample data
        borderColor: "#ff6f61",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 0, // removes dots
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#ccc",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255,255,255,0.08)",
        },
        ticks: {
          color: "#9ca3af",
        },
      },
      y: {
        min: 0,
        max: 1000,
        grid: {
          color: "rgba(255,255,255,0.08)",
        },
        ticks: {
          color: "#9ca3af",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        padding: "30px",
        background: "#0d1117",
        borderRadius: "12px",
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "20px" }}>
        Claim Volume Trend
      </h3>

      <Line data={data} options={options} />

      <div
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "8px 14px",
          background: "#111827",
          borderRadius: "8px",
          color: "#d1d5db",
          fontSize: "14px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        ↓ 47% Decline since January
      </div>
    </div>
  );
}
