import React, { useState, useContext, useEffect } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Home() {
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)

  const { serverUrl } = useContext(authDataContext)

  const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`, {}, { withCredentials: true })
      setTotalProducts(products.data.length)

      const orders = await axios.post(`${serverUrl}/api/order/list`, {}, { withCredentials: true })
      setTotalOrders(orders.data.length)
    } catch (err) {
      console.error("Failed to fetch counts", err)
    }
  }

  useEffect(() => {
    fetchCounts()
  }, [])

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] text-black relative overflow-x-hidden">
      <Nav />
      <Sidebar />

      <div className="lg:w-[75%] md:w-[70%] w-full absolute lg:left-[25%] md:left-[28%] left-0 mt-[80px] flex flex-col gap-10 px-4 sm:px-6 md:px-10 py-10">
        
        {/* Page Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          OneCart Admin Panel
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          
          {/* Total Products */}
          <div className="w-full h-[160px] sm:h-[180px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 text-gray-800 transition hover:scale-[1.02] duration-200">
            <p className="text-lg sm:text-xl md:text-2xl font-medium">Total Products</p>
            <span className="px-6 py-3 bg-[#e6faff] text-[#007b83] text-lg md:text-xl font-bold rounded-lg shadow-md">
              {totalProducts}
            </span>
          </div>

          {/* Total Orders */}
          <div className="w-full h-[160px] sm:h-[180px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 text-gray-800 transition hover:scale-[1.02] duration-200">
            <p className="text-lg sm:text-xl md:text-2xl font-medium">Total Orders</p>
            <span className="px-6 py-3 bg-[#fff3e6] text-[#d17a00] text-lg md:text-xl font-bold rounded-lg shadow-md">
              {totalOrders}
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home


