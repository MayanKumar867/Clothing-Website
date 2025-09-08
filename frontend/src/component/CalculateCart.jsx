// import React, { useContext } from 'react'
// import { shopDataContext } from '../context/ShopContext'
// import Title from './Title'

// const CalculateCart = () => {
//     const { delivery_fee , getCartAmount} = useContext(shopDataContext)

//   return (
//     <div className='w-full lg:ml-[30px]'>
//         <div className='text-xl py-[10px]'>
//         <Title text1={'CART'} text2={'TOTALS'}/>
//       </div>
//       <div className='flex flex-col gap-2 mt-2 text-sm text-black p-[30px] border-[2px] border-[#4d8890]'>
//        <div className='flex justify-between text-black text-[18px] p-[10px]'>
//           <p className='text-black' >Subtotal</p>
//           <p>₹ {getCartAmount()}.00</p>
//         </div>
//         <hr/>
//          <div className='flex justify-between text-black text-[18px] p-[10px]'>
//           <p>Shipping Fee</p>
//           <p>₹ {delivery_fee}</p>
//         </div>
//         <hr/>
//         <div className='flex justify-between text-black text-[18px] p-[10px]'>
//           <b>Total</b>
//           <b>₹ {getCartAmount()=== 0 ? 0 :getCartAmount() + delivery_fee}</b>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default CalculateCart


import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

const CalculateCart = () => {
  const { delivery_fee, getCartAmount } = useContext(shopDataContext)

  return (
    <div className="w-full lg:ml-[30px]">
      {/* Title */}
      <div className="text-xl py-[10px]">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Totals Box */}
      <div className="flex flex-col gap-3 mt-4 bg-white shadow-lg rounded-2xl p-6 border border-pink-100">
        {/* Subtotal */}
        <div className="flex justify-between text-gray-700 text-[18px]">
          <p>Subtotal</p>
          <p className="font-medium">₹ {getCartAmount()}.00</p>
        </div>
        <hr className="border-pink-100" />

        {/* Shipping */}
        <div className="flex justify-between text-gray-700 text-[18px]">
          <p>Shipping Fee</p>
          <p className="font-medium">₹ {delivery_fee}</p>
        </div>
        <hr className="border-pink-100" />

        {/* Total */}
        <div className="flex justify-between text-gray-800 text-[20px] font-semibold">
          <p>Total</p>
          <p className="text-gray-800">
            ₹ {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CalculateCart

