"use client";

import { Satellite, Droplets, BrainCircuit, ArrowRight } from "lucide-react";

const PHONE_WHATSAPP = "51999999999"; // Reemplazar con número real

const servicios = [
    {
        icon: Satellite,
        iconBg: "bg-agro-green-900",
        iconColor: "text-agro-green-400",
        title: "Monitoreo Satelital",
        description:
            "Visualización NDVI de alta resolución con actualizaciones diarias para detectar anomalías antes de que sean visibles al ojo humano.",
    },
    {
        icon: Droplets,
        iconBg: "bg-agro-green-900",
        iconColor: "text-agro-green-400",
        title: "Pulverización Variable",
        description:
            "Mapas de aplicación selectiva para optimizar el uso de agroquímicos, reduciendo costos operativos hasta en un 30%.",
    },
    {
        icon: BrainCircuit,
        iconBg: "bg-agro-green-900",
        iconColor: "text-agro-green-400",
        title: "Inteligencia Predictiva",
        description:
            "Modelos matemáticos que proyectan el rendimiento de cosecha considerando variables climáticas y de suelo históricas.",
    },
];

export function TecnologiaSection() {
    return (
        <section className="py-20 md:py-28 px-6 md:px-10 lg:px-14 bg-gray-950 text-white">
            <div className="w-full">
                {/* Encabezado */}
                <div className="text-center mb-14 md:mb-20">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-agro-green-400 mb-4">
                        Servicios Corporativos
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl mx-auto">
                        Tecnología de punta para cada etapa del cultivo
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Diseñamos herramientas que permiten al productor tomar decisiones
                        basadas en datos, reduciendo la incertidumbre y maximizando el
                        retorno de inversión.
                    </p>
                </div>

                {/* Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {servicios.map((servicio) => {
                        const Icon = servicio.icon;
                        return (
                            <div
                                key={servicio.title}
                                className="group bg-gray-900 border border-gray-800 rounded-2xl p-7 md:p-8 hover:border-agro-green-700/50 hover:bg-gray-900/80 transition-all duration-300"
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl ${servicio.iconBg} ${servicio.iconColor} flex items-center justify-center mb-6 border border-gray-700 group-hover:border-agro-green-600/50 transition-colors`}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {servicio.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                                    {servicio.description}
                                </p>
                                <a
                                    href={`https://wa.me/${PHONE_WHATSAPP}?text=Hola,%20quisiera%20información%20sobre%20${encodeURIComponent(servicio.title)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-agro-green-400 font-semibold text-sm hover:text-agro-green-300 transition-colors group-hover:gap-2.5"
                                >
                                    Saber más
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
