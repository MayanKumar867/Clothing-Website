import React from 'react'
import Subscribe from '../component/Subscribe'


const Contact = () => {
  return (
    <div className="w-full mt-4 bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff]  py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        📞 Get in Touch with <span className="text-pink-500">Riya’s Fashion</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Contact Riya’s Fashion"className="rounded-2xl shadow-lg"/>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Store</h3>
            <p className="mt-2">
              New Town <br />
              Kolkata, West Bengal, India
            </p>
            <p className="mt-2">
              📱 <span className="font-medium">+91-9876543210</span>
            </p>
            <p>
              ✉️ <a href="mailto:contact@riyasfashion.com" className="text-pink-500 hover:underline">
                contact@riyasfashion.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Careers at Riya’s Fashion</h3>
            <p className="mt-2">
              Passionate about fashion? Join our growing team and be part of Riya’s design journey.
            </p>
            <button className="mt-4 mb-10 px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <Subscribe/>
    </div>

  )
}

export default Contact
