import { Switch, Route, Redirect } from "react-router"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { ResetPass } from "./ResetPass"
import { DashBoard } from "./DashBoard"
export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/react_authentication_app" />
        </Route>
        <Route path="/react_authentication_app">
          <Redirect from="/react_authentication_app" to="/signIn" />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/reset_password">
          <ResetPass />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </>
  )
}
