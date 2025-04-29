import React, { useState } from "react";
import Tabs from "./Tabs";
import { Line } from "react-chartjs-2";
import "./Dashboard.css";

const Dashboard = () => {
  const [teacher, setTeacher] = useState({ name: "", id: "" });
  const [subject, setSubject] = useState({ name: "", code: "", credits: 0, isLab: false });
  const [batchSection, setBatchSection] = useState({ year: "", section: "" });
  const [fitnessData, setFitnessData] = useState([10, 8, 5, 2]);

  const handleTeacherChange = (e) => setTeacher({ ...teacher, [e.target.name]: e.target.value });
  const handleSubjectChange = (e) => setSubject({ ...subject, [e.target.name]: e.target.value });
  const handleLabChange = () => setSubject({ ...subject, isLab: !subject.isLab });
  const handleBatchChange = (e) => setBatchSection({ ...batchSection, [e.target.name]: e.target.value });

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

  const tabs = {
    "Admin Input": (
      <div className="dashboard-container">
        <h2>Add Teacher</h2>
        <input placeholder="Name" name="name" value={teacher.name} onChange={handleTeacherChange} />
        <input placeholder="ID" name="id" value={teacher.id} onChange={handleTeacherChange} />

        <h2>Add Subject</h2>
        <input placeholder="Subject Name" name="name" value={subject.name} onChange={handleSubjectChange} />
        <input placeholder="Code" name="code" value={subject.code} onChange={handleSubjectChange} />
        <input placeholder="Credits" name="credits" type="number" value={subject.credits} onChange={handleSubjectChange} />
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input type="checkbox" checked={subject.isLab} onChange={handleLabChange} /> Lab Subject
        </label>

        <h2>Batch & Section</h2>
        <input placeholder="Year" name="year" value={batchSection.year} onChange={handleBatchChange} />
        <input placeholder="Section" name="section" value={batchSection.section} onChange={handleBatchChange} />
        <button className="generate-btn">Submit Data</button>
      </div>
    ),
    "Overview": (
      <div className="dashboard-container">
        <h2>Input Summary</h2>
        <p><strong>Teacher:</strong> {teacher.name} ({teacher.id})</p>
        <p><strong>Subject:</strong> {subject.name} ({subject.code}) - {subject.credits} credits {subject.isLab && "[Lab]"}</p>
        <p><strong>Batch:</strong> Year {batchSection.year}, Section {batchSection.section}</p>
      </div>
    ),
    "Fitness Tracker": (
      <div className="dashboard-container">
        <h2>Fitness Evolution</h2>
        <Line data={fitnessChart} />
      </div>
    ),
  };

  return (
    <div style={{ padding: '40px' }}>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Dashboard;
