import styled from "styled-components"
import { Link } from "react-router-dom"
export const StyledNav = styled.nav`
  border-bottom: 1px solid lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  Link {
    display: flex;
    justify-content: center;
    align-items: inherit;
    border: 1px solid lightblue;
    background: lightblue;
    color: white;
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
`
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: inherit;
  border: 1px solid lightblue;
  background: lightblue;
  color: white;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
