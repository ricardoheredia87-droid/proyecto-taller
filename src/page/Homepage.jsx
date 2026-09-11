import Logo from "../../public/screen.png";

export const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden shadow-2xl">
      <img
        src={Logo}
        alt="Servicio Automotor"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start p-8 md:p-16 text-white gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Lo que tu vehículo merece.
        </h1>

        <p className="max-w-xl text-gray-200 text-base md:text-lg leading-relaxed">
          En MAS Servicio Automotor ofrecemos mantenimiento preventivo y
          correctivo con tecnología de diagnóstico, técnicos especializados y
          garantías en cada servicio.
        </p>
        <a className=" flex items-center justify-center gap-3  bg-amber-400 hover:bg-blue-700 text-black font-bold px-6 py-3.5 rounded-2xl shadow-lg select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-400/20"  
            href="https://wa.me/+5493815512010"
            target="_blank"
            rel="noopener noreferrer"
             >
          
            <span className="text-sm font-bold">Agendar por WhatsApp</span>
        

         { /*<a
            link="/contacto"
            className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-500 font-bold px-8 py-3.5 rounded-2xl text-center text-sm select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <span className="text-sm font-bold">Solicitar Cotización</span>
          </a>*/}
        </a>
      </div>
    </div>
  );
};

export default Homepage;
