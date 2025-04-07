import React, { useState } from "react";

const AntiRagging = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    complaint: "",
  });

  const [complaints, setComplaints] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComplaint = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString(),
    };

    setComplaints((prev) => [newComplaint, ...prev]);
    setFormData({ name: "", department: "", complaint: "" });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Anti-Ragging Complaint Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <textarea
            name="complaint"
            placeholder="Describe your complaint"
            value={formData.complaint}
            onChange={handleChange}
            className="w-full p-3 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 w-full transition duration-200"
          >
            Submit Complaint
          </button>
        </form>
      </div>

      {/* Complaints Display */}
      {complaints.length > 0 && (
        <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Submitted Complaints</h3>
          <div className="space-y-4">
            {complaints.map((c) => (
              <div key={c.id} className="border-l-4 border-red-600 bg-red-50 p-4 rounded">
                <p className="text-gray-700 font-medium">{c.name} ({c.department})</p>
                <p className="text-gray-800 mt-1">{c.complaint}</p>
                <p className="text-sm text-gray-500 mt-1">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AntiRagging;
