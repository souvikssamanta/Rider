import React, { useDebugValue, useState } from 'react'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import TransportOption from '../components/transportOption'
import ConfirmRide from '../components/ConfirmRide'
import LookingforDriver from '../components/LookingforDriver'
import WaitforDriver from '../components/WaitforDriver'
function Home() {

//----usestate functions-----
  const[pickup,setPickup]=useState('')
  const[destination,setDestination]=useState('')
  const[pannelOpen,setPannelOpen]=useState(false)
  const[transport,setTransport]=useState(false)
  const[confirmride, setConfirmride] =useState(false);
  const[driver, setDriver]=useState(false)
  const [waitforDriver ,setWaitforDriver]=useState(false)
//---useref functions-----
  const panelRef=useRef(null)
  const pannelcloseRef=useRef(null)
  const vehicleRef=useRef(null)
  const confirmVehicleref=useRef(null)
  const driverRef=useRef(null)
  const waitforDriverRef=useRef(null)
//----submithandler----
  const submitHandler = (e)=>{
  e.preventDefault()
}
// ---------GSAP FUNCTIONS------

// -----for pannel open and close-----
useGSAP(function(){
if(pannelOpen){
  gsap.to(panelRef.current,{
    height:'75%' ,
    padding:'20',
    opacity:'1'
    })
    gsap.to(pannelcloseRef.current,{
      opacity:"1"
    })
  }
else{
  gsap.to(panelRef.current,{
    opacity:'0',
    height:'0%'  
    })
    gsap.to(pannelcloseRef.current,{
      opacity:"0"
    }) 
}
},[pannelOpen])

//---for transport option pannel---

useGSAP(function(){
  if(transport && pickup){
    gsap.to(vehicleRef.current,{
      height:'75%' ,
      padding:20,
      opacity:'1'
      })
    }
  else{  
    gsap.to(vehicleRef.current,{
      opacity:0,
      height:"0%"
    }) 
  }
  },[transport,pickup])
  
//----for confirm vehicle-----

useGSAP(function(){
    if(confirmride){
gsap.to(confirmVehicleref.current,{
    height:'100%',
    opacity:1
})
    }

else{
   gsap.to(confirmVehicleref.current,{
        height:'0%',
        opacity:0
    })
}
},[confirmride])

// -------looking for driver-----

useGSAP(function(){
  if(driver){
gsap.to(driverRef.current,{
  height:'100%',
  opacity:1
})
  }

else{
 gsap.to(driverRef.current,{
      height:'0%',
      opacity:0
  })
}
},[driver])

//----wait for driver----

useGSAP(function(){
  if(waitforDriver){
gsap.to(waitforDriverRef.current,{
  height:'100%',
  opacity:1
})
  }

else{
 gsap.to(waitforDriverRef.current,{
      height:'0%',
      opacity:0
  })
}
},[waitforDriver])


  return (
    <div className='h-screen relative overflow-hidden '>
     <img className='w-22 m-3 absolute' src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png" alt="" />
    <div className='h-screen w-screen'>

<img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    </div>

<div className='flex flex-col justify-end absolute top-0 w-full h-screen '>

      <div className='h-[30%] bg-amber-50 p-5 relative '>
      <h4 className='text-4xl font-semibold'>Find a trip</h4>

      {/* pannel of location close */}
      <h5 ref={pannelcloseRef} onClick={()=>{
        setPannelOpen(false)
      }} 
      className=' absolute text-4xl  top-3 right-5 opacity-0 '><i className="ri-arrow-down-s-line"></i></h5>

      <form action="" onSubmit={(e)=>{
        submitHandler(e);
      }}  >

        <div className='line absolute h-20 w-1 bg-black top-[40%] left-[10%] rounded'></div>
        {/* ------pickup------ */}
      <input className='w-full bg-[#eee] px-12 py-3 mt-6 rounded-lg text-xl font-bold ' type="text" placeholder='Add a pick-up location'
      value={pickup}
      onClick={()=>{
        setPannelOpen(true)
      }}
      onChange={(e)=>{
        setPickup(e.target.value)
      }}
      />
      {/* -----destination--- */}
      <input className='w-full bg-[#eee] px-12 py-3 mt-6 rounded-lg text-xl font-bold' type="text" placeholder='Enter your destination'
      
      value={destination}
      onClick={()=>{
        setPannelOpen(true)
      }}
      onChange={(e)=>{
        setDestination(e.target.value)
      }}
      />
      </form>
      </div>
{/* ------location search pannel----- */}

    <div ref={panelRef} 
    className='bg-white h-0 '>
      <LocationSearchPanel setTransport={setTransport} ></LocationSearchPanel>
    </div>
{/* ------vehicle pannel---- */}

    <div ref={vehicleRef} className='h-0 bg-[#FFFFFF] absolute w-full'>
      <TransportOption  setConfirmride={setConfirmride} setTransport={setTransport}></TransportOption>
      </div>
{/* ---confirm vehicle--- */}
    <div ref={confirmVehicleref} 
     className='h-0 w-full absolute bg-white'>
    <ConfirmRide setDriver={setDriver} setConfirmride={setConfirmride} ></ConfirmRide>
    </div>

{/* looking for driver */}

  <div ref={driverRef} className='h-0 w-full absolute bg-white'>
    <LookingforDriver  setDriver={setDriver}></LookingforDriver>
  </div>

  {/* waiting for driver */}
  
  <div ref={waitforDriverRef} 
   className='h-full w-full absolute bg-white'>
    <WaitforDriver setWaitforDriver={setWaitforDriver}></WaitforDriver>
  </div>

</div>
      



    </div>
  )
}

export default Home
