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

        <div className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-400 text-slate-900 font-bold px-6 py-3.5 rounded-2xl shadow-lg select-none cursor-pointer">
          <div className="text-left leading-tight text-sm font-bold">
            <div>Agendar por</div>
            <div>WhatsApp</div>
          </div>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-blue-500 text-blue-500 font-bold px-8 py-3.5 rounded-2xl text-center leading-tight text-sm select-none cursor-pointer">
          <div>
            <div>Solicitar</div>
            <div>Cotización</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
