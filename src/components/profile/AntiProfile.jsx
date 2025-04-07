import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import complainSeever from "../../store/services/complainSeever";
import { addComplaint } from "../../store/features/complaintSlice";

const AntiProfile = () => {
  const complaints = useSelector((state) => state.complaints.complaint);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Fetch all complaints
  const fetchComplaints = async () => {
    try {
      const res = await complainSeever.getComplaints();
      dispatch(addComplaint(res.data));
    } catch (error) {
      console.error("Failed to fetch complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, [dispatch]);

  // Delete a complaint by ID
  const handleDelete = async (id) => {
    try {
      const res = await complainSeever.deletebyid(id);
      if (res.data.status) {
        fetchComplaints(); // ✅ Call it here
      }
    } catch (error) {
      console.error("Failed to delete complaint:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Anti-Ragging Complaints</h1>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Loading complaints...</p>
      ) : complaints?.length === 0 ? (
        <p className="text-gray-600 italic">No complaints found.</p>
      ) : (
        <div className="space-y-4">
          {complaints.map((c) => (
            <div
              key={c._id}
              className="border-l-4 border-red-500 bg-red-50 p-4 shadow-md rounded-lg relative hover:shadow-lg transition duration-200"
            >
              <p className="text-gray-800 font-medium mb-1">
                {c.incident || c.text}
              </p>
              <p className="text-sm text-gray-500">
                Department: <span className="font-medium">{c.department}</span>
              </p>
              <p className="text-sm text-gray-400">
                {new Date(c.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(c._id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AntiProfile;
