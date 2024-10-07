
import truck from "../assets/truck.png"

import womanphone from "../assets/womanphone.png";

import waiters from "../assets/waiters.png";



export function ServiceSection(){
    return (
      <div className="h-fit flex flex-col items-center mt-[119px] space-y-10 ">
        <h1 className="text-orange-500 text-[18px] font-bold">WHAT WE SERVE</h1>
        <h1 className="text-gray-800 font-extrabold text-5xl text-center w-[532px]">
          Your Favorite Food Delivery Partner
        </h1>

        <div className="flex justify-between w-full h-full px-10 ">
          <div className="flex flex-col justify-end space-y-4 p-2 text-center">
            <img src={womanphone} alt="" />
            <h1 className="text-3xl font-bold mt-2 text-gray-800">
              Easy To Order
            </h1>
            <h2 className="text-lg text-center w-[314px] font-semibold text-gray-800 ">
              You only need a few steps in ordering food
            </h2>
          </div>
          <div className="flex flex-col justify-end space-y-4 p-2 text-center">
            <img src={truck} alt="" />
            <h1 className="text-3xl font-bold mt-2 text-gray-800">
              Fastest Delivery
            </h1>
            <h2 className="text-lg text-center w-[314px] font-semibold text-gray-800 ">
              Delivery that is always ontime even faster
            </h2>
          </div>{" "}
          <div className="flex flex-col justify-end space-y-4 p-2 text-center">
            <img src={waiters} alt="" />
            <h1 className="text-3xl font-bold mt-2 text-gray-800">
              Best Quality
            </h1>
            <h2 className="text-lg text-center w-[314px] font-semibold text-gray-800 ">
              Not only fast for us quality is also number one
            </h2>
          </div>
        </div>
      </div>
    );
}