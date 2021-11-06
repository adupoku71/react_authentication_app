import { useContext } from "react"
import { Container } from "../styles/Container"
import { Button } from "../styles/Button"
import { UserContext } from "../context/UserContextProvider"
import { Switch, Redirect } from "react-router"
export const DashBoard = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext)

  if (!loggedIn) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    )
  }
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to the Dashboard</h2>
        <Button
          onClick={() => setLoggedIn(false)}
          style={{ marginTop: "20px", maxWidth: "150px" }}
          primary
        >
          LOGOUT
        </Button>
      </div>
    </Container>
  )
}
