import { useState, useEffect } from "react"
import { StyledFooter } from "../styles/Footer.styled"

export const Footer = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => setDate(new Date()), [])
  return (
    <StyledFooter>
      <p>&copy;{date.getFullYear()} DAPDEV</p>
    </StyledFooter>
  )
}
