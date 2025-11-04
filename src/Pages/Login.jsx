import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/UsersLog";

function Login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleOnClick = () => {
    setError(""); //initially the error is empty

    login(user)
      .then(() => {
        navigate("/"); //if the login is successful then navigate to home page
      })
      .catch(() => {
        setError("Login Failed. Please try again."); //if login fails then set the error message
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };
  return (
    <>
      <div>Login</div>
      <div>
        <input
          id="name"
          type="text"
          placeholder="type your name"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        /><br/>
        <label htmlFor="password" className="login-password">
          Password :
        </label><br />
        <button className="login-button" onClick={handleOnClick}>
          Login
        </button>
        <br/><br/>
        <label className="error">{error}</label>
      </div>
    </>
  );
}

export default Login;
