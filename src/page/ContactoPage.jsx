import { MapPin, Clock, Phone } from "lucide-react";

export const ContactoPage = () => {
  return (
    <div className="w-full p-6 bg-stone-900 text-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8">
          <div className="w-full md:w-1/2 border border-stone-800 rounded-xl p-8 flex flex-col justify-between gap-6 bg-stone-950 text-left">
            <div>
              <h2 className="text-3xl font-bold text-gray-300">Contáctanos</h2>
              <p className="text-gray-400 leading-relaxed mt-4">
                Estamos listos para atender tu vehículo y brindarte el mejor
                servicio.
              </p>
            </div>

            <aside className="flex flex-col gap-4 pt-6 border-t border-stone-800">
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/+5493815512010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-yellow-400"
                >
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="font-medium">+5493815512010</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-gray-300 font-medium">
                  08:00 - 18:00 | Sáb: 09:00 - 14:00
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/6dXq5qXvSW65VZmx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-yellow-400"
                >
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="font-medium">Lidoro Quinteros 1156</span>
                </a>
              </div>
            </aside>
          </div>

          <div className="w-full md:w-1/2 border border-stone-800 rounded-xl p-8 flex flex-col gap-4 bg-stone-950">
            <label className="flex flex-col gap-2 text-left text-sm font-medium text-gray-300">
              Nombre
              <input
                type="text"
                placeholder="Ingrese su nombre"
                className="w-full p-3 bg-stone-800 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-stone-700"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-medium text-gray-300">
              WhatsApp
              <input
                type="tel"
                placeholder="Ingrese su número de WhatsApp"
                className="w-full p-3 bg-stone-800 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-stone-700"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-medium text-gray-300">
              Vehículo
              <input
                type="text"
                placeholder="Ingrese el año y modelo de su vehículo"
                className="w-full p-3 bg-stone-800 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-stone-700"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-medium text-gray-300">
              Servicio de interés
              <input
                type="text"
                placeholder="Ingrese el servicio de interés"
                className="w-full p-3 bg-stone-800 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-stone-700"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-medium text-gray-300">
              Mensaje
              <textarea
                placeholder="Ingrese su mensaje"
                rows={4}
                className="w-full p-3 bg-stone-800 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-stone-700 resize-none"
              />
            </label>

            <a
              className="w-full sm:w-auto flex items-center justify-center gap-3  bg-blue-900 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-400/20"
              href="https://wa.me/+5493815512010"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar consulta
            </a>
          </div>
        </div>

        <div className="w-full h-96 bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl relative">
          <iframe
            title="Ubicación del Taller Mecánico - Lidoro Quinteros 1156"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.9696739860552!2d-65.25255823042131!3d-26.83913149854318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d9e1ffd0605%3A0x5b8b6692f2ad9216!2sMAS%20servicio%20automotriz!5e1!3m2!1ses-419!2sar!4v1789137974532!5m2!1ses-419!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
