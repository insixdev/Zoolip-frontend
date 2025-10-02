import { observer } from "mobx-react-lite";
import { useAuth } from "@/features/auth/useAuth";
import { useNavigate } from "react-router";
import { RegisterUserResponse, UserAppRegister, } from "../../features/auth/authService";
import { useState } from "react";
import { UserApp } from "@/features/users/userType";

// TODO: meterle a ssr rendering para mas seguridad 
/**
 * logic
 * */

/** 
 * observer de mobx es para que el componente simpre se renderize cuando un hook haga alguna accion 
 * es decir que register se renderizara siempre cada vez que algo cambie
 * */


const Register = observer(() => {

  type RolType = "ADMIN" | "USER" | "GUEST";
  //  const ctx = useContext(AuthContext);
  // por si ya esta registrado 
  // estado local
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState<RolType>("USER");

  const registerLogic = async () => {
    // nuestro user 
    const newUser: UserAppRegister = { username, password, rol }
    const regSuc: RegisterUserResponse = await register(newUser);
    const succesLogin = (loginSuc: UserApp | RegisterUserResponse) => {
      alert("logeado con exito " + loginSuc) // para debuh
      navigate("/")
    }

    console.log(regSuc.message)
    // primero intentamos registrar
    if (regSuc.status != "error") {
      // si fuer exitoso logeamos automaticamente 
      const loginSuc = await login(newUser);
      if (loginSuc.status) {
        succesLogin(loginSuc)
      } else {
        alert("usuario se creo pero no se pudo inciciar sesion")
      }
    }
    else {
      const loginSuc = await login(newUser);
      if (loginSuc) {
        succesLogin(loginSuc);
      } else {
        alert("no se puedo registrar el usuario: " + regSuc.message)
      }
    }
  }
  // function cuando el usuario clickea el boton
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    registerLogic();

    setUsername("");
    setPassword("");
    setRol("USER");
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

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Register</button>
      </form>
    </div>
  );


})
export default Register;

