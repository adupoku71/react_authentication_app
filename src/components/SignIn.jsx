import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "../styles/Button"
import { Card } from "../styles/Card"
import { Container } from "../styles/Container"
import { Input } from "../styles/Form.styled"
import { StyledLink } from "../styles/Card"
import { Switch, Redirect } from "react-router"
import { UserContext } from "../context/UserContextProvider"
export const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const { loggedIn, setLoggedIn } = useContext(UserContext)
  const updateUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  if (loggedIn) {
    return (
      <Switch>
        <Redirect to="/dashboard" />
      </Switch>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userData)
    try {
      const results = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      const response = await results.json()
      console.log(response)
      if (response.user) setLoggedIn(true)
    } catch (error) {
      console.log("there was an error", error)
    }
  }
  return (
    <Container>
      <Card>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={updateUserData}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <Input
            onChange={updateUserData}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <Button primary type="submit">
            SIGN IN
          </Button>
        </form>
        <StyledLink to="/reset_password">
          <p style={{ marginBottom: "20px" }}>
            <span>Forgot password ?</span>
          </p>
        </StyledLink>
        <Link to="/signUp">
          <Button>CREATE AN ACCOUNT</Button>
        </Link>
      </Card>
    </Container>
  )
}
