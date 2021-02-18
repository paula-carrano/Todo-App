import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, Tasks, Users, Login } from "./Screens";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path='/tasks' component={Tasks} />
        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />

        <Route path='/' component={Ejemplo} />
      </Switch>
    </Router>
  );
};

export default App;
