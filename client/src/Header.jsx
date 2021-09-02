import React, { useState } from "react";

import "./home.css";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
function Header({ text }) {
  /////////do not touch by mistake or suffer the consequences of your stupidity//////////

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
    console.log(open);
  }
  function handleCloseMenu() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className="header">
      <nav>
        <div className="nav__center">
          <Link to='/'><h1 className="nav__title">poller</h1></Link>
          
          <div className="container" onClick={handleClick}>
            {open ? (
              <i class="fas fa-times    nav__times"></i>
            ) : (
              <i className="fas fa-bars   nav__bars "></i>
            )}
          </div>
        </div>

        <div className={open ? "nav__list active" : "nav__list "}>
          <ul onClick={handleCloseMenu}>
            <li className="nav__link">
              <a href="#">about </a>
            </li>
            <li className="nav__link">
              <a href="#">learn more</a>
            </li>
            <li className="nav__link">
              <a href="#">support</a>
            </li>
          </ul>
          <Link to={text == "signup" ? "signup" : "/"} className="btn nav__btn">
       
            {text}
         
            
          </Link>
       
        </div>
      </nav>
    </div>
  );
}

export default Header;
