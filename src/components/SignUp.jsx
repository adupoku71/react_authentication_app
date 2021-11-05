import { StyledLink } from "../styles/Card"
import { Button } from "../styles/Button"
import { Card } from "../styles/Card"
import { Container } from "../styles/Container"
import { Input } from "../styles/Form.styled"
export const SignUp = () => {
  return (
    <Container>
      <Card>
        <h2>Sign Up</h2>
        <form>
          <Input type="email" id="email" name="email" placeholder="Email" />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <Input
            type="password"
            id="confirmPass"
            name="confirmPass"
            placeholder="Confirm Password"
          />

          <Button primary type="submit">
            CREATE AN ACCOUNT
          </Button>
        </form>
        <StyledLink to="/">
          <p>
            Have an account? <span>Sign in</span>
          </p>
        </StyledLink>
      </Card>
    </Container>
  )
}
