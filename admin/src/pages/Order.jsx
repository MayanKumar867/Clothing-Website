import React, { useState, useContext, useEffect } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { SiEbox } from "react-icons/si";

const Order = () => {
  let [orders,setOrders] = useState([])
  let {serverUrl} = useContext(authDataContext)

  const fetchAllOrders = async () => {
    // try {
    //   const result = await axios.post(serverUrl + '/api/order/list' , {} ,{withCredentials:true})
    //   setOrders(result.data.reverse())
    // } catch (error) {
    //   console.log(error)
    // }
    try {
    const result = await axios.post(serverUrl + '/api/order/userorder', {}, { withCredentials:true })
    setOrders(result.data.reverse())
  } catch (error) {
    console.log(error)
  }
  }

  const statusHandler = async (e , orderId) => {
    try {
      const result = await axios.post(serverUrl + '/api/order/status' , {orderId,status:e.target.value},{withCredentials:true})
      if(result.data){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] text-black'>
      <Nav/>
      <div className='w-full h-full flex items-start'>
        <Sidebar/>
        <div className='lg:w-[85%] md:w-[70%] h-full lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] py-[50px] px-[20px]'>
          <h1 className='text-[28px] md:text-[40px] font-semibold mb-[20px]'>All Orders List</h1>
          
          {orders.map((order,index)=>(
            <div key={index} className='w-full max-w-[1000px] bg-white shadow-md rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center p-5 gap-5 transition hover:shadow-lg'>
              
              {/* Icon */}
              <SiEbox  className='w-[60px] h-[60px] text-white p-3 rounded-lg bg-black'/>

              {/* Items */}
              <div>
                <div className='flex flex-col gap-[5px] text-[16px] text-gray-700'>
                  {order.items.map((item,index)=>{
                    return (
                      <p key={index}>
                        {item.name.toUpperCase()}  *  {item.quantity} <span className='text-gray-500'>({item.size})</span>
                        {index !== order.items.length - 1 && ","}
                      </p>
                    )
                  })}
                </div>

                {/* Address */}
                <div className='mt-3 text-[14px] text-gray-600 leading-[20px]'>
                  <p>{order.address.firstName+" "+ order.address.lastName}</p>
                  <p>{order.address.street}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + " - " + order.address.pinCode}</p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              {/* Order Info */}
              <div className='text-[14px] text-gray-700'>
                <p>Items: <span className='font-medium'>{order.items.length}</span></p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: <span className={order.payment ? "text-green-600 font-medium":"text-red-500"}>{order.payment ? 'Done' : 'Pending'}</span></p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p className='text-[18px] font-bold text-black mt-2'>₹ {order.amount}</p>
              </div>

              {/* Status Dropdown */}
              <select  
                value={order.status} 
                className='px-3 py-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700' 
                onChange={(e)=>statusHandler(e,order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Order

