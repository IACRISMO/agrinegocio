"use client";

import { Target, Handshake, Layers } from "lucide-react";

const razones = [
  {
    icon: Target,
    title: "Enfoque en pequeños y medianos agricultores",
    description:
      "Entendemos sus necesidades y trabajamos para que cada hectárea rinda más, con trato cercano y soluciones a su medida.",
  },
  {
    icon: Handshake,
    title: "Aliados estratégicos (Laboratorios)",
    description:
      "Trabajamos con laboratorios de primer nivel para ofrecer mejores costos y productos confiables.",
  },
  {
    icon: Layers,
    title: "Combos de productos",
    description:
      "Químicos + bioestimulantes en paquetes que maximizan el rendimiento y simplifican tu manejo.",
  },
];

export function PorQueElegirnosSection() {
  return (
    <section id="por-que-elegirnos" className="py-16 md:py-24 px-6 md:px-10 lg:px-14 bg-white">
      <div className="w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-800 mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más que proveedores, somos socios del campo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {razones.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col p-6 md:p-8 rounded-2xl bg-agro-green-50 border border-agro-green-100 hover:border-agro-green-300 hover:shadow-lg hover:shadow-agro-green-100/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-agro-green-500 text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-agro-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
