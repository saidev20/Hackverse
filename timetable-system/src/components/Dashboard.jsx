import React, { useState } from "react";
import "./Dashboard.css";
import { Line } from "react-chartjs-2"; // Chart library for fitness tracking
import Tabs from "./Tabs"; // Assuming Tabs component is for tab navigation
import AddTeachers from "./AddTeachers"; // Import AddTeachers component
import ViewTeachers from "./ViewTeachers";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Generate TimeTable");
  const [fitnessData, setFitnessData] = useState([10, 8, 5, 2]);

  const fitnessChart = {
    labels: fitnessData.map((_, i) => `Gen ${i + 1}`),
    datasets: [
      {
        label: "Fitness Score",
        data: fitnessData,
        fill: false,
        borderColor: "#4f46e5",
        tension: 0.1,
      },
    ],
  };

  // Dashboard content
  const generateTimeTableContent = (
    <div className="dashboard-container">
      <h2>Generate TimeTable</h2>
      <p>Form for generating the timetable goes here...</p>
      {/* Add timetable generation logic here */}
    </div>
  );

  const recentHistoryContent = (
    <div className="dashboard-container">
      <h2>Recent History</h2>
      <p>Details about recent activity...</p>
      {/* Display recent actions or history data */}
    </div>
  );

  const aboutUsContent = (
    <div className="dashboard-container">
      <h2>About Us</h2>
      <p>Information about the application...</p>
      {/* About us information */}
    </div>
  );

  // New: Add Teacher Details content
  const addTeacherContent = (
    <div className="dashboard-container">
      <h2>Add Teacher Details</h2>
      <AddTeachers />
    </div>
  );

  const tabs = {
    "Generate TimeTable": generateTimeTableContent,
    "Recent History": recentHistoryContent,
    "About Us": aboutUsContent,
    "Add Teacher Details": addTeacherContent, // New tab
    "View Teacher Details": <ViewTeachers />,
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveTab("Generate TimeTable")}>Generate TimeTable</li>
          <li onClick={() => setActiveTab("Recent History")}>Recent History</li>
          <li onClick={() => setActiveTab("About Us")}>About Us</li>
          <li onClick={() => setActiveTab("Add Teacher Details")}>Add Teacher Details</li> {/* New option */}
          <li onClick={() => setActiveTab("View Teacher Details")}>View Teacher Details</li>
        </ul>
      </div>

      <div className="content">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export default Dashboard;
