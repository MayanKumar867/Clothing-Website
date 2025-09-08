import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] flex flex-col items-center justify-center text-center px-6">
      {/* Big 404 Text */}
      <h1 className="text-[80px] md:text-[120px] font-bold text-pink-600 drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-[20px] md:text-[28px] text-gray-700 mt-4 font-medium">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="text-[16px] md:text-[18px] text-gray-500 mt-2">
        Don’t worry — let’s get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <button
          className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-3 rounded-xl text-[16px] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          onClick={() => navigate("/")}>Go Home
        </button>
        <button
          className="bg-black text-white px-6 py-3 rounded-xl text-[16px] font-semibold shadow-md hover:bg-gray-800 hover:scale-105 transition"
          onClick={() => navigate("/login")}>Login
        </button>
      </div>
    </div>
  );
}

export default NotFound;

