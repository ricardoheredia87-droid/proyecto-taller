import { Outlet } from "react-router-dom";
import NavBar from "../Componente/Navbar";
import Footer from "../Componente/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-[#ffffff] px-4 md:px-8 lg:px-32 2xl:px-64">
      <NavBar />
      <main className="flex-1">
      <Outlet />
       </main>
     <Footer/> 
    </div>
  );
};

export default MainLayout;
