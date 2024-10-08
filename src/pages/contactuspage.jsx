import { Footer } from "../components/Footer";
import { MenuHeader } from "../components/MenuHeader";
import { TopBar } from "../components/TopBar";
import map from "../assets/contactusmap.png"


export function ContactUsPage(){
    return (
      <div>
        <TopBar />
        <MenuHeader
          title1={"Contact"}
          title2={"Us"}
          subtitle={
            "We consider all the drivers of change gives you the components you need to change to create a truly happens."
          }
        />
        <div className="flex flex-col space-y-10 mt-10">
          <div
            className="h-[700px] w-full flex items-center justify-start bg-cover bg-center p-40 "
            style={{ backgroundImage: `url(${map})` }}
          >
            <div className="flex flex-col   space-y-4 bg-orange-50 rounded-xl p-10">
              <h1 className="text-4xl font-bold text-gray-800">
                Find food lounge
              </h1>
              <h1 className="text-xl w-1/2">
                Plan upon yet way get cold spot its week. Almost do am or limits
                hearts. Resolve parties but why she shewing.
              </h1>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 stroke-white fill-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-md">Hotline</h1>
                    <h1 className=" font-semibold text-md">+91 236 258 8250</h1>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6  stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-md">Our Location</h1>
                    <h1 className="font-semibold text-md w-1/2">
                      Mausis Delicacies B1234 Maple Street, Suite 201 Downtown
                      District, Near Stanley Park Vancouver, BC V6G 1Z4 Canada
                    </h1>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 rounded-full p-4">
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-md">Our Mail</h1>
                    <h1 className="text-md font-semibold">contact@mausisdelicacies.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-40">
            <div className="flex flex-col items-center justify-center w-full bg-orange-100 p-10 space-y-6 rounded-xl">
              <h1 className="text-orange-500 text-3xl font-semibold">
                Contact Us
              </h1>
              <h1 className="text-black text-3xl font-semibold">
                Leave Us A Message
              </h1>
              <input
                type="text"
                className="w-full p-6 rounded-xl border border-2 border-gray-800 focus:outline-none "
                placeholder="Name"
                name=""
                id=""
              />
              <input
                type="text"
                className="w-full p-6 rounded-xl border border-2 border-gray-800 focus:outline-none "
                placeholder="Email Address"
                name=""
                id=""
              />

              <textarea
                name=""
                className="w-full p-6 rounded-xl border border-2 border-gray-800 focus:outline-none "
                placeholder="Message"
                rows={10}
                id=""
              ></textarea>

              <button className="text-white bg-orange-500 text-xl p-4 rounded-full w-fit px-20">
                Send
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}