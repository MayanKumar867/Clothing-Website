import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import CalculateCart from '../component/CalculateCart';

const Cart = () => {

  const { products, currency, cartItem ,updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData); 

  }, [cartItem]);
  return (
    

  <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff]">
  {/* Title */}
  <div className="h-[8%] w-full text-center mt-[80px]">
    <Title text1={"YOUR"} text2={"CART"} />
  </div>

  {/* Cart Items */}
  <div className="w-full flex flex-col gap-6 mt-10">
    {cartData.map((item, index) => {
      const productData = products.find((product) => product._id === item._id);

      return (
        <div
          key={index}
          className="w-full flex items-center gap-6 bg-white shadow-md border border-pink-100 p-4 rounded-2xl relative hover:shadow-lg transition"
        >
          {/* Product Image */}
          <img
            className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-xl object-cover"
            src={productData.image1}
            alt={productData.name}
          />

          {/* Product Info */}
          <div className="flex flex-col gap-2 flex-grow">
            <p className="md:text-[22px] text-[18px] font-semibold text-gray-800">
              {productData.name}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[18px] text-pink-600 font-medium">
                {currency} {productData.price}
              </p>
              <p className="w-[40px] h-[40px] text-sm font-medium text-gray-700 bg-pink-100 rounded-lg flex items-center justify-center">
                {item.size}
              </p>
            </div>
          </div>

          {/* Quantity Input */}
          <input
            type="number"
            min={1}
            defaultValue={item.quantity}
            className="w-14 md:w-20 px-2 py-1 md:py-2 text-gray-800 text-center border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400"
            onChange={(e) =>
              e.target.value === " " || e.target.value === "0"
                ? null
                : updateQuantity(item._id, item.size, Number(e.target.value))
            }
          />

          {/* Delete Icon */}
          <RiDeleteBin6Line
            className="text-black hover:text-gray-800 w-[22px] h-[22px] cursor-pointer transition"
            onClick={() => updateQuantity(item._id, item.size, 0)}
          />
        </div>
      );
    })}
  </div>

  {/* Cart Totals & Checkout */}
  <div className="w-full sm:w-[400px]">
    
      <CalculateCart />
      <button
        className="mt-6 w-full py-3 text-[18px] font-semibold bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
        onClick={() => {
          if (cartData.length > 0) {
            navigate("/placeorder");
          } else {
            console.log("Your cart is empty!");
          }
        }}
      >
        PROCEED TO CHECKOUT
      </button>
    
  </div>
</div>


  )
}

export default Cart
