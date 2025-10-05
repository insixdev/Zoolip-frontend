import React, { useState } from "react";
import { useAuth } from '../../features/auth';
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { UserRequest } from '../../features/auth';
import { Navbar } from "@/components/layout";

const Login = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginLogic = async () => {
    const newUser: UserRequest = { username, password }
    try {
      const logSuc = await login(newUser);
      if (logSuc.body.status != "error") {
        navigate("/profile");
        alert("Operacion exitos: " + logSuc.body.message)
      } else {
        alert("Error al iniciar sesión: " + logSuc.body.message)
      }
    } catch (err) {
      alert("Error en el login: " + err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginLogic();
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenedor Principal */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          
          {/* Encabezado */}
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-center justify-center mb-2">
              Bienvenido
            </h2>
            <p className="text-center text-base-content/60 mb-6">
              Inicia sesión en tu cuenta
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Campo Username */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Usuario</span>
                </label>
                <input
                  type="text"
                  placeholder="Ingresa tu usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Campo Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    ¿Olvidaste tu contraseña?
                  </a>
                </label>
              </div>

              {/* Botón Submit */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Iniciar Sesión
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider">O</div>

            {/* Link a Registro */}
            <p className="text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="link link-primary font-medium">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
