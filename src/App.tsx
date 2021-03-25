import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register/register";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
