/* eslint-disable react/prop-types */

export function FoodCard({ name, image, price }) {
  return (
    <div
      className="relative w-[393.44px]  h-96 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full text-white p-4">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p className="text-lg">
          <span className="text-yellow-500">$ </span>
          {price}
        </p>
        <button className="flex items-center justify-center">
          Order now{" "}
          <span className="flex items-center justify-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
