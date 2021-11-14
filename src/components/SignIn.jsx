import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { RiErrorWarningLine } from "react-icons/ri"
import { Button } from "../styles/Button"
import { Card } from "../styles/Card"
import { Container } from "../styles/Container"
import { Input } from "../styles/Form.styled"
import { StyledLink } from "../styles/Card"
import { Switch, Redirect } from "react-router"
import { UserContext } from "../context/UserContextProvider"
import axios from "axios"

export const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const { loggedIn, setLoggedIn, setEmail } = useContext(UserContext)
  const [errors, setErrors] = useState({})

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
    axios
      .post(
        "http://localhost:5000/login",
        { userData },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data)
        const {
          user: { email, isLoggedIn },
        } = data
        setLoggedIn(isLoggedIn)
        setEmail(email)
      })
      .catch(({ response: { data } }) => {
        setErrors(data.errors)
      })
  }
  return (
    <Container>
      <Card>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              onChange={updateUserData}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
            {errors.email && (
              <span>
                <RiErrorWarningLine className="ri" /> {errors.email}
              </span>
            )}
          </div>
          <div>
            <Input
              onChange={updateUserData}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            {errors.password && (
              <span>
                <RiErrorWarningLine className="ri" /> {errors.password}
              </span>
            )}
          </div>
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
          <Button style={{ marginBottom: "0" }}>CREATE AN ACCOUNT</Button>
        </Link>
      </Card>
    </Container>
  )
}
