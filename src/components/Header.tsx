"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cultivos", label: "Cultivos" },
  { href: "#por-que-elegirnos", label: "Nosotros" },
];

const PHONE_WHATSAPP = "51999999999"; // Reemplazar con número real

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full px-6 md:px-10 lg:px-14 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="AGRONORTE INGENIEROS - Inicio">
          <Image
            src="/images/logo-agronorte-clean.png"
            alt="AGRONORTE INGENIEROS"
            width={260}
            height={60}
            className="h-14 md:h-16 lg:h-[4.5rem] w-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-agro-green-700 rounded-lg hover:bg-agro-green-50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Buscador */}
          <div className="relative">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 hover:border-gray-300 transition-colors">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-36 focus:w-48 transition-all duration-300"
              />
            </div>
          </div>

          {/* Botón CTA */}
          <a
            href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20cotizar%20insumos%20agrícolas.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-agro-green-800 text-white text-sm font-semibold hover:bg-agro-green-700 transition-colors shadow-sm"
          >
            Contáctanos
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-600 hover:text-agro-green-700 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 px-3 text-gray-600 hover:text-agro-green-700 hover:bg-agro-green-50 font-medium rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-3 border-t border-gray-100">
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20cotizar%20insumos%20agrícolas.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 rounded-full bg-agro-green-800 text-white text-sm font-semibold hover:bg-agro-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
