"use client";

import { Headset, Settings, Wifi } from "lucide-react";

const features = [
    {
        icon: Headset,
        title: "Soporte Agronómico 24/7",
        description:
            "No solo entregamos software, nuestro equipo de ingenieros acompaña su campaña de inicio a fin.",
    },
    {
        icon: Settings,
        title: "Integración Multimarca",
        description:
            "Compatible con toda la maquinaria del mercado, desde John Deere hasta Case IH y drones DJI.",
    },
    {
        icon: Wifi,
        title: "Datos en Tiempo Real",
        description:
            "Conectividad total incluso en zonas sin cobertura móvil mediante tecnología LoRaWAN.",
    },
];

const estadisticas = [
    {
        value: "15%",
        label: "Aumento de Rinde",
        color: "bg-agro-green-700 text-white",
    },
    {
        value: "22%",
        label: "Ahorro en Insumos",
        color: "bg-agro-green-600 text-white",
    },
    {
        value: "1.2M",
        label: "Hectáreas Monitoreadas",
        color: "bg-agro-green-800 text-white",
    },
    {
        value: "+800",
        label: "Empresas Activas",
        color: "bg-agro-green-700 text-white",
    },
];

export function RevolucionDigitalSection() {
    return (
        <section className="py-20 md:py-28 px-6 md:px-10 lg:px-14 bg-agro-green-900">
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Columna izquierda: Título + Features */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
                            ¿Por qué Agronorte lidera la revolución digital?
                        </h2>

                        <div className="space-y-8">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.title} className="flex gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-agro-green-800 border border-agro-green-700 text-agro-green-400 flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-agro-green-200/70 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Columna derecha: Estadísticas */}
                    <div className="grid grid-cols-2 gap-4 md:gap-5">
                        {estadisticas.map((stat) => (
                            <div
                                key={stat.label}
                                className={`${stat.color} rounded-2xl p-6 md:p-8 flex flex-col justify-center`}
                            >
                                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-sm uppercase tracking-wider font-semibold opacity-80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
