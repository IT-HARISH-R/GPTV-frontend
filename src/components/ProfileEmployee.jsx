import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import { toast } from "react-toastify";
import GalleryUpload from "../pages/GalleryUpload";
import inquirieSeever from "../store/services/inquirieSeever";
import { Menu, X } from "lucide-react";

const ProfileEmployee = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(setUser(null));
    toast.success("Logged out successfully");
  };

  const fetchContacts = async () => {
    try {
      const res = await inquirieSeever.getAll();
      setContacts(res.data);
    } catch (err) {
      toast.error("Failed to fetch contact messages");
    }
  };

  useEffect(() => {
    if (activeSection === "responsevi") {
      fetchContacts();
    }
  }, [activeSection]);

  const menuItems = [
    { id: "profile", label: "My Profile" },
    { id: "tasks", label: "My Tasks" },
    { id: "gallery", label: "Gallery Upload" },
    { id: "responsevi", label: "Response VI" },
  ];

  return (
    <div className="flex h-[calc(100vh-215px)] min-h-[500px] overflow-hidden w-full bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed md:static z-30 inset-y-0 left-0 w-64 transition duration-300 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 bg-gray-800`}>
        <div className="flex items-center justify-center h-16 bg-gray-900 shadow">
          <h1 className="text-white text-2xl font-bold">Employee Panel</h1>
        </div>
        <nav className="mt-10 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg text-white transition duration-200 ${
                activeSection === item.id ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
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

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow md:hidden">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === "profile" && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome, Employee 👋</h2>
              <p className="text-gray-600">This is your profile dashboard. You can update your details here.</p>
            </div>
          )}

          {activeSection === "tasks" && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Assigned Tasks</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Task 1: Submit your daily report</li>
                <li>Task 2: Attend team standup meeting</li>
                <li>Task 3: Work on your assigned module</li>
              </ul>
            </div>
          )}

          {activeSection === "gallery" && (
            <div className="bg-white rounded-xl shadow p-6">
              <GalleryUpload />
            </div>
          )}

          {activeSection === "responsevi" && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">📋 Contact Messages</h2>
              {contacts.length > 0 ? (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact._id} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                      <h3 className="font-semibold text-blue-700">
                        {contact.name} ({contact.email})
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{contact.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No contact messages available.</p>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProfileEmployee;
