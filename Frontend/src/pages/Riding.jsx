
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import {useContext} from 'react'
const Riding = () => {
  const navigate=useNavigate()
  const [socket] = useContext(SocketContext);
  const location=useLocation();
  const {ride}=location.state

// socket.on("ride-finished", (ride) => {
//   navigate("/home");
// });
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="flex items-center justify-center fixed h-10 w-10 bg-white rounded-2xl left-2.5 top-2.5"
      >
        <i className="ri-home-5-line text-2xl font-bold"></i>
      </Link>
      {/* ----image section-- */}
      <div className="h-2/3">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div
        className=" flex flex-col mt-3  ml-2  mr-2 gap-4 max-w-2xl items-center
         border-2 border-black rounded-2xl py-4
        px-2 "
      >
        {/* car details */}

        {/* <div className='flex  gap-5 justify-between'>
           
            <div>
                <p className='text-xl'>Car no:</p>
                 <h4 className='text-xl font-semibold'>{ride.captain.vehicle.plate}</h4>
            </div>
            <div>
                <p className='text-xl'>Car name:</p>
            <h3 className='text-xl font-semibold'>Harrier</h3>
            </div>

        </div> */}

        {/* destination and payment */}
        {/* <div>
      <p className='text-2xl'>Destination</p>
      <p className='text-2xl font-bold mt-3'><i className="ri-map-pin-2-line text-2xl"></i>{ride.destination}</p>
      </div>
        */}
        <div className='text-center'>
          <h1 className="text-xl">Fare</h1>
          <p className="text-xl font-bold mt-3 bg-amber-100 inline-block rounded-xl px-3">
            <i className="ri-money-rupee-circle-line text-xl"></i>
            {ride.fare}
          </p>
        </div>
        <p className='font-semibold'>Choose any mode</p>
        <div className="flex gap-5 mt-5">
          <Link
            to="/home"
            className="bg-green-500 py-1 text-xl w-30 text-center rounded-xl "
          >
            cash
          </Link>

          <Link
            to="/payment"
            className="bg-green-500 py-1 text-xl w-30 text-center rounded-xl "
          >
           online
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Riding


