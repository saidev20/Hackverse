// ViewTeachers.jsx
import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import './ViewTeachers.css';


const ViewTeachers = forwardRef((props, ref) => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/teachers");
      console.log("Teachers:", teachers);
      const data = await res.json();
      // Convert isLab to boolean for each teacher
      const processed = data.map((t) => ({ ...t, isLab: Boolean(t.isLab) }));
      setTeachers(processed);
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    refresh: fetchTeachers
  }));

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="view-teachers-container">
      <h2>All Teacher Details</h2>
      <button onClick={fetchTeachers} style={{marginBottom: 12}}>Refresh</button>
      {loading ? <p>Loading...</p> : teachers.length === 0 ? (
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
});

export default ViewTeachers;
