import { Link } from "react-router-dom";
import Logo from "../../public/logoMAS.png";
import { Menu,X } from 'lucide-react';
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
              <button
                 onClick={toggleMenu}  
                 className="md:hidden cursor-pointer">
                  {menuAbierto ?  <X />:<Menu />}
               </button>
                   
              <div className=" hidden md:flex flex-col gap-10 xl:gap-12 font-medium">
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
     </div>
  );
}
export default NavBar;