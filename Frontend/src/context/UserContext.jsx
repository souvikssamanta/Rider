import React, { createContext, useState } from 'react'
export const UserDataContext=createContext()
function UserContext({children}) {

const [captain,setCaptain]=useState({
    email:'',
    fullname:{
        firstname:'',
        lastname:'',
    },
    password:''

})

  return (
    <div>
       
      <UserDataContext.Provider value={[captain,setCaptain]}>
        {children}
      </UserDataContext.Provider>

    </div>
  )
}

export default UserContext
