import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Title from '../component/Title';
import ProductCard from '../component/ProductCard';
import { shopDataContext } from '../context/ShopContext';

const Collections = () => {

  let [showFilter, setShowFilter] = useState(false)
  let {products, search, showSearch} = useContext(shopDataContext)
  let [filterProduct, setFilterProduct] = useState([])
  let [category, setCategory]= useState([])
  let [subCategory, setSubCategory]= useState([])
  let [sortType,SetSortType] = useState("relavent")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else{
      setCategory(prev => [...prev, e.target.value])
    }
  }
 
  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
        setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
        let productCopy = products.slice()

        if(showSearch && search){
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length > 0){
          productCopy = productCopy.filter(item => category.includes(item.category))
        }
        if(subCategory.length > 0){
          productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)

    }

    const sortProducts = ()=>{
       let fbCopy = filterProduct.slice()

       switch (sortType) {
        case 'low-high':
          setFilterProduct(fbCopy.sort((a,b)=> (a.price - b.price)))
          break;
        case 'high-low':
          setFilterProduct(fbCopy.sort((a,b)=>(b.price - a.price)))
          break;
         default:
          applyFilter() 
          break;
       }
    }


    useEffect(()=> {
      setFilterProduct(products)   //Everytime it changes the product
    },[products])

   useEffect(()=>{
     applyFilter()
   },[category, subCategory, search, showSearch])

   useEffect(()=> {
    sortProducts()
   },[sortType])


  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#ffe0f0] via-[#eafff6] to-[#ffffff] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2] pb-[110px]'>

  {/* Sidebar */}
  <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilter ? "h-[45vh]" :"h-[8vh]"} p-[20px] border-r border-gray-200 lg:fixed`}>
    
    {/* Filters Header */}
    <p 
      className='text-[25px] font-bold flex gap-[5px] items-center justify-start cursor-pointer text-gray-800' 
      onClick={()=> setShowFilter(prev=>!prev)}
    >
      Filters  
      {!showFilter && <FaChevronRight className='text-[18px] md:hidden' />}
      {showFilter && <FaChevronDown className='text-[18px] md:hidden' />}
    </p>

    {/* Categories */}
    <div className={`pl-5 py-4 mt-6 rounded-xl bg-[#e6fff4] shadow-md transition-all ${showFilter ? "" : "hidden"} md:block`}>
      <p className='text-[18px] font-semibold text-[#008060] mb-3'>Categories</p>
      <div className='space-y-3 text-gray-700'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value={'Men'} className='w-4 h-4 accent-[#008060]' onChange={toggleCategory} /> Men
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value={'Women'} className='w-4 h-4 accent-[#008060]' onChange={toggleCategory} /> Women
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value={'Kids'} className='w-4 h-4 accent-[#008060]' onChange={toggleCategory} /> Kids
        </label>
      </div>
    </div>

    {/* Sub-Categories */}
    <div className={`pl-5 py-4 mt-6 rounded-xl bg-[#ffe6f2] shadow-md transition-all ${showFilter ? "" : "hidden"} md:block`}>
      <p className='text-[18px] font-semibold text-[#d63384] mb-3'>Sub-Categories</p>
      <div className='space-y-3 text-gray-700'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value={'TopWear'} className='w-4 h-4 accent-[#d63384]' onChange={toggleSubCategory} /> TopWear
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value={'BottomWear'} className='w-4 h-4 accent-[#d63384]' onChange={toggleSubCategory} /> BottomWear
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value={'WinterWear'} className='w-4 h-4 accent-[#d63384]' onChange={toggleSubCategory} /> WinterWear
        </label>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className='lg:pl-[20%] md:py-[10px]'>
    <div className='md:w-[80vw] w-[100vw] flex justify-between flex-col lg:flex-row lg:px-[50px] items-start lg:items-center gap-4'>
      
      <Title text1={"ALL"} text2={"COLLECTIONS"} />

      {/* Sort Dropdown */}
      <select 
        className='bg-white border-2 border-gray-300 w-[60%] md:w-[200px] h-[50px] px-[10px] rounded-lg text-gray-700 font-medium shadow-sm hover:border-[#46d1f7] focus:outline-none focus:ring-2 focus:ring-[#46d1f7]'
        onChange={(e)=>SetSortType(e.target.value)}
      >
        <option value="relavent">Sort By: Relevant</option>
        <option value="low-high">Sort By: Low to High</option>
        <option value="high-low">Sort By: High to Low</option>
      </select>
    </div>

    {/* Product Grid */}
    <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px] mt-6'>
      {
        filterProduct.map((item,index)=>(
          <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image1}/>
        ))
      }
    </div>
  </div>
</div>

  )
}

export default Collections
