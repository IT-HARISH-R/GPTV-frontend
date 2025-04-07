// src/components/ComplaintList.jsx
import React from "react";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import complainSeever from "../../store/services/complainSeever";
import { addComplaint } from "../../store/features/complaintSlice";

const AntiRagging = ({ complaints, handleDelete }) => {

  const complaint = useSelector((state) => state.complaints.complaint)
  const dispatch = useDispatch()
  console.log(";;;;;;;;;;", complaint)

  const fetchProfile = async () => {
    console.log('summa', complaint)
    const res = await complainSeever.getComplaints()
    console.log(res)
    dispatch(addComplaint(res.data))
    console.log("res")
  }


  !complaint && (
    fetchProfile()
  )

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Anti-Ragging Complaints</h1>
      <div className="space-y-4">
        {complaint.length === 0 ? (
          <p className="text-gray-600">No complaints found.</p>
        ) : (
          complaint.map((c) => (
            <div
              key={c.id}
              className="border-l-4 border-red-500 bg-red-50 p-4 shadow rounded relative"
            >
              <p className="text-gray-800 font-medium">{c.text}</p>
              <p className="text-sm text-gray-500 mt-1">{c.date}</p>
              <button
                onClick={() => handleDelete(c.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AntiRagging;
