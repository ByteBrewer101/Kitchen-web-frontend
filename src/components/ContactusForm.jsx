
import map from "../assets/Rectangle.png"

export function ContactUsForm() {
  return (
    <div className="bg-orange-100 flex flex-col p-10 rounded-xl">
      <div className="flex items-center justify-center">
        <h1 className="text-orange-500 text-xl font-semibold">CONTACT US</h1>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col space-y-4 w-1/2">
          <h1 className="font-bold text-xl">Leave Us A Message</h1>
          <input
            type="text"
            className="w-full placeholder-gray-500 p-4 rounded-xl border border-black bg-transparent focus:outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full placeholder-gray-500 p-4 rounded-xl border border-black bg-transparent focus:outline-none"
            placeholder="Email Address"
          />
          <textarea
            rows={10}
            className="w-full placeholder-gray-500 p-4 rounded-xl border border-black bg-transparent focus:outline-none"
            placeholder="Your Message"
          ></textarea>
          <button className="text-white font-bold p-4 w-full bg-orange-500 rounded-full">
            Send
          </button>
        </div>

        <div className="flex flex-col justify-center items-start space-y-4 w-1/2 px-8">
          <h1 className="text-xl font-semibold">
            Mausis Delicacies B1234 Maple Street, Suite 201 Downtown District,
            Near Stanley Park Vancouver, BC V6G 1Z4 Canada
          </h1>
          <h1 className="text-lg font-semibold">+91 236 258 8250</h1>
          <h1 className="text-lg font-semibold">
            contact@mausisdelicacies.com
          </h1>
          <div>
            <img src={map} alt="Location map" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
