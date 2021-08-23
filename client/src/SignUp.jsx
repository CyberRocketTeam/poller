import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./signup.css";
function SignUp() {
  const [userInfo, setUserInfo] = useState({
   
  });
  function handleInput(e) {
    let value = e.target.value;
    const id = e.target.dataset.id;
    setUserInfo({ ...userInfo, id: value });
    console.log({ ...userInfo, id: value });
  }
  return (
    <div className="signup">
      <Header text="login" />
      <div className="form">
        <form className="signup-form">
          <div className="name">
            {" "}
            <input
              type="text"
              className="input"
              placeholder="firstname"
              onChange={(e) => {
                let value = e.target.value;
                setUserInfo({ ...userInfo, firstname: value });
                console.log(userInfo)
              }}
            />
            <input
              type="text"
              className="input"
              placeholder="lastname"
              onChange={(e) => {
                let value = e.target.value;
                setUserInfo({ ...userInfo, lastname: value });
                console.log(userInfo)
              }}
            
            />
          </div>

          <input
            type="email"
            className="input"
            placeholder="email"
            onChange={(e) => {
              let value = e.target.value;
              setUserInfo({ ...userInfo, email: value });
              console.log(userInfo)
            }}
            
          />
          <div className="password">
            <input
              type="password"
              className="input"
              placeholder="password"
              onChange={
                (e) => {
                  let value = e.target.value;
                  setUserInfo({ ...userInfo, password: value });
                  console.log(userInfo)
                }
              }
             
            />
            <input
              type="password"
              className="input"
              placeholder="confirm password"
              onChange={(e) => {
                let value = e.target.value;
                setUserInfo({ ...userInfo, confirmpassword: value });
                console.log(userInfo)
              }}
            
            />
          </div>

          <button className="btn nav__btn">login to your account</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
