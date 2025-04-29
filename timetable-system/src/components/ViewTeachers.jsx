// ViewTeachers.jsx
import React, { useEffect, useState } from "react";

const ViewTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/teachers");
      const data = await res.json();
      setTeachers(data);
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>All Teacher Details</h2>
      {teachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <table className="teacher-table">
          <thead>
            <tr>
              <th>Teacher ID</th>
              <th>Name</th>
              <th>Subject Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Is Lab</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.teacherId}</td>
                <td>{teacher.teacherName}</td>
                <td>{teacher.subjectCode}</td>
                <td>{teacher.subjectName}</td>
                <td>{teacher.credits}</td>
                <td>{teacher.isLab ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewTeachers;
