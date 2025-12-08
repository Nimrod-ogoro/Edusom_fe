import React, { useEffect, useState } from "react";
import Papa from "papaparse";

export default function ResourcePlanner() {
  const currentTeacherId = "T123"; // replace with logged-in teacher ID
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDay, setOpenDay] = useState(null);

  // Resource states
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([]);
  const [notes, setNotes] = useState("");
  const [shared, setShared] = useState([]);

  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  useEffect(() => {
    Papa.parse("/teachers_data.csv", {
      download: true,
      header: true,
      complete: (r) => {
        setClasses(r.data.filter((c) => c.teacher_id === currentTeacherId));
        setLoading(false);
      },
      error: () => setLoading(false),
    });
  }, []);

  const toggleDay = (day) => setOpenDay(openDay === day ? null : day);

  // Resource handlers
  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files).map((f) => f.name);
    setFiles([...files, ...uploaded]);
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    const url = e.target.elements.url.value;
    if (url) {
      setLinks([...links, url]);
      e.target.reset();
    }
  };

  const handleShare = (resource) => {
    setShared([...shared, resource]);
    alert(`Shared: ${resource}`);
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">📚 Resource Planner</h2>
      <p className="text-slate-600">Your teaching overview, weekly planner, and resource hub in one place.</p>

      {/* Overview Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Classes</h3>
          <p className="text-2xl">{classes.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Subjects Taught</h3>
          <p className="text-2xl">
            {[...new Set(classes.map((c) => c.subject))].length}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">School</h3>
          <p className="text-2xl">{classes[0]?.school || "N/A"}</p>
        </div>
      </div>

      {/* Weekly Planner */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Planner</h3>
        {loading ? (
          <p>Loading schedule...</p>
        ) : (
          days.map((day) => {
            const dayClasses = classes.filter((c) => c.day === day);
            return (
              <div key={day} className="border rounded-lg mb-3">
                <button
                  onClick={() => toggleDay(day)}
                  className="w-full text-left px-4 py-2 font-semibold bg-slate-100 hover:bg-slate-200"
                >
                  {day} {openDay === day ? "▲" : "▼"}
                </button>
                {openDay === day && (
                  <div className="p-4">
                    {dayClasses.length === 0 ? (
                      <p className="text-slate-500">No classes scheduled.</p>
                    ) : (
                      dayClasses.map((c) => (
                        <div key={c.class_id} className="p-2 border rounded mb-2">
                          <p className="font-semibold">{c.subject} — {c.class_name}</p>
                          <p className="text-sm text-slate-500">Time: {c.time}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Resource Hub */}
      <div className="space-y-6">
        {/* Lesson Materials Upload */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Lesson Materials</h3>
          <input type="file" multiple onChange={handleFileUpload} />
          <ul className="mt-3 space-y-1">
            {files.map((f, i) => (
              <li key={i} className="flex justify-between border p-2 rounded">
                {f}
                <button
                  onClick={() => handleShare(f)}
                  className="text-green-600 hover:underline"
                >
                  Share
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference Library */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Reference Library</h3>
          <form onSubmit={handleAddLink} className="flex gap-2">
            <input
              type="url"
              name="url"
              placeholder="Add reference link..."
              className="flex-1 border rounded px-2 py-1"
            />
            <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
              Add
            </button>
          </form>
          <ul className="mt-3 space-y-1">
            {links.map((l, i) => (
              <li key={i} className="flex justify-between border p-2 rounded">
                <a href={l} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  {l}
                </a>
                <button
                  onClick={() => handleShare(l)}
                  className="text-green-600 hover:underline"
                >
                  Share
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Personal Notes */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Personal Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write down ideas, reminders, or lesson notes..."
            className="w-full border rounded p-2 min-h-[100px]"
          />
          <button
            onClick={() => handleShare(notes)}
            className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
          >
            Save & Share Notes
          </button>
        </div>

        {/* Shared Resources */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Shared Resources</h3>
          {shared.length === 0 ? (
            <p className="text-slate-500">No resources shared yet.</p>
          ) : (
            <ul className="space-y-1">
              {shared.map((s, i) => (
                <li key={i} className="border p-2 rounded">{s}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}