import React from 'react'

const Subscribe = () => {

  return (
    <div className="w-full mt-6 bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] py-16 px-6 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        ✨ Subscribe & Get <span className="text-pink-500">20% Off</span>
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Be the first to explore VSR exclusive designs, latest collections, and special offers.
        Join our fashion family today!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email" placeholder="Enter Your Email"
          className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
        />
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 transition">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe



