import React, { useState } from "react";

function Navbar() {
  const [selected, setSelected] = useState("Overview");

  const navItems = ["Overview", "Analytics", "Reports"];

  return (
    <div className="flex flex-row md:items-start md:justify-start justify-center items-center gap-3 pt-3 text-md">
      {navItems.map((item) => (
        <div
          key={item}
          className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-400 ${
            selected === item
              ? "bg-gray-100 text-black border border-gray-300 shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setSelected(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Navbar;