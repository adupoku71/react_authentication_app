import ReactDOM from "react-dom"
import App from "./App"
import { HashRouter as Router } from "react-router-dom"
import { UserContextProvider } from "./context/UserContextProvider"
ReactDOM.render(
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>,
  document.getElementById("root")
)
