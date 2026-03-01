"use client";

import { MessageCircle, FileCheck } from "lucide-react";

const PHONE_WHATSAPP = "51999999999"; // Reemplazar con número real

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-14 bg-agro-green-800">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para hacer rendir tu campo?
        </h2>
        <p className="text-lg text-agro-green-100 mb-8 max-w-2xl mx-auto">
          Contáctanos por WhatsApp y te respondemos con la información que necesitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20cotizar%20insumos%20agrícolas.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-agro-yellow-400 text-agro-green-900 font-semibold hover:bg-agro-yellow-300 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
          <a
            href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20solicitar%20Asesoría%20Técnica.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <FileCheck className="w-5 h-5" />
            Solicitar Asesoría Técnica
          </a>
        </div>
      </div>
    </section>
  );
}
