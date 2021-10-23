import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home";

function Login() {
  return (
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default Login;
