import { Switch, Route, Redirect } from "react-router"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
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
      </Switch>
    </>
  )
}
