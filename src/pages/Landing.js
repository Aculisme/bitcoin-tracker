import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import {SignIn} from '../pages/SignIn'
import {SignUp} from '../pages/SignUp'

export function Landing() {
    return (<div>
        <div>
          <ul>
            <li>
            <Link to="/signIn">Sign In</Link>
            </li>
            <li>
            <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
        </div> 
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>

        </Switch>
        </div>);

}