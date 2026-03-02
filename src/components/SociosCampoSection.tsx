export function SociosCampoSection() {
    const stats = [
        { value: "+10", label: "Años de Experiencia" },
        { value: "500+", label: "Fundos Atendidos" },
        { value: "100%", label: "Compromiso Local" },
        { value: "24/7", label: "Asesoría Virtual" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* LEFT: Texto — centrado en móvil */}
                    <div className="flex-1 w-full text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Socios del Campo Piurano
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-5">
                            En Agronorte Ingenieros, llevamos años trabajando hombro a hombro
                            con el agricultor piurano. Nos especializamos en brindar soporte
                            integral a pequeños y{" "}
                            <span className="text-agro-green-600 font-medium">
                                medianos productores
                            </span>
                            , combinando la sabiduría tradicional del campo con la precisión
                            de la tecnología moderna.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Nuestro compromiso es garantizar la salud de tus cultivos y
                            maximizar tu rentabilidad a través de productos de alta calidad y
                            una asesoría técnica constante y personalizada.
                        </p>
                    </div>

                    {/* RIGHT: Estadísticas */}
                    <div className="flex-1 w-full grid grid-cols-2 gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-agro-green-200 transition-all duration-300"
                            >
                                <span className="text-3xl md:text-4xl font-extrabold text-agro-green-500 mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
