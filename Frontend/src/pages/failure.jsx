import React from 'react'

const failure = () => {
  return (
    <div>
      <div className='flex flex-col justify-center mt-60 items-center'>
        <p className='text-2xl font-semibold'>oopps!!</p>
        <p className=' text-red-600 font-bold text-2xl'>Your payment is failed!!</p>
      </div>
    </div>
  );
}

export default failure
