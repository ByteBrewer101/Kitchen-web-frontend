import { InitialTopBar } from "../components/initialTopBar";

import rightimage from "../assets/rightimage.png";
export function SigninPage() {
  return (
    <div className="h-screen overflow-hidden">
      <InitialTopBar />
      <div className="flex flex-col md:flex-row h-full ">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center bg-gray-100 p-8 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <h2 className="text-2xl mb-6">to experience the beauty of food</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus.
          </p>
          <button className="w-1/2 bg-white border border-2  text-black py-2 px-4 rounded-full mb-4">
            Continue with Google
          </button>
          <button className="w-1/2 bg-white border border-2  text-black py-2 px-4 rounded-full mb-4">
            Continue with Facebook
          </button>
          <button className="w-1/2 bg-white border border-2  text-black py-2 px-4 rounded-full mb-4">
            Continue with Apple
          </button>
          <button className="w-1/2 bg-orange-500 border border-2  text-white py-2 px-4 rounded-full">
            Sign up with email or phone number
          </button>
          <p className="text-gray-500 mt-4">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including cookie use.
          </p>
        </div>

        {/* Right Section */}
        <div
          className="bg-cover bg-center md:w-1/2"
          style={{ backgroundImage: `url(${rightimage})` }}
        >
          {/* Image content */}
        </div>
      </div>
      
    </div>
  );
}
