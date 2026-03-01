"use client";

import {
  Package,
  Users,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Venta de Insumos",
    description:
      "Insecticidas, fungicidas, abonos orgánicos, semillas y nuevas moléculas. Productos de calidad respaldados por conocimiento técnico.",
  },
  {
    icon: Users,
    title: "Asesoría Técnica",
    description:
      "Visitas a campo, atención cara a cara con el agricultor y capacitaciones. No vendemos veneno, vendemos rendimiento por hectárea.",
  },
  {
    icon: Truck,
    title: "Logística y Delivery",
    description:
      "Servicio de entrega en el lugar y hora que el agricultor necesite. Llegamos donde usted está.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 px-6 md:px-10 lg:px-14 bg-white">
      <div className="w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que el agricultor necesita, con el respaldo técnico que hace la diferencia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-agro-green-200 hover:shadow-lg hover:shadow-agro-green-100/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-agro-green-500 text-white flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-agro-green-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
