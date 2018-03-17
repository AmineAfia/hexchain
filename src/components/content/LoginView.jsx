import React from "react";
import "./LoginView.scss";

const USERNAME = "Username";
const PASSWORD = "Password";
const LOGIN = "Login";

const LoginView = () => {
  return (
    <div className="login">
      <div className="login-container">
        <input type="text" className="login-name" placeholder={USERNAME} />
        <input className="login-password" placeholder={PASSWORD} />
        <button className="login-button">{LOGIN}</button>
      </div>
    </div>
  );
};

export default LoginView;
