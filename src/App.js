import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

import {Landing} from './pages/Landing'
import {SignIn} from './pages/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li> 
          </ul>
        </div> 
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
