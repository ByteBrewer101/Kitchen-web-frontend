import { atom } from "recoil";



export const options = ["all", "side", "veg", "non-veg"];
export const OptionChooserState = atom({
  key: "selectedOptionState", 
  default: options[0], 
});
