import Button from "@/components/ui/button/Button";
import { Link } from "react-router";

type NavbarProps = {
  className?: string
}

export default function Navbar({ className = "" }: NavbarProps) {
  return (
    <div className={`navbar shadow-sm w-full ${className}`}>
      <div className="w-full max-w-screen-2x1 mx-auto px-4 md:px-4 lg:px-4 xl:px-4 flex items-center justify-between">
        {/* Inicio */}
        <div className="flex-none">
          <Link to="/" className="btn btn-ghost normal-case text-2xl font-semibold">Inicio</Link>
        </div>

        {/* Links */}
        <div className="flex gap-2 ml-20 justify-between">
          <Link to="/adoptar" className="btn btn-ghost normal-case text-lg">Adoptar</Link>
          <Link to="/comunidad" className="btn btn-ghost normal-case text-lg">Comunidad</Link>
          <Link to="/acerca" className="btn btn-ghost normal-case text-lg">Acerca</Link>
        </div>

        <div className="flex-1"></div>

        {/* Botones */}
        <Button variant="secondary" size="xl">Sign in</Button>
        <Button variant="especial" size="xl">Sign up</Button>
      </div>
    </div>
  )
}

