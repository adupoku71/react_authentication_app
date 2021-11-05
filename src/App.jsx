import { Nav } from "./components/Nav"
// import SignIn from "./components/SignIn"
// import { SignUp } from "./components/SignUp"
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
      {/* <SignIn />
      <SignUp /> */}
      <Footer />
    </MainContainer>
  )
}
