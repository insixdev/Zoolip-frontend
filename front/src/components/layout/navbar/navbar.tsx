import Button from "@/components/ui/button/Button";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm w-full absolute">
      <div className="w-full max-w-screen-2x1 mx-auto px-4 md:px-4 lg:px-4 xl:px-4 flex items-center justify-between">
        {/* Extremo Izquierdo: Inicio */}
        <div className="flex-none">
          <Link to="/" className="btn btn-ghost normal-case text-2xl font-semibold">Inicio</Link>
        </div>

        {/* Centro-Izquierda: Links de navegación */}
        <div className="flex gap-2 ml-20 justify-between">
          <Link to="/adoptar" className="btn btn-ghost normal-case text-lg">Adoptar</Link>
        <Link to="/comunidad" className="btn btn-ghost normal-case text-lg">Comunidad</Link>
        <Link to="/acerca" className="btn btn-ghost normal-case text-lg">Acerca</Link>
        </div>

        {/* Espaciador flexible */}
        <div className="flex-1"></div>
        <Button variant="primary" size="md" >Sign in</Button>
        <Button variant="primary">Sign up</Button>
        {/* Extremo Derecho: Botones de acciones + Perfil */}
      </div>
    </div>
  );
}
