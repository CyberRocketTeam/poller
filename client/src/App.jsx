import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";

import { Consumer } from "./components/context";
import Login from "./components/Login";

function App() {
  const [user, setUser]= useState(true)
  return (
   <div className='App'>
      {!user ? (

        <Login />
        
      ) :
        <Feed/>
        
   }
    </div>
  );
}

export default App;
