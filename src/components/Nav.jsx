import { StyledLink, StyledNav } from "../styles/Nav.styled"
// import { Link } from "react-router-dom"
export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <h2>Auth</h2>
      </StyledLink>
    </StyledNav>
  )
}
