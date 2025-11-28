import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);
const Utilixationclaim = () => {
     const datas = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Claim Volume",
        data: [250, 275, 300, 375, 350, 480],
        borderColor: "#ff6b6b",
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1c2433",
        titleColor: "#fff",
        bodyColor: "#d1d5db",
        borderColor: "#334155",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" },
        grid: { color: "#1f2937" },
      },
      y: {
        min: 0,
        max: 1000,
        ticks: { color: "#9ca3af" },
        grid: { color: "#1f2937" },
      },
    },
  };
  return (
        <div
              style={{
                background: "#0f1623",
                padding: "20px",
                borderRadius: "12px",
                width: "650px",
              }}
             >
              <Line data={datas} options={options} />

              <div
                style={{
                  marginTop: "15px",
                  background: "#1c2433",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  display: "inline-block",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                ▼ 47% Decline since January
              </div>
            </div>
  )
}

export default Utilixationclaim;