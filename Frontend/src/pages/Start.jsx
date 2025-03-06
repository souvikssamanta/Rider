import React from 'react'
import {Link} from 'react-router-dom'
function Start() {
  return (
    <div>
      <div className='bg-centre  bg-[url(https://images.unsplash.com/photo-1572239780645-203c467a49b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8)] h-screen w-full  flex flex-col justify-between'>
        <img className='h-18 w-18 ml-8 ' src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png" alt="" />
        <div className='bg-white px-10 py-5'>
            <h2 className='text-xl font-bold mb-10'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center mb-10  w-full bg-black text-amber-50 px-3 py-4 rounded-xl text-2xl'>Continue</Link>
        </div>



      </div>
    </div>
  )
}

export default Start
