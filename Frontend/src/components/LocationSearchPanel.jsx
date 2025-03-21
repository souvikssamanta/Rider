import React from 'react'
function LocationSearchPanel({setTransport}) {
  const locations=[
"24c,Mckv Institute of Engineering,howrah,GT road",
"24c,Mckv Institute of Engineering,howrah,GT road",
"24c,Mckv Institute of Engineering,howrah,GT road"

  ]
  return (
    <div>{
    locations.map(function(elem,idx){
      return  <div key={idx} 
        onClick={()=>{
              setTransport(true)
              
            }} 
      className='flex justify-items-start mt-4 '>
      <h4 className='text-2xl text-center'><i class="ri-map-pin-line"></i></h4>   
     <h4 className='text-xl font-semibold'>{elem}</h4>
   </div>
    })
    }
</div>
    
  )
}

export default LocationSearchPanel
