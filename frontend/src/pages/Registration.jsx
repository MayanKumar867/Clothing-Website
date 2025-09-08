import React, { useContext, useState } from 'react'
import Logo from '../assets/Brand-logo.png'
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { authDataContext } from '../context/authContext';
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { userDataContext } from '../context/UserContext';
  

const Registration = () => {
    let [show, setShow] = useState(false);
    let {serverUrl} = useContext(authDataContext)
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let {getCurrentUser} = useContext(userDataContext);

    let navigate = useNavigate();

    const handleSignup = async (e)=>{
      e.preventDefault()
      try {
        const result = await axios.post(serverUrl + '/api/auth/registration',{
          name,email,password
        },{withCredentials:true})
        getCurrentUser()
        navigate("/")
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    }
 
    const googleSignup = async () => {
        try {
            const response = await signInWithPopup(auth , provider) //google se login karne ke baad sara data response mai la raha hai
            let user = response.user
            let name = user.displayName;
            let email = user.email

            const result = await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
            console.log(result.data)
            getCurrentUser()
            navigate("/")
            // toast.success("User Registration Successful")

        } catch (error) {
            console.log(error)
            // toast.error("User Registration Failed")
        }
        
    }

  return (
    // <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
    //   <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
    //      <img className='w-[40px]' src={Logo} alt="" />
    //      <h1>Riyu's Fashon</h1>
    //   </div>

    //   <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
    //      <span className='text-[25px] font-semibold'>Registration Page</span>
    //     <span className='text-[16px]'>Welcome to Riyu's Fashon, Place your order</span>
    //   </div>

    //   <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
    //       <form action="" onSubmit={handleSignup}  className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
    //           <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
    //             <img className='w-[20px]' src={google} alt="" /> Registration with google
    //           </div>
    //           <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
    //               <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
    //           </div>

    //           <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]  relative'>
    //             <input type="text"  className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='UserName' required onChange={(e)=>setName(e.target.value)} value={name}/>
    //             <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email} />
    //             <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password} />
    //              {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)} />}
    //              {show &&<IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
    //             <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Create Account</button>
    //             <p className='flex gap-[10px]'>You have an account ? <span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={()=>navigate("/login")}>Login</span> </p>
    //           </div>
    //       </form>
    //   </div>
    // </div>


    <div className='w-full h-screen bg-gradient-to-r from-[#ffe0f0] via-[#eafff6] to-[#ffffff] flex flex-col items-center justify-start text-gray-900'>
      
      {/* Header with Logo */}
      <div className='w-full h-20 flex items-center justify-start px-6 gap-3 cursor-pointer' onClick={() => navigate("/")}>
        <img className='w-10' src={Logo} alt="logo" />
        <h1 className='text-lg font-bold'>Riyu's Fashion</h1>
      </div>

      {/* Title Section */}
      <div className='w-full mt-6 flex items-center justify-center flex-col gap-2'>
        <span className='text-2xl font-bold'>Create Your Account</span>
        <span className='text-sm text-gray-600'>Join Riyu's Fashion & start shopping in style ✨</span>
      </div>

      {/* Card */}
      <div className='max-w-md w-[90%] mt-6 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-8'>
        <form onSubmit={handleSignup} className='flex flex-col gap-4'>
          
          {/* Google Signup */}
          <div className='w-full h-12 bg-gray-100 hover:bg-gray-200 transition rounded-lg flex items-center justify-center gap-2 cursor-pointer font-medium text-gray-700' onClick={googleSignup}>
            <img className='w-5' src={google} alt="google" /> Sign up with Google
          </div>

          {/* Divider */}
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <div className='flex-1 h-px bg-gray-300'></div>
            OR
            <div className='flex-1 h-px bg-gray-300'></div>
          </div>

          {/* Inputs */}
          <input type="text" className='w-full h-12 border border-gray-300 rounded-lg px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300' placeholder='Username' required  onChange={(e)=>setName(e.target.value)}  value={name} />
          <input type="email"  className='w-full h-12 border border-gray-300 rounded-lg px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <div className="relative w-full">
            <input type={show ? "text" : "password"} className='w-full h-12 border border-gray-300 rounded-lg px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300'
              placeholder='Password' 
              required 
              onChange={(e)=>setPassword(e.target.value)} 
              value={password}
            />
            {!show 
              ? <IoEyeOutline className='absolute right-3 top-3 w-6 h-6 text-gray-500 cursor-pointer' onClick={()=>setShow(prev=>!prev)} /> 
              : <IoEye className='absolute right-3 top-3 w-6 h-6 text-gray-500 cursor-pointer' onClick={()=>setShow(prev=>!prev)} />}
          </div>

          {/* Submit Button */}
          <button 
            className='w-full h-12 bg-pink-500 hover:bg-pink-600 transition rounded-lg text-white font-semibold text-lg mt-2'
          >
            Create Account
          </button>

          {/* Switch to Login */}
          <p className='text-sm text-gray-600 text-center'>
            Already have an account?{" "}
            <span 
              className='text-pink-600 font-semibold cursor-pointer hover:underline'
              onClick={()=>navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Registration
