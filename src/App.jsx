import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardCard from "./components/DashboardCard";
import {
  Users,
  TrendingUp,
  Calendar,
  Clock,
  TrendingDown,
  DollarSign,
} from "lucide-react";
import Appointments from "./components/Appointments";
import Patients from "./components/Patients";
import Navbar from "./components/Navbar";

function App() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 h-auto md:h-full flex-shrink-0 fixed top-0 left-0 z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full min-h-screen overflow-y-auto px-4 md:px-6 lg:px-8 md:ml-64">
        {/* Header */}
        <div className="py-4 pl-3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4">
            <div className="color-container text-2xl md:text-3xl font-bold p-1 w-fit bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Dashboard
            </div>
            <div className="todays-date text-sm md:text-base text-gray-600">
              {formattedDate}
            </div>
          </div>
          <div>
            <Navbar />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="py-4 pl-3">
          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:flex lg:flex-row gap-3 md:gap-4 lg:gap-3">
            <DashboardCard
              text="Total Patients"
              icon={<Users size={24} />}
              iconColor="#00a8e6"
              value={1248}
              description="+12% from last month"
              descriptionColor="#5bb36e"
              descriptionIcon={<TrendingUp size={24} />}
            />
            <DashboardCard
              text="Today's Appointments"
              icon={<Calendar size={24} />}
              iconColor="#5bb36e"
              value={12}
              description="3 pending confirmations"
            />
            <DashboardCard
              text="Average Consultation"
              icon={<Clock size={24} />}
              iconColor="#00a8e6"
              value="24m" // Added 'm' after 24
              description="-2m from last week"
              descriptionColor="#f26a6a"
              descriptionIcon={<TrendingDown size={24} />}
              descriptionIconRotation={0}
              descriptionIconMirror={true}
            />
            <DashboardCard
              text="Monthly Revenue"
              icon={<DollarSign size={24} />}
              iconColor="#5bb36e"
              value="$24,563" // Added '$' before 24,563
              description="+5.2% from last month"
              descriptionColor="#5bb36e"
              descriptionIcon={<TrendingUp size={24} />}
            />
          </div>
        </div>

        {/* Appointments and Patients */}
        <div className="py-4">
          <div className="grid grid-cols-1 lg:grid-cols-[55%,45%] gap-3 md:gap-4">
            <div className="w-full">
              <Appointments />
            </div>
            <div className="w-full">
              <Patients />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;