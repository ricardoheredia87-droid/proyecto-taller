export const Login = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 border-b border-slate-900 p-6 flex flex-col gap-8 justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-10 border border-slate-900 p-6 rounded-2xl bg-amber-300">
        <div className="text-left flex flex-col gap-12 max-w-xl">
          <h2 className="font-bold text-black text-3xl sm:text-4xl">
            Promoción Especial
          </h2>
          <p className="text-slate-900 text-base font-medium leading-relaxed">
            Obtené un 15% de descuento en tu primer servicio y recibí un
            diagnóstico general sin costo adicional.
          </p>
        </div>
        <button className="rounded-xl border border-black bg-black text-white font-bold text-lg px-6 py-3 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-pointer whitespace-nowrap">
          Quiero mi descuento
        </button>
      </div>

      <h1 className="text-4xl font-bold">Lo que dicen nuestor cliente</h1>

      <div className="w-full max-w-6xl flex flex-wrap gap-4 justify-center">
        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left">
          <span className="text-amber-400 text-xl">⭐⭐⭐⭐⭐</span>
          <p className="text-gray-300 text-base font-medium leading-relaxed">
            "Excelente servicio, muy profesional, mi coche quedó como nuevo y el
            diagnóstico fue muy acertado."
          </p>
        </div>

        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left">
          <span className="text-amber-400 text-xl">⭐⭐⭐⭐⭐</span>
          <p className="text-gray-300 text-base font-medium leading-relaxed">
            "La atención por WhatsApp es súper rápida. El presupuesto fue justo
            y no intentaron venderme nada extra."
          </p>
        </div>

        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left">
          <span className="text-amber-400 text-xl">⭐⭐⭐⭐⭐</span>
          <p className="text-gray-300 text-base font-medium leading-relaxed">
            "Llevé mi auto para afinación y el equipo es impresionante.
            Realmente conocen de tecnología."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
