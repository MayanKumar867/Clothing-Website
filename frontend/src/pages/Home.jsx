import React, { useEffect, useState } from 'react'
import Backgound from '../component/Background'
import Hero from '../component/Hero'
import Product from './Product'
import TermsAndCondition from '../component/TermsAndCondition'
import Footer from '../component/Footer'



const Home = () => {
  let heroData = [
  { text1: "30% OFF Today Only", text2: "Own Your Style" },
  { text1: "Bold Looks, Fresh Vibes", text2: "Limited Drop" },
  { text1: "New Season Arrivals", text2: "Shop the Trend" },
  { text1: "Find Your Fashion Fit", text2: "On Sale Now" }
]


  let [heroCount,setHeroCount] = useState(0);

  useEffect(()=>{
    let interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
    },2000);
    return () => clearInterval(interval)
  },[])

  return (
    <div className='overflow-x-hidden relative top-[70px]'>
    <div className='w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh]   bg-gradient-to-b from-[#ffe0f0] via-[#eafff6] to-[#ffffff]' >
      <Backgound heroCount={heroCount}/>
      <Hero
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      />
    </div>  
    <Product/>
    <TermsAndCondition/>
    <Footer/>
    </div>
  )
}

export default Home
