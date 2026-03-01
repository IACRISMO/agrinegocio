"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-agro-green-900 text-agro-green-100 py-12 px-6 md:px-10 lg:px-14">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Image
            src="/images/logo-agronorte-clean.png"
            alt="AGRONORTE INGENIEROS"
            width={200}
            height={44}
            className="h-16 w-auto object-contain object-left"
          />
          <p className="text-agro-green-200">Conocimiento que hace rendir</p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 shrink-0" />
          <span>Piura, Perú — Alto, medio y bajo Piura</span>
        </div>
      </div>
      <div className="w-full mt-8 pt-8 border-t border-agro-green-800 text-center text-sm text-agro-green-300">
        © {new Date().getFullYear()} AGRONORTE INGENIEROS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
