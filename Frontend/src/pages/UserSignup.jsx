import React from 'react'
import  { useState } from 'react'
import {Link} from "react-router-dom"
function UserSignup() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [firstname,setFirstname]=useState('')
const [lastname,setLastname]=useState('')
const [userData,setUserData]=useState({})
const submitHandler=(e)=>{
e.preventDefault()
setUserData({
  fullname:{
  firstname:firstname,
  lastname:lastname},

  email:email,
  password:password,
})
console.log(userData)
setPassword('')
setEmail('')
setFirstname('')
setLastname('');
}

  return(
   <div className='px-4'>
         <img className='h-18 w-18 ml-6 ' src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png" alt="" />
        <form 
        className='px-4 py-2 border rounded border-b-gray-700 ' 
        onSubmit={(e)=>{
          submitHandler(e)       
        }}
        action="">
<h3 className='text-xl font-semibold py-5  '>What's your name</h3>
<div className='flex gap-2 mb-'>

<input
         required 
         type="text" 
         value={firstname}
         onChange={(e)=>{
          setFirstname(e.target.value)
         }}
         className='bg-[#EEEEEE] rounded border w-1/2  px-3 py-2 text-lg mt-2'
         placeholder='Firstname'/>
<input
         required 
         type="text" 
         value={lastname}
         onChange={(e)=>{
          setLastname(e.target.value)
         }}
         className='bg-[#EEEEEE] rounded border w-1/2 px-3 py-2 text-lg mt-2'
         placeholder='lastname'/>

</div>

        <h3 className='text-xl font-semibold mb-2 mt-5  '>What's your email</h3>
  
        <input
         required 
         type="email" 
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         className='bg-[#EEEEEE] rounded border w-full px-4 py-2 text-lg mt-2'
         placeholder='email@example.com'/>
         
        <h3 className='text-xl font-semibold mt-2 '>Enter Password</h3>
    
        <input
         type="password"
         value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
         }}
         className='bg-[#EEEEEE] rounded border w-full px-4 py-2 text-lg mt-2'
          placeholder='password' 
          
          />
        <button
        className='bg-blue-900 text-white text-xl w-full mt-12 rounded-2xl py-3 font-semibold'
        >Sign up</button>
        <p className='mt-8 text-xl font-medium mb-10'>Already have an account?<Link to="/login" className='text-blue-800'> Login here</Link></p>
        </form>
        <div>
         <p className='text-xl mt-28 font-lg'>By signing up, you agree to our <Link to="/terms" className='text-blue-800' underline>Terms of Service</Link>  and <Link to="/policy" className='text-blue-700' underline>Privacy Policy</Link>.</p>
        </div>
      </div>
  )
}

export default UserSignup
