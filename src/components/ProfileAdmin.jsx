import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import authServices from "../store/services/authServices";
import { toast } from "react-toastify";
import AntiProfile from "./profile/AntiProfile";
import { Menu, X } from "lucide-react"; // Optional icons

const ProfileAdmin = () => {
  const [employee, setEmployee] = useState({ name: "", email: "" });
  const [activeSection, setActiveSection] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const logout = () => {
    localStorage.clear();
    dispatch(setUser(null));
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "create", label: "Create Employee" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Mobile Nav Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-gray-800 text-white rounded-full">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 z-[200] w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow-md h-full transform transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-600 bg-gray-900">
          <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        </div>
        <nav className="px-4 py-6 space-y-2 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false); // auto-close on mobile
              }}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 
                ${activeSection === item.id ? "bg-blue-600 font-semibold shadow-inner" : "hover:bg-gray-600"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={logout}
            className="w-full text-left p-3 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 mt-4"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8 overflow-y-auto">
        {activeSection === "dashboard" && <AntiProfile />}

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
      </div>
    </div>
  );
};

export default ProfileAdmin;
