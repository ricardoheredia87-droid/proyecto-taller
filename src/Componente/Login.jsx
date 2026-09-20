import { useState, useEffect } from "react";  
import { MessageSquarePlus, Star } from "lucide-react";

export const Login = () => {

  const [resenas, setResenas] = useState(() => {
    const guardadas = localStorage.getItem("resenas_taller");
    return guardadas
      ? JSON.parse(guardadas)
      : [
          
        ];
  });
  
  
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(5);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

 
  useEffect(() => {
    localStorage.getItem("resenas_taller");
    localStorage.setItem("resenas_taller", JSON.stringify(resenas));
  }, [resenas]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comentario.trim()) return;

    const nuevaResena = {
      id: Date.now(),
      nombre: nombre.trim() || "Cliente",
      comentario: comentario.trim(),
      estrellas: Number(estrellas),
    };

    setResenas([nuevaResena, ...resenas]);
    setNombre("");
    setComentario("");
    setEstrellas(5);
    setMostrarFormulario(false);
  };

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
        <a
          href="https://wa.me/5493815512010"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-black bg-black text-white font-bold text-lg px-6 py-3 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-pointer whitespace-nowrap inline-block text-center"
        >
          Quiero mi descuento
        </a>
      </div>

      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-white mt-4">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Lo que dicen nuestros clientes
        </h1>
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-bold px-5 py-2.5 rounded-xl transition-all shadow-md text-sm cursor-pointer"
        >
          <MessageSquarePlus className="w-5 h-5" />
          {mostrarFormulario ? "Cancelar" : "Dejar una reseña"}
        </button>
      </div>

      {mostrarFormulario && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col gap-4 text-white text-left"
        >
          <h3 className="text-xl font-bold text-amber-400">
            Escribir opinión
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
            />

            <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Calificación:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setEstrellas(num)}
                  className="p-1 cursor-pointer focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      num <= estrellas
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          </div>

          <textarea
            required
            rows="3"
            placeholder="¿Qué te pareció nuestro servicio?"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition-colors text-base cursor-pointer"
          >
          Publicar reseña
          </button>
        </form>
      )}

     
      <div className="w-full max-w-6xl flex flex-wrap gap-4 justify-center">
        {resenas.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-amber-400 text-lg">
                {"⭐".repeat(item.estrellas)}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {item.nombre}
              </span>
            </div>
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              "{item.comentario}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
