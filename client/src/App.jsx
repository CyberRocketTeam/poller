import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Feed from "./Feed";
import Home from "./Home";
import SignUp from "./SignUp";

import { Consumer } from "./context";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/signup" component={SignUp} />

          <Route path="/feed">
            <Feed />
          </Route>

          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
