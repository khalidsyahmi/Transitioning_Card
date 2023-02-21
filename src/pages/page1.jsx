import React from "react";
//import SD from "../assets/tailwindui.jpg";

const page1 = ({ profile, h1, p1, p2 }) => {
  return (
    <div className="bg-yellow-300">
      <div className="container mx-auto py-10">
        {/* profile card */}
        <div className="bg-blue-300 p-6 rounded-2xl shadow-lg mx-auto w-4/5">
          <div className="flex items-center my-10">
            <img
              className="w-48 h-48 rounded-full ml-12"
              src={profile}
              alt="Profile"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{h1}</h2>
              <p className="text-gray-700 text-center m-4">{p1}</p>
              <p className="text-gray-700 text-start indent-10 px-12 mt-5">{p2}</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default page1;
