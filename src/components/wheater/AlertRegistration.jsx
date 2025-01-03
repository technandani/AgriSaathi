import React from "react";

const AlertRegistration = () => {
  return (
    <div className=" p-3 w-[50%] h-full bg-green-800 rounded-lg text-white">
      <div className="w-full h-full border-2 flex flex-col justify-evenly p-3 rounded-lg overflow-y-scroll">
        <div>
          <h2 className="text-2xl font-bold text-center">Registration</h2>
          <p className="mb-2 text-center text-sm">
            Register and receive early warnings of lightning in your area. You can also register for your friends and family.
          </p>
        </div>
        <form className="">
          <input
            type="text"
            placeholder="Enter your name..."
            className="w-full p-2 mb-4 rounded border-none outline-none text-black"
          />
          <input
            type="text"
            placeholder="Enter your mobile no..."
             className="w-full p-2 mb-4 rounded border-none outline-none text-black"
          />
          <input
            type="text"
            placeholder="Enter your pincode..."
             className="w-full p-2 mb-4 rounded border-none outline-none text-black"
          />
          <input
            type="text"
            placeholder="Enter your address..."
             className="w-full p-2 mb-4 rounded border-none outline-none text-black"
          />
          <input
            type="text"
            placeholder="Occupation..."
             className="w-full p-2 mb-4 rounded border-none outline-none text-black"
          />
          <div className="flex items-center justify-evenly mb-6">
            <span>Register :</span>
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
  );
};

export default AlertRegistration;
