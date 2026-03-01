"use client";

import { ShoppingCart, ClipboardList, Truck } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Venta de Insumos",
    description:
      "Insecticidas, fungicidas y abonos de alta calidad seleccionados específicamente para el clima y suelo del norte.",
  },
  {
    icon: ClipboardList,
    title: "Asesoría Técnica",
    description:
      "Visitas a campo programadas y recomendaciones personalizadas por ingenieros agrónomos titulados.",
  },
  {
    icon: Truck,
    title: "Logística y Delivery",
    description:
      "Entrega rápida y segura de tus pedidos directamente en la puerta de tu fundo o almacén.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Soluciones integrales diseñadas para cada etapa de tu producción agrícola.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-agro-green-200 transition-all duration-300"
              >
                {/* Icono pequeño verde claro */}
                <div className="w-11 h-11 rounded-xl bg-agro-green-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-agro-green-500" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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
