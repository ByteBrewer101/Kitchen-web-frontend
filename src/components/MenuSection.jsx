import { FoodCard } from "./FoodCard";
import paneer from "../assets/paneer.png";

const cardData = [
  {
    image: paneer,
    name: "Butter Paneer",
    price: "10",
  },
  {
    image: paneer,
    name: "Paneer Tikka",
    price: "11",
  },
  {
    image: paneer,
    name: "Shahi Paneer",
    price: "14",
  },
  {
    image: paneer,
    name: "Palak Paneer",
    price: "13",
  },
 
];

export function MenuSection() {
  return (
    <div className="h-fit w-fit flex flex-col space-y-6 p-4 md:p-6 lg:p-8">
      <h1 className="text-orange-500 text-[16px] md:text-[18px] font-semibold text-center md:text-left">
        OUR MENU
      </h1>
      <h1 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center md:text-left md:w-3/4 lg:w-1/2">
        Menu That Always Makes You Fall In Love
      </h1>

      <div className="flex flex-col xl:flex-row xl:justify-between items-center space-y-4 xl:space-y-0">

        <div className="flex flex-wrap justify-center items-center space-x-2 md:space-x-4">
          <button className="bg-orange-500 min-w-[90px] md:min-w-[130px] text-white text-sm md:text-base font-semibold p-2 md:p-3 rounded-full mb-2 md:mb-0">
            All
          </button>
          <button className="border min-w-[90px] md:min-w-[130px] text-gray-800 text-sm md:text-base font-semibold p-2 md:p-3 rounded-full mb-2 md:mb-0">
            Sides
          </button>
          <button className="border min-w-[90px] md:min-w-[130px] text-gray-800 text-sm md:text-base font-semibold p-2 md:p-3 rounded-full mb-2 md:mb-0">
            Veg Options
          </button>
          <button className="border min-w-[90px] md:min-w-[130px] text-gray-800 text-sm md:text-base font-semibold p-2 md:p-3 rounded-full mb-2 md:mb-0">
            Non Veg Options
          </button>
        </div>

        <div className="border w-full md:w-1/2 lg:w-1/3 rounded-full flex items-center p-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>


          <input
            type="text"
            className="w-full focus:outline-none px-2 text-[14px] md:text-[16px]"
            placeholder="Search food"
          />
          <div className="bg-orange-300 p-2 rounded-full flex items-center justify-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Food Cards Section */}
      <div className="grid justify-around items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2  xl:grid-cols-4 gap-4">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-center xl:justify-between"
          >
            <FoodCard image={item.image} name={item.name} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
