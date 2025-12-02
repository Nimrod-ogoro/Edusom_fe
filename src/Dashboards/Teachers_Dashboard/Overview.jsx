import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function Overview() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse("/teachers_data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setTeachers(result.data);
        setLoading(false);
      },
      error: (err) => {
        console.error("Error parsing CSV:", err);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      <h2>📚 Subject Overview</h2>
      {loading ? (
        <p>Loading assigned classes...</p>
      ) : (
        <ul>
          {teachers.map((t) => (
            <li key={t.teacher_id}>
              {t.school} — {t.subject} ({t.full_name})
            </li>
          ))}
        </ul>
      )}
      <p>Click a class to view enrolled students (coming soon).</p>
    </div>
  );
}

export default Overview;