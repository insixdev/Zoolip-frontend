import React, { useContext, useState } from "react";
import {useAuth} from './auth/useAuth.ts'
import { observer } from "mobx-react-lite";
import { userApp } from "./user/userType.ts";
import { AuthContext } from "./auth/authContext.ts";
//
// interface LoginProps {
//   onLogin: (username: string, password: string) => void;
// }
const Login = observer(() => {
  // usamos el auth
  const { login } = useAuth();
  // por si ya esta registrado 
  const auth = useContext(AuthContext)

  // estado local
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  // function cuando el usuario clickea el boton
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;

    try {
      const newUser = await auth.register({username, password, rol});
      console.log("puto : " + newUser)
      alert("registrado con exito")
    }
    catch(err){
      alert(new Error("registro patead: " + err))
    }
    // Limpiar inputs si quieres
    setUsername("");
    setPassword("");
    setRol("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Register</h2>
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

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="role">Rol:</label>
          <select
            id="role"
            value={rol} // suponiendo que tenés un state: const [role, setRole] = useState("")
            onChange={(e) => setRol(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            required
          >
            <option value="">Seleccione un rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
            <option value="guest">Invitado</option>
          </select>
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Login</button>
      </form>
    </div>
  );


})
export default Login;

