import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import QuotesUpload from "./profile/QuotesUpload";
import authServices from "../store/services/authServices";
import { toast } from "react-toastify";
import AntiRagging from "./profile/AntiRagging";

const ProfileAdmin = () => {
  const [employee, setEmployee] = useState({ name: "", email: "" });
  const [complaints, setComplaints] = useState([]);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [loading, setLoading] = useState(false); // 🔄 loading state
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authServices.createEmployee(employee);
      toast.success(res.data.message);
      setEmployee({ name: "", email: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create employee");
    } finally {
      setLoading(false);
    }
  };

  // const [complaints, setComplaints] = useState([]);

const handleDeleteComplaint = (id) => {
  
  const updated = complaints.filter((c) => c.id !== id);
  setComplaints(updated);
};


  // useEffect(() => {
  //   const fakeComplaints = [
  //     { id: 1, text: "Senior forced us to buy snacks.", date: "2025-04-01" },
  //     { id: 2, text: "Verbal abuse near hostel.", date: "2025-04-03" },
  //   ];
  //   setComplaints(fakeComplaints);
  // }, []);

  const logout = () => {
    localStorage.clear();
    dispatch(setUser(null));
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "create", label: "Create Employee" },
    // { id: "rankers", label: "20 Rankers" },
    // { id: "god", label: "God Quotes" },
  ];

  
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 space-y-6 shadow-md">
        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left p-3 rounded-lg transition duration-200 
                ${activeSection === item.id
                  ? "bg-blue-600 font-semibold shadow-inner"
                  : "hover:bg-gray-600"
                }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={logout}
            className="w-full text-left p-3 rounded-lg bg-red-600 hover:bg-red-700 mt-6 transition duration-200"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeSection === "dashboard" && (
          <>
            <AntiRagging
              complaints={complaints}
              handleDelete={handleDeleteComplaint}
            />
            {/* <h1 className="text-3xl font-bold text-blue-800 mb-6">Anti-Ragging Complaints</h1>
            <div className="space-y-4">
              {complaints.length === 0 ? (
                <p className="text-gray-600">No complaints found.</p>
              ) : (
                complaints.map((c) => (
                  <div key={c.id} className="border-l-4 border-red-500 bg-red-50 p-4 shadow rounded">
                    <p className="text-gray-800 font-medium">{c.text}</p>
                    <p className="text-sm text-gray-500 mt-1">{c.date}</p>
                  </div>
                ))
              )}
            </div> */}
          </>
        )}

        {activeSection === "create" && (
          <div className="bg-white shadow-lg p-6 rounded-xl max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Create Employee ID</h2>
            <form onSubmit={handleCreateEmployee} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={employee.email}
                onChange={handleInput}
                className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={employee.name}
                onChange={handleInput}
                className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-600 text-white px-6 py-2 rounded-lg w-full transition duration-200 
                  ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
              >
                {loading ? "Creating..." : "Create Employee"}
              </button>
            </form>
          </div>
        )}

        {/* {activeSection === "rankers" && (
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Top 20 Rank Holders</h2>
            <ul className="list-decimal pl-6 text-gray-700 space-y-1">
              {[...Array(20)].map((_, idx) => (
                <li key={idx}>Student {idx + 1} - Dept of XYZ</li>
              ))}
            </ul>
          </div>
        )} */}

        {/* {activeSection === "god" && (
          <>
            <QuotesUpload />
            <div className="bg-white p-6 mt-6 shadow-lg rounded-xl">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Motivational Quotes</h2>
              <div className="space-y-3 text-gray-700 italic">
                <p>“Have faith in God and yourself — success will follow.”</p>
                <p>“Let your work be your worship.”</p>
              </div>
            </div>
          </>
        )} */}
      </div>
    </div>
  );
};

export default ProfileAdmin;
