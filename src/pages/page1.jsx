import React from "react";
import SD from "../assets/tailwindui.jpg";

const page1 = () => {
  return (
    <div className="bg-yellow-300">
      <div className="container mx-auto py-10">
        {/* profile card */}
        <div className="bg-blue-300 p-6 rounded-2xl shadow-lg mx-auto w-4/5">
          <div className="flex items-center my-10">
            <img
              className="w-48 h-48 rounded-full ml-12"
              src={SD}
              alt="Profile"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Page One</h2>
              <p className="text-gray-700 mb-2">
                Software Engineer at XYZ Inc.
              </p>
              <p className="text-gray-700">San Francisco, CA</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default page1;
