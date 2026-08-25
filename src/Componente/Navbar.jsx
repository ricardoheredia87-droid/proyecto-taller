import { Link } from "react-router-dom";
import Logo from "../../public/logoMAS.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  return (
    <div className="bg-transparent w-full h-10 md:h-15  text-[#ffffff] flex items-center justify-between">
      <Link to="/" className="flex items-center gap-5 text-2xl font-bold">
        <img
          src={Logo}
          alt="MAS"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </Link>
      <div className="hidden md:flex items-center gap-10 xl:gap-12 font-medium">
        <Link to="/" className="cuersor/pointer">
          Inicio
        </Link>
        <Link to="/Servicio" className="cursor-pointer">
          Servicios
        </Link>
        <Link to="/login" className="cursor-pointer">
          Promociones
        </Link>
        <Link to="/abaut" className="cursor-pointer">
          Proceso
        </Link>
        <Link to="/Contacto" className="cursor-pointer">
          Contacto
        </Link>
        <button className="py-2 px-4 rounded-3xl bg-blue-900 text-white cursor-pointer">
          Agregar cita
        </button>
      </div>
      <button onClick={toggleMenu} className=" md:hidden cursor-pointer">
        {menuAbierto ? <X /> : <Menu />}
      </button>
      {menuAbierto && (
        <div className="absolute top-10 right-0 w-1/2 bg-blue-950 flex flex-col items-center gap-6 py-8 font-medium md:hidden z-40 shadow-lg rounded-b-xl">
          <Link to="/" onClick={toggleMenu} className="cursor-pointer">
            Inicio
          </Link>
          <Link to="/Servicio" onClick={toggleMenu} className="cursor-pointer">
            Servicios
          </Link>
          <Link to="/login" onClick={toggleMenu} className="cursor-pointer">
            Promociones
          </Link>
          <Link to="/abaut" onClick={toggleMenu} className="cursor-pointer">
            Proceso
          </Link>
          <Link to="/Contacto" onClick={toggleMenu} className="cursor-pointer">
            Contacto
          </Link>
          <button
            onClick={toggleMenu}
            className="py-2 px-8 rounded-3xl bg-blue-700 text-white cursor-pointer mt-2"
          >
            Agregar
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
