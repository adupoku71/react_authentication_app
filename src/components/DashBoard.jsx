import { Container } from "../styles/Container"
import { Button } from "../styles/Button"
export const DashBoard = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome to the Dashboard</h2>
        <Button style={{ marginTop: "20px", maxWidth: "150px" }} primary>
          LOGOUT
        </Button>
      </div>
    </Container>
  )
}
