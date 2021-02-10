import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, Tasks } from "./Screens";
import { Layout, Main } from "./components";

const App = () => {
  return (
    <Router>
      <Layout>
        <Main>
          <Switch>
            <Route path="/tasks" component={Tasks} />
            <Route path="/" component={Ejemplo} />
          </Switch>
        </Main>
      </Layout>
    </Router>
  );
};

export default App;
