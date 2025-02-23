import React, { useState } from 'react'
import {Link} from "react-router-dom"
function UserLogin() {

  const [email,setEmail] =useState('');
 const[password ,setPassword]= useState('');
 const [userData, setUserData]=useState({})
const submitHandler=(e)=>{
e.preventDefault()
setUserData({
  email:email,
  password:password
})
console.log(userData)
setEmail('')
setPassword('')

}

  return (
    <div className='px-4'>
       <img className='h-18 w-18 ml-6 ' src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png" alt="" />
      <form 
      className='px-4 py-20 border rounded border-b-gray-700 ' 
      onSubmit={(e)=>{
        submitHandler(e)
       
      }}
      action="">
      <h3 className='text-xl font-semibold mb-2  '>What's your email</h3>

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
       className='bg-[#EEEEEE] rounded border w-full px-4 py-2 text-lg mt-2'
        placeholder='password' 
        value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }
    }
        />
      <button
      className='bg-black text-white text-xl w-full mt-12 rounded-2xl py-3 font-semibold'
      >Login</button>
      <p className='mt-8 text-xl font-medium'>New here?<Link to="/signup" className='text-blue-800'>  Create new Account</Link></p>
      </form>
      <div>
        <Link to="/captain-login" className='bg-green-600 flex justify-center text-2xl text-white w-full  py-3  mt-40 rounded-xl'>Login as Captain</Link>
      </div>



    </div>
  )
}

export default UserLogin
