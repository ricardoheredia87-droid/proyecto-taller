import {
  ClipboardCheck,
  Search,
  Wrench,
  ShieldCheck,
  Car,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const AbautsPage = () => {
  return (
    <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">
            Transparencia & Paso a Paso
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 tracking-tight">
            Proceso de Atención
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Conoce el recorrido de tu auto desde el momento en que ingresa al
            taller hasta que te entregamos las llaves.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-10 my-12">
          <div className="relative pl-8 sm:pl-12 group">
            <div className="absolute -left-[25px] top-1.5 bg-slate-900 border-2 border-blue-500 p-2.5 rounded-full text-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <ClipboardCheck className="w-7 h-7" />
            </div>
            <span className="hidden sm:block absolute -left-32 top-3 text-xs font-extrabold uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
              Paso 01
            </span>
            <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Ingreso del vehículo
                </span>
                <span className="text-2xl font-black text-slate-700/60 select-none">
                  #01
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Recepción e Inspección
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Recibimos el vehículo, tomamos los datos, documentamos el estado
                inicial y realizamos un escaneo rápido para detectar fallas.
              </p>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-12 group">
            <div className="absolute -left-[25px] top-1.5 bg-slate-900 border-2 border-blue-500 p-2.5 rounded-full text-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Search className="w-7 h-7" />
            </div>
            <span className="hidden sm:block absolute -left-32 top-3 text-xs font-extrabold uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
              Paso 02
            </span>
            <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Evaluación técnica
                </span>
                <span className="text-2xl font-black text-slate-700/60 select-none">
                  #02
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Diagnóstico y Presupuesto
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Revisamos la falla a fondo para armar una cotización clara con
                repuestos y mano de obra antes de realizar cualquier arreglo.
              </p>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-12 group">
            <div className="absolute -left-[25px] top-1.5 bg-slate-900 border-2 border-blue-500 p-2.5 rounded-full text-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-7 h-7" />
            </div>
            <span className="hidden sm:block absolute -left-32 top-3 text-xs font-extrabold uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
              Paso 03
            </span>
            <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Manos a la obra
                </span>
                <span className="text-2xl font-black text-slate-700/60 select-none">
                  #03
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Reparación y Mantenimiento
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Nuestros mecánicos llevan a cabo los trabajos acordados
                empleando repuestos de calidad y las herramientas requeridas.
              </p>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-12 group">
            <div className="absolute -left-[25px] top-1.5 bg-slate-900 border-2 border-blue-500 p-2.5 rounded-full text-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="hidden sm:block absolute -left-32 top-3 text-xs font-extrabold uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
              Paso 04
            </span>
            <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Verificación de seguridad
                </span>
                <span className="text-2xl font-black text-slate-700/60 select-none">
                  #04
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Control de Calidad
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Efectuamos pruebas de ruta, escaneo final de comprobación y
                limpieza general para garantizar un resultado óptimo.
              </p>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-12 group">
            <div className="absolute -left-[25px] top-1.5 bg-slate-900 border-2 border-blue-500 p-2.5 rounded-full text-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Car className="w-7 h-7" />
            </div>
            <span className="hidden sm:block absolute -left-32 top-3 text-xs font-extrabold uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
              Paso 05
            </span>
            <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Listo para la ruta
                </span>
                <span className="text-2xl font-black text-slate-700/60 select-none">
                  #05
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Entrega y Garantía
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Entregamos el vehículo al cliente junto con el informe final
                detallado, la factura y el comprobante de garantía.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-950/50 via-slate-900 to-slate-900 border border-blue-900/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-blue-600/20 text-blue-400 rounded-2xl shrink-0 border border-blue-500/30">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Seguimiento por WhatsApp
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Enviamos fotos y actualizaciones sobre el avance del trabajo de
                forma continua.
              </p>
            </div>
          </div>

          <button className="w-full md:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
            <span>Agendar turno</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default AbautsPage;
