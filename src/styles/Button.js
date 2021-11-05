import styled from "styled-components"

export const Button = styled.button`
  font-weight: bold;
  letter-spacing: 1px;
  width: 100%;
  background: ${({ primary }) => (primary ? "lightblue" : "white")};
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-bottom: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ primary }) => (primary ? "white" : "black")};
`
