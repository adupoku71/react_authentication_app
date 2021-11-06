import { Nav } from "./components/Nav"

import { Footer } from "./components/Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import { MainContainer } from "./styles/MainContainer"
import { Routes } from "./components/Routes"

export default function App() {
  return (
    <MainContainer>
      <GlobalStyle />

      <Nav />

      <Routes />

      <Footer />
    </MainContainer>
  )
}
