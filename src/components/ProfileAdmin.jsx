import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import authServices from "../store/services/authServices";
import { toast } from "react-toastify";
import AntiProfile from "./profile/AntiProfile";
import { Menu, X } from "lucide-react";

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
    <div className="flex flex-col md:flex-row h-[calc(100vh-215px)] min-h-[500px]  bg-gray-100 font-sans overflow-hidden">
    {/* Sidebar */}
    <div className={`fixed md:static z-30 inset-y-0 left-0 w-64 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 bg-gray-800`}>
      <div className="flex items-center justify-center h-16 bg-gray-900 shadow">
        <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-10 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-2 rounded-lg text-white transition duration-200 ${activeSection === item.id ? "bg-blue-600" : "hover:bg-gray-700"}`}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={logout}
          className="w-full text-left px-4 py-2 mt-6 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200"
        >
          Logout
        </button>
      </nav>
    </div>
  
    {/* Overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}
  
    {/* Topbar for mobile */}
    <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow z-10">
      <button
        className="text-gray-500 focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <h2 className="text-lg font-semibold text-gray-800">Admin Dashboard</h2>
    </header>
  
    {/* Main content */}
    <div className="flex-1 overflow-y-auto p-4 md:p-6 mt-16 md:mt-0">
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
              className={`bg-blue-600 text-white px-6 py-2 rounded-lg w-full transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
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
