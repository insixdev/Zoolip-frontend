import { Link } from "react-router";

export default function Navbar() {
  function handleLogin() {

  }

  return (
    <div className="navbar shadow-sm w-full">
      <div className="w-full max-w-screen-2x1 mx-auto px-4 md:px-12 lg:px-12 xl:px-19 flex items-center justify-between">
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

        {/* Extremo Derecho: Botones de acciones + Perfil */}
        <div className="flex-none flex gap-2 items-center">


          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <div className="relative inline-block">
                  <img className="inline-block size-11 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar"/>
                  <span className="absolute top-0 end-0 block size-3 rounded-full ring-2 ring-white bg-teal-400 dark:ring-neutral-900"></span>
                </div>

                <img src="https://via.placeholder.com/150" alt="Perfil" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 w-52 p-2 shadow"
            >
              <li>
                <a href="profile" onClick={handleLogin}>mi perfil </a>
              </li>
              <li><a>Configuración</a></li>
              <li><a>Cerrar Sesión</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
