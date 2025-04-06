import React from "react";
import { Calendar, Video, FileText } from "lucide-react";

const patients = [
  {
    name: "John Smith",
    initial: "JS",
    age: 45,
    disease: "Hypertension",
    status: "returning",
    icon: <Calendar size={24} />,
    day: "Today",
  },
  {
    name: "Alice Johnson",
    initial: "AJ",
    age: 32,
    disease: "Diabetes",
    status: "critical",
    icon: <Video size={24} />,
    day: "Yesterday",
  },
  {
    name: "Michael Lee",
    initial: "ML",
    age: 60,
    disease: "Arthritis",
    status: "returning",
    icon: <Calendar size={24} />,
    day: "Today",
  },
  {
    name: "Sara Gomez",
    initial: "SG",
    age: 28,
    disease: "Asthma",
    status: "critical",
    icon: <Video size={24} />,
    day: "Yesterday",
  },
  {
    name: "David Kim",
    initial: "DK",
    age: 53,
    disease: "Heart Disease",
    status: "returning",
    icon: <Calendar size={24} />,
    day: "Today",
  },
  {
    name: "Yuvra Kim",
    initial: "YK",
    age: 39,
    disease: "Migraine",
    status: "returning",
    icon: <Calendar size={24} />,
    day: "Today",
  },
];

function Patients() {
  return (
    <div className="px-6 mx-3 py-6 bg-white rounded-xl border border-gray-300 shadow-md">
      <div className="font-bold text-3xl text-black">Recent Patients</div>
      <div className="text-gray-600 font-semibold my-2">
        Recently added or updated patient records
      </div>
      <div>
        {patients.map((patient, index) => (
          <div
            key={index}
            className="flex justify-between border-gray-300 border rounded-xl px-3 my-3 py-2"
          >
            <div className="flex flex-row items-center gap-3">
              <div className="text-xl bg-primary text-black w-10 h-10 flex items-center justify-center rounded-full">
                {patient.initial}
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-xl">{patient.name}</div>
                <div className="flex flex-row gap-1 items-center text-gray-500">
                  <div className="text-lg">
                    {patient.age} years • {patient.disease}
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <div
                    className={`text-sm font-medium ${
                      patient.status === "returning"
                        ? "text-black"
                        : "bg-red-500 text-white"
                    } bg-gray-300 rounded-xl w-fit px-2 pb-1`}
                  >
                    {patient.status}
                  </div>
                  <div className="text-gray-600">
                    {patient.day}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-secondary hover:text-secondarydark">
              <div className="border-gray-300 border rounded-md p-2 bg-gray-50 flex justify-center items-center h-fit">
                <FileText size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patients;
