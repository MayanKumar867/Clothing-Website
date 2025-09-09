import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
// import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

const Order = () => {
    let [orderData, setOrderData] = useState([])
    let { serverUrl } = useContext(authDataContext)

    const loadOrderData = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/order/list', {}, { withCredentials: true })
            if (result.data) {
                let allOrdersItem = []
                result.data.map((order) => {              // Loop through all orders of user
                    order.items.map((item) => {           // Loop through all items of an order
                        item['status'] = order.status     // Add order status to each item
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse())  // Show latest order first
            }
        } catch (error) {
            console.log("Order fetch error" + error)
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [])

    return (
        <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff]">
            {/* Title */}
            <div className="h-[8%] w-full text-center mt-[80px]">
                <Title text1={"My"} text2={"Order"} />
            </div>

            {/* Orders */}
            <div className="w-full h-[92%] flex flex-col gap-6 mt-10">
                {orderData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full bg-white shadow-lg border border-pink-100 rounded-2xl p-6 flex items-start gap-6 relative hover:shadow-xl transition"
                    >
                        {/* Product Image */}
                        <img
                            src={item.image1}
                            alt={item.name}
                            className="w-[110px] h-[110px] rounded-xl object-cover"
                        />

                        {/* Order Info */}
                        <div className="flex flex-col gap-2">
                            <p className="md:text-[22px] text-[18px] font-semibold text-gray-800">
                                {item.name}
                            </p>
                            <div className="flex items-center gap-4 text-gray-600 text-[15px] md:text-[17px]">
                                <p>₹ {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Size: {item.size}</p>
                            </div>
                            <p className="text-gray-500 text-[14px] md:text-[16px]">
                                Date:{" "}
                                <span className="text-gray-700 font-medium">
                                    {new Date(item.date).toDateString()}
                                </span>
                            </p>
                            <p className="text-gray-500 text-[14px] md:text-[16px]">
                                Payment Method:{" "}
                                <span className="text-gray-700 font-medium">
                                    {item.paymentMethod}
                                </span>
                            </p>
                        </div>

                        {/* Status */}
                        <div className="absolute md:right-[25%] right-[20%] md:top-[35%] top-[15%] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <p className="text-[14px] md:text-[16px] text-green-600 font-medium">
                                {item.status}
                            </p>
                        </div>

                        {/* Track Button */}
                        <div className="absolute md:right-[5%] right-[3%] md:top-[35%] top-[70%]">
                            <button
                                className="px-4 md:px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 text-white text-[14px] md:text-[16px] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                                onClick={loadOrderData}
                            >
                                Track Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Order
