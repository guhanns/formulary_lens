import React from 'react'
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const DrugCostChart = () => {
    const planCounts = [45, 156, 289, 234, 56];
  const totalPlans = planCounts.reduce((a, b) => a + b, 0);

  const data = {
    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
    datasets: [
      {
        data: planCounts,
        backgroundColor: [
          "#2ecc71", // green
          "#27ae60", // darker green
          "#f39c12", // orange
          "#e67e22", // deep orange
          "#e74c3c", // red
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1c2433",
        titleColor: "#fff",
        bodyColor: "#d1d5db",
        borderColor: "#334155",
        borderWidth: 1,
      },
    },
  };
  return (
    <div
      style={{
        background: "#0f1623",
        padding: "20px",
        borderRadius: "12px",
        width: "350px",
        color: "white",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>Tier Distribution Across Plans</h3>

      <Pie data={data} options={options} />

      {/* Custom Legend */}
      <div style={{ marginTop: "20px" }}>
        {data.labels.map((label, index) => {
          const count = planCounts[index];
          const percent = ((count / totalPlans) * 100).toFixed(0);
          return (
            <div
              key={label}
              style={{
                display: "flex",
               
                alignItems: "center",
                marginBottom: "6px",
                fontSize: "14px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              {label} – {count} plans ({percent}%)
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default DrugCostChart