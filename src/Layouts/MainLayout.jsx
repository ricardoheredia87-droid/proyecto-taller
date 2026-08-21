import { Outlet } from "react-router-dom";
import NavBar from "../Componente/Navbar";


const MainLayout = () => {
  return (
    <div className=" h-full w-full bg-black text-[#ffffff] px-4 md:px-8 lg:px-32 2xl:px-64">
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;
