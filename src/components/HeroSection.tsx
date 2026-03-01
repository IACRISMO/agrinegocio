"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PHONE_WHATSAPP = "51999999999"; // Reemplazar con número real

const cultivos = ["Mango", "Arroz", "Maíz", "Limón"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-campo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT: Texto */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agro-green-500 mb-6">
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Inteligencia Artificial Agrícola
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Toma el control
              <br />
              total de tu campo
              <br />
              con{" "}
              <span className="text-agro-green-400">
                tecnología de
                <br />
                precisión
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-gray-200 max-w-lg mb-8 leading-relaxed">
              Con Agronorte, obtén el control absoluto de tus insumos,
              inventario, personal, gastos y finanzas, y el estado de tus
              campos desde la palma de tu mano. Tecnología inteligente
              para maximizar tu rentabilidad.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20una%20prueba%20gratis.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-agro-green-500 text-white font-semibold text-sm sm:text-base hover:bg-agro-green-600 hover:shadow-xl hover:shadow-agro-green-500/30 transition-all duration-300 shadow-lg"
              >
                <ArrowRight className="w-4 h-4" />
                Prueba Gratis
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200"
              >
                Ver Planes
              </a>
            </div>

            {/* Optimizado para */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
                Optimizado para:
              </span>
              <div className="flex items-center gap-3">
                {cultivos.map((cultivo) => (
                  <span
                    key={cultivo}
                    className="text-sm sm:text-base text-white/80 italic font-light"
                  >
                    {cultivo}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Imagen del agricultor con celular */}
          <div className="flex-1 flex justify-center lg:justify-end max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative w-full aspect-square">
              {/* Placeholder glow detrás de la imagen */}
              <div className="absolute inset-8 rounded-full bg-agro-green-500/20 blur-3xl" aria-hidden="true" />
              <Image
                src="/images/hero-farmer.png"
                alt="Agricultor usando la app Agronorte en su celular"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
