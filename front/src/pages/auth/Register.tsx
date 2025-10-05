import { observer } from "mobx-react-lite";
import { useAuth } from "@/features/auth/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { RegisterUserResponse, UserAppRegister } from "../../features/auth/authService";
import { useState } from "react";
import { LoginResponseFull } from "@/features/users/userType";
import { Navbar } from "@/components/layout";

type RolType = "ADMIN" | "USER" | "GUEST";

const Register = observer(() => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rol, setRol] = useState<RolType>("USER");

  const registerLogic = async () => {

    const newUser: UserAppRegister = { username, password, rol };
    const regSuc: RegisterUserResponse = await register(newUser);
    const successLogin = (loginSuc: LoginResponseFull  ) => {
      alert("Registrado e iniciado sesión con éxito" + loginSuc.body.message)
      navigate("/");
    };
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log(regSuc.message);

    if (regSuc.status !== "error") {
      const loginSuc: LoginResponseFull = await login(newUser);
      if (loginSuc.body.status != "error") {
        successLogin(loginSuc);
        alert("operacion exitosa:" + loginSuc.body.message);
      } else {
        alert("Usuario creado pero no se pudo iniciar sesión");
      }
    } else {
      // si no se registro se intenta iniciar sesion pq 
      // pueda que exista el usuario
      const loginSuc = await login(newUser);
      if (loginSuc.body.status != "error") {
        successLogin(loginSuc);
        alert("operacion exitosa:" + loginSuc.body.message);
      } else {
        alert("No se pudo registrar el usuario: " + regSuc.message);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerLogic();
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setRol("USER");
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenedor Principal */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="card w-full max-w-md bg-base-200 shadow-xl">
          
          {/* Encabezado */}
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-center justify-center mb-2">
              Crear Cuenta
            </h2>

            <p className="text-center text-base-content/10 mb-6">
              Regístrate para comenzar
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
                  placeholder="Elige un nombre de usuario"
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
                  placeholder="Crea una contraseña segura"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Campo Confirmar Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Confirmar Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Campo Rol (Select) */}
              {/* <div className="form-control"> */}
              {/*   <label className="label"> */}
              {/*     <span className="label-text font-medium">Tipo de Usuario</span> */}
              {/*   </label> */}
              {/*   <select */}
              {/*     value={rol} */}
              {/*     onChange={(e) => setRol(e.target.value as RolType)} */}
              {/*     className="select select-bordered w-full" */}
              {/*   > */}
              {/*     <option value="USER">Usuario</option> */}
              {/*     <option value="ADMIN">Administrador</option> */}
              {/*     <option value="GUEST">Invitado</option> */}
              {/*   </select> */}
              {/* </div> */}

              {/* Checkbox Términos y Condiciones */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" required className="checkbox checkbox-primary" />
                  <span className="label-text">
                    Acepto los{" "}
                    <a href="#" className="link link-primary">
                      términos y condiciones
                    </a>
                  </span>
                </label>
              </div>

              {/* Botón Submit */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Crear Cuenta
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider">O</div>

            {/* Link a Login */}
            <p className="text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="link link-primary font-medium">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Register;
