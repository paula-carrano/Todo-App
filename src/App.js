import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, Tasks } from "./Screens";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path='/tasks' component={Tasks} />
        <Route path='/' component={Ejemplo} />
      </Switch>
    </Router>
  );
};

export default App;
