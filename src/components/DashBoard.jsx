import { useContext } from "react"
import { Container } from "../styles/Container"
import { Button } from "../styles/Button"
import { UserContext } from "../context/UserContextProvider"
import { Switch, Redirect } from "react-router"
import axios from "axios"

export const DashBoard = () => {
  const { loggedIn, setLoggedIn, email, setEmail } = useContext(UserContext)

  if (!loggedIn) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    )
  }
  const logout = () => {
    axios
      .post("http://localhost:5000/logout", {}, { withCredentials: true })
      .then(({ data }) => {
        // console.log("called from dashboard", data)
        setLoggedIn(data.user.isLoggedIn)
        setEmail(data.user.email)
      })
      .catch((err) => {
        console.log("there was an error")
      })
  }
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to the Dashboard {email}</h2>
        <Button
          onClick={logout}
          style={{ marginTop: "20px", maxWidth: "150px" }}
          primary
        >
          LOGOUT
        </Button>
      </div>
    </Container>
  )
}
