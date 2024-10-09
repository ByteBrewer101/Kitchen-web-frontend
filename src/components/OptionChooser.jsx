
import { useRecoilValue, useSetRecoilState } from "recoil";
import { OptionChooserState, options } from "../store/states";

/* eslint-disable react/prop-types */

export function OptionChooser() {

  const selectedOption = useRecoilValue(OptionChooserState)
  const setSelectedOption = useSetRecoilState(OptionChooserState)

 

  
  return (
    <div className="flex flex-col space-y-2 md:space-y-0  md:flex-row justify-center items-center md:space-x-2 p-2">
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
