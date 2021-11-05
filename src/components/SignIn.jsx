import { Link } from "react-router-dom"
import { Button } from "../styles/Button"
import { Card } from "../styles/Card"
import { Container } from "../styles/Container"
import { Input } from "../styles/Form.styled"
export const SignIn = () => {
  return (
    <Container>
      <Card>
        <h2>Sign In</h2>
        <form>
          <Input type="email" id="email" name="email" placeholder="Email" />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <Button primary type="submit">
            SIGN IN
          </Button>
        </form>
        <Link to="/signUp">
          <Button>CREATE AN ACCOUNT</Button>
        </Link>
      </Card>
    </Container>
  )
}
