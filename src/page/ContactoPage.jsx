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
                servicio. Por favor, completa el formulario y nos pondremos en
                contacto contigo lo antes posible.
              </p>
            </div>

            <aside className="flex flex-col gap-4 pt-6 border-t border-stone-800">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-gray-300 font-medium">+54 9 3815512010</p>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-gray-300 font-medium">
                  08:00 - 18:00 | Sáb: 09:00 - 14:00
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-gray-300 font-medium">
                  Lidoro Quinteros 1100
                </p>
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

            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 cursor-pointer mt-2">
              Enviar consulta
            </button>
          </div>
        </div>

        <div className="w-full h-96 bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl relative">
          <iframe
            title="Ubicación del Taller Mecánico - Lidoro Quinteros 1188"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0185694269007!2d-65.25466082477833!3d-26.83936167669263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c9048b88f1f%3A0x25c26c539bcdabc2!2sLidoro%20Quinteros%201188%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1788028050982!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
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
