import React, { useState } from "react";
import {
  User,
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  CreditCard,
  Settings,
  ClipboardList,
  LogOut,
  Menu,
  X,
} from "lucide-react";

// Define the links data with icons as JSX
const sidebarLinks = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
  { name: "Patients", icon: <Users size={20} /> },
  { name: "Appointments", icon: <Calendar size={20} /> },
  { name: "Consultations", icon: <ClipboardList size={20} /> },
  { name: "Prescriptions", icon: <FileText size={20} /> },
  { name: "Messages", icon: <MessageSquare size={20} /> },
  { name: "Billing", icon: <CreditCard size={20} /> },
  { name: "Settings", icon: <Settings size={20} /> },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard"); // Default active link

  return (
    <>
      {/* Hamburger Button (Visible only on mobile) */}
      <button
        className={`md:hidden fixed top-4 right-4 z-50 p-2 rounded-md ${
          isOpen
            ? "bg-secondary text-white"
            : "bg-gray-200 text-gray-600 hover:bg-secondary hover:text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-primary rounded h-full w-64 p-4 flex flex-col justify-between shadow-md fixed md:static top-0 left-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="UpperSection">
          <div className="NameDiv flex flex-row items-center gap-3 text-left pb-3 -mx-4 border-b border-gray-300">
            <div className="ProfilePic rounded-full bg-white w-12 h-12 flex items-center justify-center mx-4">
              <User />
            </div>
            <div>
              <div className="Name font-semibold">Dr. Sarah Smith</div>
              <div className="Occupation text-gray-600">Cardiologist</div>
            </div>
          </div>
          <div className="LinksDiv mt-6 text-gray-600">
            {sidebarLinks.map((link) => (
              <div
                key={link.name}
                className={`flex items-center gap-3 mb-2 p-2 rounded cursor-pointer transition-all duration-300 ease-in-out ${
                  activeLink === link.name
                    ? "bg-secondary text-white shadow-md hover:text-white"
                    : "bg-transparent text-gray-600 hover:text-black hover:bg-blue-200"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.icon}
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="LogOutDiv border-t border-gray-300 pt-3 -mx-4">
          <div className="WhiteDiv bg-white flex flex-row gap-3 rounded-md p-3 mx-4 text-bold hover:bg-secondary hover:text-white transition-colors duration-300">
            <LogOut size={20} />
            <div>Log out</div>
          </div>
        </div>
      </div>

      {/* Overlay (Visible only when sidebar is open on mobile) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;