import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const GraphsAndAnalytics = () => {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const lineChartCtx = lineChartRef.current.getContext("2d");
    const pieChartCtx = pieChartRef.current.getContext("2d");

    const lineChart = new Chart(lineChartCtx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Active Users",
            data: [50, 100, 150, 200, 180, 220, 300],
            borderColor: "#4caf50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { legend: { display: true } },
      },
    });

    const pieChart = new Chart(pieChartCtx, {
      type: "pie",
      data: {
        labels: ["Sold", "Rented", "Listed"],
        datasets: [
          {
            data: [200, 100, 300],
            backgroundColor: ["#4caf50", "#ff9800", "#2196f3"],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { legend: { display: true } },
      },
    });

    // Cleanup: Destroy chart instances to free the canvas
    return () => {
      lineChart.destroy();
      pieChart.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#eee] dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold">User Engagement</h3>
        <div className="relative w-full h-64">
          <canvas ref={lineChartRef} />
        </div>
      </div>
      <div className="bg-[#eee] dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold">Marketplace Performance</h3>
        <div className="relative w-full h-64">
          <canvas ref={pieChartRef} />
        </div>
      </div>
    </div>
  );
};

export default GraphsAndAnalytics;