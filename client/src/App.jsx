import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route  path="/"  component={Home} exact />
        <Route path="/signup" component={SignUp} exact />

      </div>
    </BrowserRouter>
  );
}

export default App;
