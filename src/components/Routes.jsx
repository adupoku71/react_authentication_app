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
          <Redirect from="/" to="/signIn" />
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
