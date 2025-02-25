import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Ensure correct routing setup
import Plot from "react-plotly.js";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const formData = location.state?.formData || {}; // ✅ Read form data safely

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dashboard", {
      method: "POST", // Change to POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send form data
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging
        setDashboardData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading dashboard...</p>;
  if (!dashboardData) return <p className="text-center text-gray-500">No data available.</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Patient Medical History Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render Plotly Charts */}
        {dashboardData.fig_timeline && <ChartCard title="Timeline" data={dashboardData.fig_timeline} />}
        {dashboardData.fig_side_effects && <ChartCard title="Side Effects" data={dashboardData.fig_side_effects} />}
        {dashboardData.fig_side_effects_heatmap && <ChartCard title="Side Effects Heatmap" data={dashboardData.fig_side_effects_heatmap} />}
        {dashboardData.fig_tumor_size && <ChartCard title="Tumor Size Progression" data={dashboardData.fig_tumor_size} />}
        {dashboardData.fig_follow_up && <ChartCard title="Follow-Up Appointments" data={dashboardData.fig_follow_up} />}
        {dashboardData.fig_financial && <ChartCard title="Financial Expenses" data={dashboardData.fig_financial} />}
        {dashboardData.fig_cumulative_cost && <ChartCard title="Cumulative Medical Costs" data={dashboardData.fig_cumulative_cost} />}
      </div>
    </div>
  );
};

// ChartCard Component
const ChartCard = ({ title, data }) => {
  try {
    const parsedData = typeof data === "string" ? JSON.parse(data) : data; // Ensure it's an object

    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <Plot 
          data={parsedData.data} 
          layout={parsedData.layout} 
          style={{ width: "100%", height: "250px" }} 
        />
      </div>
    );
  } catch (error) {
    console.error("Error parsing Plotly data:", error);
    return <p>Error loading chart.</p>;
  }
};

export default Dashboard;
