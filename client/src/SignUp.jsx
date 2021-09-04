import React from "react";
import { useState } from "react";
import Header from "./Header";

import "./signup.css";
import { Link } from "react-router-dom";
function SignUp() {
  const createUser = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setConfirmedPassword(password);
      console.log(confirmedPassword);
      return;
    } else {
      alert("make sure the password is correct");
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <div className="signup">
      <Header text="login" />

      <div className="form">
        <form className="signup-form">
          <div className="name">
            <input
              type="text"
              className="input"
              placeholder="firstname"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
            <input
              type="text"
              className="input"
              placeholder="lastname"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
            />
          </div>
          <h1>{value.user.name}</h1>
          <input
            type="email"
            className="input"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <div className="password">
            <input
              type="password"
              className="input"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <input
              type="password"
              className="input"
              placeholder="confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
          </div>

          <Link
            to="/feed"
            className="btn nav__btn"
            onClick={createUser}
            type="submit"
          >
            create an account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
