"use client";

const cultivos = [
  { emoji: "🥭", nombre: "Mango", color: "text-orange-500" },
  { emoji: "🌾", nombre: "Arroz", color: "text-green-600" },
  { emoji: "🌽", nombre: "Maíz", color: "text-yellow-500" },
  { emoji: "🍋", nombre: "Limón", color: "text-yellow-400" },
  { emoji: "🥑", nombre: "Palta", color: "text-green-500" },
  { emoji: "☁️", nombre: "Algodón", color: "text-gray-400" },
  { emoji: "🥦", nombre: "Hortalizas", color: "text-green-600" },
  { emoji: "🍇", nombre: "Uva", color: "text-purple-500" },
  { emoji: "🍌", nombre: "Banano", color: "text-yellow-500" },
  { emoji: "➕", nombre: "Y más...", color: "text-gray-400" },
];

export function CultivosSection() {
  return (
    <section id="cultivos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Expertos en Cultivos del Norte
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Nuestra tecnología e insumos están optimizados para los cultivos clave de la región{" "}
            <span className="text-agro-green-500 font-medium">Piura</span>.
          </p>
        </div>

        {/* Grid de cultivos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-8">
          {cultivos.map((cultivo) => (
            <div
              key={cultivo.nombre}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <span className={`text-4xl group-hover:scale-110 transition-transform duration-200 ${cultivo.color}`}>
                {cultivo.emoji}
              </span>
              <span
                className={`text-sm font-medium ${cultivo.nombre === "Y más..."
                    ? "text-gray-400"
                    : cultivo.nombre === "Hortalizas"
                      ? "text-agro-green-500"
                      : "text-gray-700"
                  }`}
              >
                {cultivo.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
