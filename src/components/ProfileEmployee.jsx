import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";
import GalleryUpload from "../pages/GalleryUpload";
import inquirieSeever from "../store/services/inquirieSeever";

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
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 z-[200] w-64 bg-gradient-to-b from-gray-800 to-gray-700 text-white shadow-md h-full transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-600 bg-gray-800">
          <h2 className="text-2xl font-bold text-center">Employee Panel</h2>
        </div>
        <nav className="px-4 py-6 space-y-2 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 
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
            className="w-full text-left p-3 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 mt-4"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay on Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="min-h-screen w-full p-4 md:p-8 overflow-y-auto flex justify-center items-start">
        {activeSection === "profile" && (
          <div className="bg-white rounded-xl shadow-md w-full max-w-[90vw] sm:max-w-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Welcome, Employee 👋
            </h2>
            <p className="text-gray-600">
              This is your profile dashboard. You can update your details here.
            </p>
          </div>
        )}

        {activeSection === "tasks" && (
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-[90vw] sm:max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Your Assigned Tasks
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Task 1: Submit your daily report</li>
              <li>Task 2: Attend team standup meeting</li>
              <li>Task 3: Work on your assigned module</li>
            </ul>
          </div>
        )}

        {activeSection === "gallery" && (
          <div className="w-full max-w-[90vw] sm:max-w-4xl">
            <GalleryUpload />
          </div>
        )}

        {activeSection === "responsevi" && (
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-[90vw] sm:max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              📋 Contact Messages (Response VI)
            </h2>

            {contacts.length > 0 ? (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="border rounded-lg p-4 bg-gray-50 shadow-sm"
                  >
                    <h3 className="font-semibold text-blue-700">
                      {contact.name} ({contact.email})
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {contact.message}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No contact messages available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileEmployee;
