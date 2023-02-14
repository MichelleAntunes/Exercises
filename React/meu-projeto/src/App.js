import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from " react-router-dom";

import Home from "./components/Home";
import Contato from "./components/Contato";
import Empresa from "./components/Empresa";

function App() {
  return;
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/empresa">
        <Empresa />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
    </Switch>
  </Router>;
}

export default App;
