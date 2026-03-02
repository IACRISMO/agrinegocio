"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PHONE_WHATSAPP = "51999999999";
const cultivos = ["Mango", "Arroz", "Maíz", "Limón"];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* ── MOBILE layout (< lg) ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-28 pb-10 lg:hidden">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agro-green-500 mb-5">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Inteligencia Artificial Agrícola
          </span>
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-5">
          Toma el control<br />
          total de tu campo<br />
          con{" "}
          <span className="text-agro-green-400">
            tecnología de<br />precisión
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-base text-gray-200 mb-7 leading-relaxed max-w-sm">
          Con Agronorte, obtén el control absoluto de tus insumos,
          inventario, personal, gastos y finanzas desde la palma de tu mano.
        </p>

        {/* Botones */}
        <div className="flex flex-col gap-3 w-full max-w-xs mb-7">
          <a
            href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20una%20prueba%20gratis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-agro-green-500 text-white font-semibold text-sm shadow-lg"
          >
            <ArrowRight className="w-4 h-4" />
            Prueba Gratis
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-lg border border-gray-200"
          >
            Ver Planes
          </a>
        </div>

        {/* Optimizado para */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Optimizado para:
          </span>
          {cultivos.map((c) => (
            <span key={c} className="text-sm text-white/80 italic font-light">{c}</span>
          ))}
        </div>

        {/* Agricultor en móvil */}
        <div className="relative w-full max-w-sm mx-auto" style={{ height: '380px' }}>
          <Image
            src="/images/hero-farmer-nobg.png"
            alt="Agricultor usando la app Agronorte en su celular"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* ── DESKTOP layout (>= lg) ── */}
      <div
        className="hidden lg:flex relative z-10 w-full items-center justify-between px-14 py-24"
        style={{ height: '1000px' }}
      >
        {/* LEFT: Texto */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agro-green-500 mb-6">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Inteligencia Artificial Agrícola
            </span>
          </div>
          <h1 className="text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Toma el control<br />
            total de tu campo<br />
            con{" "}
            <span className="text-agro-green-400">
              tecnología de<br />precisión
            </span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg mb-8 leading-relaxed">
            Con Agronorte, obtén el control absoluto de tus insumos,
            inventario, personal, gastos y finanzas, y el estado de tus
            campos desde la palma de tu mano. Tecnología inteligente
            para maximizar tu rentabilidad.
          </p>
          <div className="flex gap-4 mb-10">
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20una%20prueba%20gratis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-agro-green-500 text-white font-semibold hover:bg-agro-green-600 transition-all shadow-lg"
            >
              <ArrowRight className="w-4 h-4" />
              Prueba Gratis
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all shadow-lg border border-gray-200"
            >
              Ver Planes
            </a>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
              Optimizado para:
            </span>
            {cultivos.map((c) => (
              <span key={c} className="text-base text-white/80 italic font-light">{c}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: Agricultor desktop */}
        <div className="flex-shrink-0" style={{ width: '68%', marginRight: '-56px', marginTop: '380px' }}>
          <div className="relative" style={{ width: '100%', height: '1100px' }}>
            <div className="absolute inset-0 rounded-full bg-agro-green-500/15 blur-3xl" aria-hidden="true" />
            <Image
              src="/images/hero-farmer-nobg.png"
              alt="Agricultor usando la app Agronorte en su celular"
              fill
              className="object-contain object-right-top z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
