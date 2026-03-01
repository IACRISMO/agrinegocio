"use client";

import { Sprout } from "lucide-react";

const cultivos = [
  "Arroz",
  "Maíz",
  "Banano",
  "Uva",
  "Mango",
  "Limón",
  "Palta",
  "Algodón",
  "Hortalizas",
];

export function CultivosSection() {
  return (
    <section id="cultivos" className="py-16 md:py-24 px-6 md:px-10 lg:px-14 bg-agro-green-50">
      <div className="w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-800 mb-4">
            Cultivos que Atendemos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Especialistas en los cultivos que mueven la región. Conocimiento técnico para cada uno.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {cultivos.map((nombre) => (
            <div
              key={nombre}
              className="flex items-center gap-3 p-4 md:p-5 rounded-xl bg-white border border-agro-green-100 shadow-sm hover:shadow-md hover:border-agro-green-300 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-agro-green-100 text-agro-green-700 flex items-center justify-center shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-medium text-agro-green-800">{nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
