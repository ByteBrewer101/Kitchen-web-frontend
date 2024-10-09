import truck from "../assets/truck.png";
import womanphone from "../assets/womanphone.png";
import waiters from "../assets/waiters.png";

export function ServiceSection() {
  return (
    <div className="h-fit flex flex-col items-center w-full  space-y-10 px-4 lg:px-10">
      <h1 className="text-orange-500 text-[18px] font-bold">WHAT WE SERVE</h1>
      <h1 className="text-gray-800 font-extrabold text-3xl xl:text-5xl text-center max-w-lg">
        Your Favorite Food Delivery Partner
      </h1>


<div className="grid grid-cols-1 xl:grid-cols-3 justify-between w-full">
      {/* <div className="flex items-center flex-col xl:flex-row lg:justify-between w-full h-full space-y-10 md:space-y-0 md:space-x-10"> */}
        <div className="flex flex-col justify-end space-y-4 p-4 text-center items-center">
          <img
            src={womanphone}
            alt="Woman using phone"
            className="w-36 md:w-44"
          />
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">
            Easy To Order
          </h1>
          <h2 className="text-base md:text-lg w-full md:w-[314px]  text-gray-800">
            You only need a few steps in ordering food
          </h2>
        </div>
        <div className="flex flex-col justify-end space-y-4 p-4 text-center items-center">
          <img src={truck} alt="Delivery truck" className="w-36 md:w-44" />
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">
            Fastest Delivery
          </h1>
          <h2 className="text-base md:text-lg w-full md:w-[314px]  text-gray-800">
            Delivery that is always ontime even faster
          </h2>
        </div>
        <div className="flex flex-col justify-end space-y-4 p-4 text-center items-center">
          <img src={waiters} alt="Waiters serving" className="w-36 md:w-44" />
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">
            Best Quality
          </h1>
          <h2 className="text-base md:text-lg w-full md:w-[314px]  text-gray-800">
            Not only fast for us, quality is also number one
          </h2>
        </div>
      </div>
    </div>
  );
}
