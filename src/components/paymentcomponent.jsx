

export const CheckoutComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          {/* Contact Information */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">Contact Information</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Delivery Address */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">Delivery Address</h2>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Tip Input */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">Tip</h2>
            <input
              type="number"
              placeholder="Tip Amount"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {/* Save Information Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Save this information for next time</span>
            </label>
          </div>

          {/* Payment Section */}
          <form>
            <fieldset>
              <legend className="text-xl font-bold">Payment</legend>
              {/* Card Details Inputs */}
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              <input
                type="text"
                placeholder="Expiry Date"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className=" w-full rounded-full bg-orange-500 text-white font-bold py-2 px-4 mt-4"
              >
                Pay now
              </button>
            </fieldset>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-gray-100">
          {/* Order Summary Section */}
          <div>
            <h3 className="text-xl font-bold">Your Order</h3>
            {/* List of Items with prices */}
            <div className="flex justify-between mt-2">
              <span>Beans Ki Sabji</span>
              <span>$40.99</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Arbi Ki Sabji</span>
              <span>$40.99</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Butter Chicken</span>
              <span>$40.99</span>
            </div>

            {/* Total Price Calculation Display */}
            <div className="flex justify-between mt-4 font-bold">
              <span>Total</span>
              <span>$122.97</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

