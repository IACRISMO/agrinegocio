"use client";

import { ShoppingCart, ClipboardList, Truck, FlaskConical, Users, BarChart3, Sprout, Phone } from "lucide-react";

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
  {
    icon: FlaskConical,
    title: "Análisis de Suelo",
    description:
      "Evaluación técnica del suelo para determinar deficiencias nutricionales y diseñar planes de fertilización precisos.",
  },
  {
    icon: Sprout,
    title: "Control de Plagas",
    description:
      "Diagnóstico y tratamiento de plagas y enfermedades con productos certificados y aplicación técnica.",
  },
  {
    icon: BarChart3,
    title: "Gestión de Campo",
    description:
      "Seguimiento digital de tus cultivos, inventario, gastos y personal desde nuestra plataforma Agronorte.",
  },
  {
    icon: Users,
    title: "Capacitaciones",
    description:
      "Talleres y formación para agricultores y técnicos en buenas prácticas agrícolas, nutrición y manejo integrado.",
  },
  {
    icon: Phone,
    title: "Soporte 24/7",
    description:
      "Atención virtual permanente para consultas urgentes sobre tus cultivos. Estamos contigo en cada etapa.",
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

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-agro-green-200 transition-all duration-300"
              >
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
