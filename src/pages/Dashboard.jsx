import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Dashboardcards from "../component/Dashboardcards";
import Daigramcards from "../component/Daigramcards";

// Register the elements required for Doughnut and Bar charts
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Dashboard = () => {
  // Data for the doughnut chart
  const doughnutData = {
    labels: ["Hazmat Free Items", "Items with Hazmat"],
    datasets: [
      {
        data: [149, 14],
        backgroundColor: ["#32CD32", "#FF6347"],
      },
    ],
  };

  // Options for the doughnut chart
  const doughnutOptions = {
    maintainAspectRatio: false,
  };

  // Data for the bar chart
  const barData = {
    labels: ["Hazmat Category A", "Hazmat Category B", "Hazmat Category C"],
    datasets: [
      {
        label: "Items containing Hazmat",
        data: [5, 3, 6],
        backgroundColor: "#FF6347",
      },
    ],
  };

  // Options for the bar chart
  const barOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Top navigation bar */}
      <div className="flex justify-between items-center bg-gray-500 p-4 rounded-lg mb-6">
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <i className="fas fa-info-circle mr-2"></i>Vessel Info
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <i className="fas fa-certificate mr-2"></i>IHM Maintenance
            Certificates
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <i className="fas fa-file-alt mr-2"></i>IHM Reports
          </button>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <i className="fas fa-search mr-2"></i>Search PO/PO-Items
        </button>
      </div>

      {/* Main dashboard content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left: Donut chart */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-center font-semibold text-lg mb-4">
            POs Review Summary (click to view details)
          </h2>
          <div
            className="relative mx-auto"
            style={{ width: "200px", height: "200px" }}
          >
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <p className="text-center mt-4">
            149 Hazmat Free Items, 1 Not Installed Hazmat, 14 Others
          </p>
        </div>

        {/* Middle: Bar chart */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-center font-semibold text-lg mb-4">
            Items from 1 POs containing Hazmat
          </h2>
          <div
            className="relative mx-auto"
            style={{ width: "300px", height: "200px" }}
          >
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Right: Buttons for different hazmat items */}
        <div className="space-y-4">
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg">
            View "Prohibited to Install" Items
          </button>
          <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg">
            View "Not Installed Hazmat" Items
          </button>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
            View "Installed Hazmat" Items
          </button>
          <button className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg">
            View "Replaced" Items
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-500 p-4 rounded-lg mb-4 mt-4">
        <div className="flex space-x-4">
          <div className=" text-white px-4  rounded flex items-center">
            <i className="fas fa-info-circle mr-2"></i>IHM Part 1 Summary Data (Initial IHM Part 1 + Installed Items - Replaced Items – Removed Items)
          </div>
          
        </div>
      </div>    
      <Dashboardcards/>
      <div className="flex justify-between items-center bg-gray-500 p-4 rounded-lg mb-4 mt-4">
        <div className="flex space-x-4">
          <div className=" text-white px-4  rounded flex items-center">
            <i className="fas fa-info-circle mr-2"></i>Location Diagrams (Initial IHM Part 1 + Installed Items containing Hazmat)
          </div>
          
        </div>
      </div>
      <Daigramcards/>
    </div>
  );
};

export default Dashboard;
