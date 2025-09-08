import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function List() {
  let [list, setList] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const fetchList = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list")
      setList(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const removeList = async (id) => {
    try {
      let result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, { withCredentials: true })
      if (result.data) {
        fetchList()
      } else {
        console.log("Failed to remove Product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff] text-black'>
      <Nav />
      <div className='w-[100%] h-[100%] flex items-start justify-start'>
        <Sidebar />

        <div className='lg:w-[82%] md:w-[70%] w-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] px-[20px]'>
          <div className='text-[28px] md:text-[40px] mb-[20px] font-semibold'>All Listed Products</div>

          {
            list?.length > 0 ? (
              list.map((item, index) => (
                <div key={index} className='w-[95%] md:h-[120px] h-[90px] bg-white shadow-lg rounded-xl flex items-center justify-between gap-[15px] p-[10px] md:px-[20px]'>
                  <img src={item.image1} className='w-[90px] md:w-[120px] h-[90%] object-cover rounded-lg' alt={item.name} />

                  <div className='flex-1 flex flex-col justify-center gap-[5px]'>
                    <div className='md:text-[20px] text-[16px] font-semibold text-gray-800'>{item.name}</div>
                    <div className='md:text-[17px] text-[15px] text-gray-600'>{item.category}</div>
                    <div className='md:text-[17px] text-[15px] text-green-600 font-medium'>₹{item.price}</div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <span
                      className='w-[35px] h-[35px] flex items-center justify-center bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition'
                      onClick={() => removeList(item._id)}
                    >
                      X
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-gray-600 text-lg'>No products available.</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default List

