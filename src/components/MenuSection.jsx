import { FoodCard } from "./FoodCard";
import paneer from "../assets/paneer.png"

const cardData = [
  {
    image: paneer,
    name: "Butter Paneer",
    price: " 10",
  },
  {
    image: paneer,
    name: "Paneer Tikka",
    price: " 11",
  },
  {
    image: paneer,
    name: "Shahi Paneer",
    price: " 14",
  },
  {
    image: paneer,
    name: "Palak Paneer",
    price: " 13",
  },
  {
    image: paneer,
    name: "Paneer Bhurji",
    price: " 9",
  },
];







export function MenuSection() {
  return (
    <div className="h-fit flex flex-col space-y-10">
      <h1 className="text-orange-500 text-[18px] font-semibold">OUR MENU</h1>
      <h1 className=" w-1/2 text-gray-800 text-6xl font-bold">
        Menu That Always Makes You Fall In Love
      </h1>
      <div className="flex justify-between">
        <div className="space-x-20">
          <button className="bg-orange-500 min-w-[141px]  text-white text-[18px] font-semibold p-4 rounded-full px-6 ">
            All
          </button>
          <button className="border border-1 min-w-[141px]  text-gray-800 text-[18px] font-semibold p-4 rounded-full px-6 ">
            Sides
          </button>
          <button className="border border-1 min-w-[141px] text-gray-800 text-[18px] font-semibold p-4 rounded-full px-6 ">
            Veg Options
          </button>
          <button className="border border-1 min-w-[141px] text-gray-800 text-[18px] font-semibold p-4 rounded-full px-6 ">
            Non Veg Options
          </button>
        </div>

        <div className="border border-2 w-1/3 rounded-full flex justify-between items-center px-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="w-full px-2">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Search food"
              name=""
              id=""
            />
          </div>
          <div className="bg-orange-300 p-2 rounded-full flex items-center justify-center">
            {" "}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-white"
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

      <div className="grid grid-cols-5 gap-6">
        {cardData.map((i, k) => {
          return (
            <FoodCard key={k} image={i.image} name={i.name} price={i.price} />
          );
        })}
      </div>
    </div>
  );
}
