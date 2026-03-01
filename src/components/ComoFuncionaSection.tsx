import { Camera, Clock, Leaf } from "lucide-react";

const steps = [
    {
        number: "1.",
        icon: Camera,
        emoji: "📷",
        title: "Captura",
        description:
            "Toma una foto de la hoja o fruto afectado. Funciona incluso en zonas sin señal (offline).",
    },
    {
        number: "2.",
        icon: Clock,
        emoji: "🔍",
        title: "Analiza",
        description:
            "Nuestra IA entrenada por expertos agrónomos detecta la plaga o deficiencia en milisegundos.",
    },
    {
        number: "3.",
        icon: Leaf,
        emoji: "🌿",
        title: "Trata",
        description:
            "Recibe la receta técnica: dosis exacta y los productos recomendados por Agronorte Ingenieros.",
    },
];

export function ComoFuncionaSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ¿Cómo funciona Agronorte?
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
                        Tecnología de punta diseñada para el campo piurano, simplificando el
                        cuidado de tus cultivos en solo{" "}
                        <span className="text-agro-green-500 font-semibold">3 pasos</span>.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative flex flex-col md:flex-row items-start gap-8 md:gap-0">
                    {/* Línea conectora (solo desktop) */}
                    <div
                        className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px border-t-2 border-dashed border-agro-green-200"
                        aria-hidden="true"
                    />

                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative flex-1 flex flex-col items-center text-center px-4"
                        >
                            {/* Ícono circular */}
                            <div className="relative z-10 w-20 h-20 rounded-full bg-agro-green-50 border-2 border-agro-green-200 flex items-center justify-center mb-5 shadow-sm">
                                <span className="text-3xl">{step.emoji}</span>
                            </div>

                            {/* Número + Título */}
                            <p className="text-sm font-bold text-gray-900 mb-2">
                                <span className="text-agro-green-500">{step.number}</span>{" "}
                                <span className="font-extrabold">{step.emoji}</span>{" "}
                                {step.title}
                            </p>

                            {/* Descripción */}
                            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
