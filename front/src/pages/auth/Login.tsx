import React, { useState } from "react";
import {useAuth} from '../../features/auth/useAuth.ts'
import { observer } from "mobx-react-lite";
import type { userApp } from "@/features/users";

// import { Link, Route } from "react-router-dom"


import Register from "./Register.tsx";
import { Link } from "react-router";

//
// interface LoginProps {
//   onLogin: (username: string, password: string) => void;
// }
const Login = observer(() => {
  // usamos el auth
  const { login } = useAuth();

  // estado local
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function cuando el usuario clickea el boton
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user: userApp = {username, password}
      await login(user);

    } catch (err) {
      alert("error en el login: " + err)

    }
    //onLogin(username, password);
    // Limpiar inputs si quieres
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            required
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            required
          />
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Login</button>
      </form>
      <Link to="/register">register</Link>
    </div>
  );
})
export default Login;

