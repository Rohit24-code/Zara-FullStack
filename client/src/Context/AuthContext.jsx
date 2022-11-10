import React, { createContext, useState } from 'react'
export const AuthContext = createContext() 

export function AuthContextProvider({children}) {
        const [loggedin,setLoggedin] = useState([])  
  return (
    <AuthContext.Provider value={{loggedin,setLoggedin}}>
      {children}
    </AuthContext.Provider>
  )
}

// export default AuthContext
