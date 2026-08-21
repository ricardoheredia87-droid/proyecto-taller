import { MapPin, Clock, Phone,} from 'lucide-react';


 export const ContactoPage = () => {
  return (
    <div className="w-full p-6 bg-stone-900">
      
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 max-w-6xl mx-auto">
        
        <div className="w-full md:w-1/2 border border-stone-800 rounded-xl p-8 flex flex-col gap-6 bg-stone-950 text-left">
          <h2 className="text-3xl font-bold text-gray-300">Contáctanos</h2>
          <p className="text-gray-400 leading-relaxed">
            Estamos listos para atender tu vehículo y brindarte el mejor servicio. Por favor, completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
          </p>
          
          <aside className="flex flex-col gap-3 mt-4 pt-6 border-t border-stone-800">
            <div>
              <Phone className="w-6 h-6 text-blue-500 shrink-0"/> 
            <p className="text-gray-300 font-medium">+54 9 3815512010
              <span className="text-blue-500 font-bold"></span> 
            </p>
             </div>

             <div>
              <Clock className="w-6 h-6 text-blue-500 shrink-0" />
            <p className="text-gray-300 font-medium">08:00-18:00 | Sab:09:00-14:00
              </p> 
            </div>

              <div>
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
            <p className="text-gray-300 font-medium">Lidoro Quinteros 1100                              
              <span className="text-blue-500 font-bold"> </span> 
            </p>
           </div>
          </aside>
        </div>
    
        <div className="w-full md:w-1/2 border border-stone-800 rounded-xl p-8 flex flex-col gap-6 bg-stone-950">
          
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

         
          <button className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-xl transition-all duration-300 cursor-pointer">
            Enviar consulta
          </button>
       
        </div>

      </div>
    </div>
  );
};

export default ContactoPage;
 