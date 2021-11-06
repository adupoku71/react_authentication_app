import { Card, StyledLink } from "../styles/Card"
import { Container } from "../styles/Container"
import { Input } from "../styles/Form.styled"
import { Button } from "../styles/Button"
export const ResetPass = () => {
  return (
    <Container>
      <Card>
        <h2 style={{ marginBottom: "0" }}>Forgot Password</h2>
        <p
          style={{ fontSize: "12px", textAlign: "left", marginBottom: "20px" }}
        >
          Please enter the email address that you used to register your account
          and we will send you an email with a link to reset your password
        </p>
        <form>
          <Input type="email" placeholder="Email" />
          <Button primary type="submit">
            RESET MY PASSWORD
          </Button>
        </form>
        <StyledLink to="/signIn">
          <p style={{ color: "lightblue" }}>
            Return to <span>Sign In</span>
          </p>
        </StyledLink>
      </Card>
    </Container>
  )
}
