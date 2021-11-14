import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [email, setEmail] = useState(null)
  useEffect(() => {
    console.log("use context has been mounted")
    axios
      .get("http://localhost:5000", { withCredentials: true })
      .then(({ data }) => {
        // console.log(data)
        setLoggedIn(data.user.isLoggedIn)
        setEmail(data.user.email)
      })
      .catch((err) => {
        console.log("there was an error", err)
      })
  })
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, email, setEmail }}>
      {children}
    </UserContext.Provider>
  )
}
