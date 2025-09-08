import React from 'react'
import Title from '../component/Title'
import about from '../assets/About-img.png'
import Subscribe from '../component/Subscribe'

const About = () => {
  return (
    <div className="w-full mt-4 bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] py-16 px-6 md:px-20">
  {/* About Us Section */}
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={about} 
        alt="Riyu's Fashion" 
        className="rounded-2xl shadow-xl "
      />
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#d63384] mb-6">
        About <span className="text-black">Riyu’s Fashion</span>
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Riyu’s Fashion was born out of love for timeless style and modern trends. 
        We create collections that combine elegance, comfort, and individuality— 
        designed for people who want to express themselves through fashion. 
        From everyday essentials to standout statement pieces, our goal is to make 
        fashion personal and empowering. ✨
      </p>
      <p className="text-gray-600 text-base leading-relaxed">
        With a focus on premium fabrics, sustainable practices, and handpicked 
        designs, Riyu’s Fashion is more than clothing—it’s a lifestyle. 
        Every piece tells a story, and we’d love for you to be part of it.
      </p>
    </div>
  </div>

  {/* Why Choose Us Section */}
  <div className="mt-20 text-center">
    <h2 className="text-4xl font-extrabold text-[#d63384] mb-10">
      Why Choose <span className="text-black">Us?</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-pink-200 hover:scale-105 transition duration-300">
        <h3 className="text-xl font-bold text-[#d63384] mb-4">Premium Quality</h3>
        <p className="text-gray-600">
          We craft each outfit with love, using handpicked fabrics and 
          high-quality stitching to ensure comfort and elegance.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-green-200 hover:scale-105 transition duration-300">
        <h3 className="text-xl font-bold text-[#198754] mb-4">Sustainable Fashion</h3>
        <p className="text-gray-600">
          Every collection is made with sustainability in mind—because 
          fashion should not just look good, but also do good. 🌿
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-blue-200 hover:scale-105 transition duration-300">
        <h3 className="text-xl font-bold text-[#0d6efd] mb-4">Personal Touch</h3>
        <p className="text-gray-600">
          Riyu ensures every collection carries her signature style, 
          blending creativity and individuality for a truly unique experience.
        </p>
      </div>
    </div>
  </div>
  <Subscribe/>
</div>

  )
}

export default About
