import chef from "../assets/reviewsection.png";

export function ReviewSection() {
  return (
    <div className="h-fit flex flex-col w-full lg:flex-row lg:justify-around items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 p-4">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img src={chef} alt="Chef" className="w-full max-w-lg lg:max-w-md" />
      </div>
      <div className="flex flex-col justify-center space-y-4 lg:w-2/3 text-center lg:text-left">
        <h1 className="text-orange-500 font-semibold">WHAT THEY SAY</h1>
        <h1 className="text-gray-800 text-3xl lg:text-4xl mb-4 font-extrabold">
          What Our Customers Say About Us
        </h1>
        <p className="text-gray-800 lg:w-[400px] mx-auto lg:mx-0  text-lg">
          “Mausis Delicacies is the best. Besides the many and delicious meals,
          the service is also very good, especially in the very fast delivery. I
          highly recommend Mausis Delicacies to you”.
        </p>
        <div className="flex items-start space-x-2 shadow-xl w-fit mx-auto lg:mx-0 p-2 pr-10 rounded-xl">
          <div className="bg-orange-500 text-white rounded-full h-10 flex justify-center items-center w-10">
            T
          </div>
          <div>
            <h1 className="text-gray-800 font-semibold">Theresa Jordan</h1>
            <p className="text-gray-500 text-sm">Food Enthusiast</p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-1">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < 4 ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-6 w-6 stroke-yellow-500 ${
                  index < 4 ? "fill-yellow-500" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
          <h1 className="font-semibold">4.8</h1>
        </div>
      </div>
    </div>
  );
}
