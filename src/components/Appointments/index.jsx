import React from "react";
import { Calendar, Video, Clock } from "lucide-react";

const appointments = [
  {
    name: "John Smith",
    initial: "JS",
    timing: "9:00 AM - 9:30 AM",
    status: "confirmed",
    icon: <Calendar size={20} />,
  },
  {
    name: "Alice Johnson",
    initial: "AJ",
    timing: "10:00 AM - 10:30 AM",
    status: "pending",
    icon: <Video size={20} />,
  },
  {
    name: "Michael Lee",
    initial: "ML",
    timing: "11:00 AM - 11:30 AM",
    status: "confirmed",
    icon: <Calendar size={20} />,
  },
  {
    name: "Sara Gomez",
    initial: "SG",
    timing: "12:30 PM - 1:00 PM",
    status: "pending",
    icon: <Video size={20} />,
  },
  {
    name: "David Kim",
    initial: "DK",
    timing: "2:00 PM - 2:30 PM",
    status: "confirmed",
    icon: <Calendar size={20} />,
  },
  {
    name: "Yuvra Kim",
    initial: "YK",
    timing: "2:00 PM - 2:30 PM",
    status: "confirmed",
    icon: <Calendar size={20} />,
  },
];

function Appointments() {
  return (
    <div className="px-4 md:px-6 mx-2 md:mx-3 py-4 md:py-6 bg-white rounded-xl border border-gray-300 shadow-md">
      {/* Header */}
      <div className="font-bold text-2xl md:text-3xl text-black mb-2">
        Upcoming Appointments
      </div>
      <div className="text-gray-600 font-semibold text-sm md:text-base mb-4">
        You have {appointments.length} appointments scheduled for today
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between border-gray-300 border rounded-xl p-3"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              <div className="text-lg md:text-xl bg-primary text-black w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full flex-shrink-0">
                {appointment.initial}
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-lg md:text-xl">
                  {appointment.name}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={10} md={{ size: 12 }} />
                  <div className="text-sm md:text-lg">
                    {appointment.timing}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Status and Icon */}
            <div
              className={`flex items-center gap-2 mt-2 sm:mt-0 ${
                appointment.status === "confirmed"
                  ? "text-secondary"
                  : "text-[#5bb36e]"
              } font-medium sm:ml-2`}
            >
              <div className={`text-sm md:text-base text-black border-gray-300 border rounded-2xl px-2 bg-gray-50 whitespace-nowrap ${
                appointment.status === "pending"
                ? "bg-gray-300"
                : "bg-gray-50"
              }`}>
                {appointment.status}
              </div>
              <div className="border-gray-300 border rounded-md p-1.5 md:p-2 bg-gray-50 flex-shrink-0">
                {appointment.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;