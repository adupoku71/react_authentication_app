import styled from "styled-components"
import { Link } from "react-router-dom"
export const Card = styled.div`
  width: 340px;
  /* min-height: 400px; */
  border-radius: 5px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 1.95px 2.6px; */
  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px; */
  background: #fff;
  margin: 20px auto 20px;
  h2 {
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 14px;
    color: #757373;
    text-align: center;
    letter-spacing: 1px;

    span {
      text-decoration: underline;
      color: lightblue;
      margin-bottom: 10px;
    }
  }
`

export const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #fff;
`
