import Logo from "../assets/screen.png";

export const ServicioPage = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-white bg-slate-950">
      
    
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl mt-6">
        <h1 className="text-4xl font-bold capitalize">Servicio Especializado</h1>
        <p className="text-gray-300 max-w-xl">
          Mantenimiento de alta precisión para vehículos multimarca.
        </p>
      </div>

      
      <div className="flex flex-wrap gap-4 justify-center w-full max-w-6xl my-8">
        
       
        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
          <span className="text-blue-500 text-2xl">🛢️</span>
          <h3 className="font-bold text-base">Cambio de aceite</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lubricantes sintéticos premium que extienden la vida útil de tu motor.
          </p>
        </div>

        
        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
          <span className="text-blue-500 text-2xl">💻</span>
          <h3 className="font-bold text-base">Diagnóstico computarizado</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Escaneo profundo de módulos electrónicos para detectar fallas precisas.
          </p>
        </div>

        
        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
          <span className="text-blue-500 text-2xl">🔧</span>
          <h3 className="font-bold text-base">Mecánica general</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Reparaciones integrales de motor, transmisión y sistemas auxiliares.
          </p>
        </div>

        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
          <span className="text-blue-500 text-2xl">🛑</span>
          <h3 className="font-bold text-base">Frenos</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Revisión de discos, rectificación de balatas y purgado de sistema ABS.
          </p>
        </div>

        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
          <span className="text-blue-500 text-2xl">🚗</span>
          <h3 className="font-bold text-base">Suspensión</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Alineación, balanceo y reemplazo de amortiguadores para máxima suavidad.
          </p>
        </div>

        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer ">
          <span className="text-blue-500 text-2xl">⚡</span>
          <h3 className="font-bold text-base">Electricidad automotriz</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Reparación de alternadores, marchas y sistema de iluminación.
          </p>
        </div>

      </div>

      
      <div className="w-full max-w-md flex justify-center">
        <img 
          src={Logo}
          alt="Vista previa de servicios"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>

    </div>
  );
};

export default ServicioPage;