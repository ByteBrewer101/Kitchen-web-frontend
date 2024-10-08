import { CartContents } from "../components/CartContents";
import { ContactUsForm } from "../components/ContactusForm";
import { Footer } from "../components/Footer";
import { MenuHeader } from "../components/MenuHeader";
import { TopBar } from "../components/TopBar";

export function CartPage() {
  return (
    <div>
      <TopBar />
      <MenuHeader
        title1={"Your"}
        title2={"Shopping Cart"}
        subtitle={
          "We consider all the drivers of change gives you the components you need to change to create a truly happens."
        }
      />
      <div className="flex flex-col space-y-10 mx-40 py-6 ">
        <CartContents />
        <div className="w-full flex justify-center items-center">
          <button className="bg-orange-500 text-white font-semibold text-lg p-4 px-20 rounded-full">
            Continue Shopping
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 flex flex-col space-y-4">
            <h1 className="flex space-x-2">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Add note
            </h1>
            <textarea
              className="border border-2 w-1/2 focus:outline-none p-4 "
              name=""
              rows={8}
              placeholder="Add note"
              id=""
            ></textarea>
          </div>
          <div className="w-1/4 flex flex-col justify-center px-6 space-y-2">
            <h1 className="text-lg font-semibold text-gray-800 text-end">
              Subtotal $970.00 USD
            </h1>
            <h1 className="text-lg font-semibold text-gray-800 text-end">
              Taxes and shipping calculated at checkout
            </h1>
            <button className=" text-lg font-semibold text-white bg-orange-500 p-4 px-6 w-full rounded-full">
              Checkout
            </button>
            <div className="flex border border-2 rounded-full p-2 justify-between">
              <input type="text" className="w-full p-4 focus:outline-none" placeholder="Discount Code" name="" id="" />
              <button className="bg-orange-500 text-white text-lg font-semibold p-4 rounded-full">Apply</button>
              
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
      <Footer />
    </div>
  );
}
