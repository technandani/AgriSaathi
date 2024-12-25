import React from "react";

const AlertRegistration = () => {
  return (
    <>
       <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-green-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>
          <p className="mb-6 text-center text-sm">
            Register and receive early warnings of lightning in your area. You can also register for your friends and family.
          </p>
          <form>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full p-2 mb-4 bg-green-700 rounded border-none text-white"
            />
            <input
              type="text"
              placeholder="Enter your mobile no..."
              className="w-full p-2 mb-4 bg-green-700 rounded border-none text-white"
            />
            <input
              type="text"
              placeholder="Enter your pincode..."
              className="w-full p-2 mb-4 bg-green-700 rounded border-none text-white"
            />
            <input
              type="text"
              placeholder="Enter your address..."
              className="w-full p-2 mb-4 bg-green-700 rounded border-none text-white"
            />
            <input
              type="text"
              placeholder="Occupation..."
              className="w-full p-2 mb-4 bg-green-700 rounded border-none text-white"
            />
            <div className="flex items-center justify-between mb-6">
              <span>Register for:</span>
              <label className="flex items-center">
                <input type="radio" name="register_for" value="self" />
                <span className="ml-2">Self</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="register_for" value="family" />
                <span className="ml-2">Friend/Family</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        </div>
    </>
  );
};

export default AlertRegistration;
