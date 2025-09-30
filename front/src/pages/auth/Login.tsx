import React, { useEffect, useState } from "react";
import { useAuth } from '../../features/auth/useAuth.ts'
import { observer } from "mobx-react-lite";

// import { Link, Route } from "react-router-dom"


import { Link, useNavigate } from "react-router";
import { UserRequest } from "../../features/auth/authService.ts";


const Login = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { /**user,*/ login } = useAuth();

  const navigate = useNavigate();

  const loginLogic = async () => {
    const newUser: UserRequest = { username, password }
    try {
      const logSuc = await login(newUser);
      if (logSuc) {
        navigate("/");
        alert("logeado con exito")
      }
      else {
      alert("error al iniciar sesion:"  )
      }

    } catch (err) {
      alert("error en el login: " + err)
    }
  }
  // usamos el auth

  // estado local
  // useEffect(() => {
  //   if(user.)
  //
  // })
  const handleLogin = async () => {
    loginLogic();
    setUsername("");
    setPassword("");

  }

  // function cuando el usuario clickea el boton
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
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

