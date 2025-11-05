import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, saveUserInfo } from "../utils/Common";
import { login } from "../api/UsersLog";

function Login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect away from /login if already logged in
  useEffect(() => {
    if (isLoggedIn()) navigate("/", { replace: true });
  }, [navigate]);

  const handleOnClick = async () => {
    setError("");
    try {
      const res = await login(user); // adapt to your login API signature
      saveUserInfo(res); // ensure this saves the same key isLoggedIn reads
      navigate("/", { replace: true });
    } catch {
      setError("Invalid credentials");
    }
  };

  // Prevent rendering the login form briefly if already logged in
  if (isLoggedIn()) return null;

  return (
    <div>
      <h2>Login</h2>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleOnClick}>Login</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default Login;