import image from "../assets/Heroimage.png"


export function Herosection() {
  return (
    <div className="flex justify-between h-fit ">
      <div className="w-1/2 flex flex-col justify-between pt-40">
        <h1 className="px-6 p-4 text-[15px] w-fit rounded-full text-orange-500 bg-opacity-20 bg-orange-500">
          More Than Faster
        </h1>
        <h1 className="text-8xl font-extrabold text-left text-gray-800">
          Be The Fastest In Delivering Your{" "}
          <span className="text-orange-500">Food</span>
        </h1>
        <h1 className="text-gray-600 text-left font-semibold text-[18px] w-[470px]">
          Our job is to filling your tummy with delicious food and with fast and
          free delivery
        </h1>
        <div className="flex space-x-20">
          <button className="bg-orange-500 p-[20px] rounded-full text-white font-semibold">
            Get Started
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-[20px] rounded-full bg-orange-50  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.235 2.19205C6.00672 2.06373 5.74882 1.99741 5.48695 1.99969C5.22508 2.00197 4.96837 2.07277 4.74236 2.20504C4.51634 2.33731 4.32889 2.52645 4.19865 2.75365C4.06842 2.98084 3.99993 3.23817 4 3.50005V12.5001C4.0001 12.7618 4.06872 13.019 4.19903 13.2461C4.32934 13.4732 4.5168 13.6622 4.74279 13.7943C4.96878 13.9265 5.22542 13.9972 5.4872 13.9994C5.74898 14.0016 6.00679 13.9353 6.235 13.8071L14.235 9.30705C14.4668 9.17651 14.6597 8.98667 14.794 8.757C14.9282 8.52733 14.999 8.26608 14.999 8.00005C14.999 7.73402 14.9282 7.47277 14.794 7.2431C14.6597 7.01343 14.4668 6.82359 14.235 6.69305L6.235 2.19305V2.19205Z"
                  fill="#F2C94C"
                />
              </svg>
            </button>
            <h1 className="text-sm font-semibold">Watch Video</h1>
          </div>
        </div>
      </div>
      <div className=" h-full">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
