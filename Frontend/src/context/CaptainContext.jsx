import React, { createContext } from 'react'
import { useState } from 'react'
export const CaptainDataContext=createContext()
function CaptainContext({children}) {

const [captain,setCaptain]=useState({
    email:'',
    fullname:{
        firstname:'',
        lastname:'',
    },
    password:'',
    vehice:{
        color:'',
        plate:'',
        capacity:'',
        vehicleType:''
    }
})

  return (
    <div>

        <CaptainDataContext.Provider value={[captain,setCaptain]}>  
            {children}
        </CaptainDataContext.Provider>

      
    </div>
  )
}

export default CaptainContext
