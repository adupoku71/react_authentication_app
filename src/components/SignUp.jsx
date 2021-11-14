import { useState } from "react"
import { RiErrorWarningLine } from "react-icons/ri"
import { StyledLink } from "../styles/Card"
import { Button } from "../styles/Button"
import { Card } from "../styles/Card"
import { Container } from "../styles/Container"
import { Input } from "../styles/Form.styled"
import axios from "axios"
import { Redirect, Switch } from "react-router"
export const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  })
  const [signedUp, setSignedUp] = useState(false)
  const [errors, setErrors] = useState({})
  const updateUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(userData)
    const samePassword = userData.password === userData.confirmPass
    if (samePassword) {
      axios
        .post(
          "http://localhost:5000/signUp",
          { email: userData.email, password: userData.password },
          { withCredentials: true }
        )
        .then(({ data }) => {
          console.log(data)
          setSignedUp(data.signedUp)
        })
        .catch(({ response: { data } }) => {
          setErrors(data.errors)

          console.log(
            "error making request to signUp route from the signUp component",
            data
          )
        })
    } else {
      setErrors({ confirmPass: "passwords do not match" })
      console.log(errors)
      console.log("passwords do not match")
    }
  }

  if (signedUp) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    )
  }
  return (
    <Container>
      <Card>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={updateUserData}
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
          <div>
            <Input
              onChange={updateUserData}
              type="password"
              id="confirmPass"
              name="confirmPass"
              placeholder="Confirm Password"
            />
            {errors.confirmPass && (
              <span>
                <RiErrorWarningLine className="ri" /> {errors.confirmPass}
              </span>
            )}
          </div>
          <Button primary type="submit">
            CREATE AN ACCOUNT
          </Button>
        </form>
        <StyledLink to="/signIn">
          <p>
            Have an account? <span>Sign in</span>
          </p>
        </StyledLink>
      </Card>
    </Container>
  )
}
