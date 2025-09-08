// import React from 'react'
// import Title from './Title'
// import { RiExchangeFundsLine } from "react-icons/ri";
// import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
// import { BiSupport } from "react-icons/bi";

// const TermsAndCondition = () => {
//   return (
//     <div className='w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] '>
//         <div className='h-[8%] w-[100%] text-center mt-[70px] '>
//             <Title text1={"OUR"} text2={"POLICY"}/>
//             <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100 '>Customer-Friendly Policies – Committed to Your Satisfaction and Safety.</p>
//         </div>
//       <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]'>
//         <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
//         <RiExchangeFundsLine  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
//         <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>Easy Exchange Policy</p>
//         <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.</p>

//         </div>
//         <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
//         <TbRosetteDiscountCheckFilled  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
//         <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>7 Days Return Policy</p>
//         <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Shop with Confidence – 7 Days Easy Return Guarantee.</p>

//         </div>
//         <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
//         <BiSupport  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
//         <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>Best Customer Support</p>
//         <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Trusted Customer Support – Your Satisfaction Is Our Priority.</p>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default TermsAndCondition



import { FaExchangeAlt, FaHeadset } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";

const PolicySection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] pt-12 pb-6 py-16 px-6 md:px-20">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">Our Promise</h2>
        <p className="text-gray-600 mt-2">Shop worry-free with our customer-first policies</p>
      </div>

      {/* Policies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
            <FaExchangeAlt className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-black">Hassle-Free Exchange</h3>
          <p className="text-gray-600 text-center mt-2">
            Changed your mind? No worries – exchange your items with ease.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
            <MdOutlineReplay className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-black">7-Day Easy Returns</h3>
          <p className="text-gray-600 text-center mt-2">
            Shop confidently – simple returns within 7 days guaranteed.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
            <FaHeadset className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-black">24/7 Customer Support</h3>
          <p className="text-gray-600 text-center mt-2">
            We’re here whenever you need us – your satisfaction is our priority.
          </p>
        </div>
      </div>

      {/* Subscribe Box */}
      <div className="mt-16 bg-gradient-to-r from-pink-100 via-green-100 to-blue-100 rounded-2xl shadow-md p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black">
          Join the Style Club – Get 20% Off
        </h2>
        <p className="text-gray-700 mt-2">
          Unlock exclusive deals, early access to new collections, and style tips delivered to your inbox.
        </p>
        
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="px-6 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
