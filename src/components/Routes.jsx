import { Switch, Route, Redirect } from "react-router"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { ResetPass } from "./ResetPass"
import { DashBoard } from "./DashBoard"
export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/react_authentication_app"]}>
          <Redirect from="/" to="/react_authentication_app/signIn" />
        </Route>
        <Route path="/react_authentication_app/signIn">
          <SignIn />
        </Route>
        <Route path="/react_authentication_app/signUp">
          <SignUp />
        </Route>
        <Route path="/react_authentication_app/reset_password">
          <ResetPass />
        </Route>
        <Route path="/react_authentication_app/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </>
  )
}
