import { useState } from "react";

export function OptionChooser() {
  const [selectedOption, setSelectedOption] = useState("All");

  const options = ["All", "Sides", "Veg", "Non-Veg"];

  return (
    <div className="flex justify-center items-center space-x-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelectedOption(option)}
          className={`group p-4 font-semibold rounded-full min-w-[160px] ${
            selectedOption === option
              ? "bg-orange-500 text-white"
              : "border-2 border-gray-800 text-gray-800"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
