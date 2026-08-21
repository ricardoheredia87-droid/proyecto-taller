import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./page/Homepage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import AbautsPage from "./page/AbautsPage.jsx";
import Login from "./Componente/Login.jsx";
import Servicio from "./page/ServicioPage.jsx";
import Contacto from "./page/ContactoPage.jsx";


const router = createBrowserRouter([
  {
    element:<MainLayout/>,
  
    children:[
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path:"/Abaut",
        element:<AbautsPage/>,
      }, 
       {
      path:"/Login",
      element:<Login/>,
    },
   {
      path:"/Servicio",
      element:<Servicio/>,
    },
     {
      path:"/Contacto",
      element:<Contacto/>,
    },
    
  
    ],
  },
   
  {
    path:"*",
    element: <div className="h-screen w-screen justify-center items-center bg-emerald-950 text-white font-2xl">Page not found</div>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
    <App/>
    </RouterProvider>
   </StrictMode>,
);
