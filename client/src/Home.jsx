import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Header from "./Header";

import "./home.css";
function Home() {
  return (
    <div>
      <Header text='signup'/>
      <main>
        <div className="main__header">
          <div className="main__title">login into your account</div>
          <div className="main__paragraph">
            join the community and become part of people decision making and
            also, let them take part in yours
          </div>
        </div>
        <div className="action__container">
          <form className="login-form">
            <input type="text" className="input" placeholder="email" />
            <input type="password" className="input" placeholder="password" />

            <button className="btn">login to your account</button>
          </form>

          <div className="btn__container">
            <div className="res-signin">sign in with:</div>
            <a href="#" className="btn signin__btn">
              {" "}
              <i class="fab fa-google    "></i> <p>sign-in with google</p>
            </a>
            <a href="#" className="btn signin__btn">
              {" "}
              <i class="fab fa-facebook    "></i> <p>sign-in with facebook</p>
            </a>
            <a href="#" className="btn signin__btn">
              {" "}
              <i class="fas fa-user-secret    "></i> <p>continue anonymously</p>
            </a>
          </div>
        </div>
      </main>
      <div className="forgot-password">forgot password?</div>
      <footer>
        <p> privacy policy</p>
        <p>
          {" "}
          <i class="fa fa-copyright" aria-hidden="true"></i> cyberRocket-team
        </p>
      </footer>
    </div>
  );
}

export default Home;
