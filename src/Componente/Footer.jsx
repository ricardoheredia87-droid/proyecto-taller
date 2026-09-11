import { Wrench, Clock, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-4 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white">
            <Wrench className="h-5 w-5 text-yellow-400" />
            <span className="text-base font-bold tracking-wider uppercase">
              Taller Mecánico
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Especialistas en diagnóstico computarizado, mecánica general, frenos
            y mantenimiento preventivo.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2 text-sm">Servicios</h3>
          <ul className="space-y-1 text-xs text-slate-400">
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              Mecánica General e Inyección
            </li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              Frenos y Suspensión
            </li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              Cambio de Aceite y Filtros
            </li>

            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              Alineación y Balanceo
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Contacto</h3>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>
                <a
                href="https://www.google.com/maps/search/?api=1&query=Lidoro+Quinteros+1100,+San+Miguel+de+Tucuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-yellow-400"
                >
                  <MapPin className="h-4 w-4 text-yellow-400 shrink-0" />
                  <span>Lidoro quintero 1100</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+54 9 3815512010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-yellow-400"
                >
                  <Phone className="h-4 w-4 text-yellow-400 shrink-0" />
                  <span>+5493815512010</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Clock className="h-4 w-4 text-yellow-400 shrink-0" />
            <span>Lun a Vie: 08:00 - 18:00 | Sáb: 09:00 - 14:00</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/60 pt-3 mt-4 text-center">
        <p className="text-[11px] text-slate-500">
          © 2026 Taller mecánico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
