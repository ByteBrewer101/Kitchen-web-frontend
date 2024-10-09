import { useState } from "react";

/* eslint-disable react/prop-types */

export function OptionChooser({ items }) {
  const [selectedOption, setSelectedOption] = useState("All");

  const options = ["All", "Sides", "Veg", "Non-Veg"];

  return (
    <div className="flex flex-col space-y-2  md:flex-row justify-center items-center md:space-x-2 p-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelectedOption(option)}
          className={`group p-2 rounded-full min-w-[160px] transition duration-300 ${
            selectedOption === option
              ? "bg-orange-500 text-white"
              : "border-2 border-gray-500 text-gray-800"
          }`}
        >
          {option}
        </button>
      ))}
      
    </div>
  );
}
