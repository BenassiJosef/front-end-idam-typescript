import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register/Register";
import WildCard from "./pages/WildCard/WildCard";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Verify from "./pages/Verify/Verify";
import Success from "./pages/Success/Success";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verify" component={Verify} />
            <Route exact path="/success" component={Success} />
            <Route component={WildCard} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
export default App;
