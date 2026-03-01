"use client";

/**
 * Sección con espacios para fotos de alta calidad:
 * - Campos de cultivo (arrozales, maizales)
 * - Equipo técnico en campo
 * Reemplazar los divs por <Image> cuando tengas las imágenes en /public/images/
 */
export function ImagePlaceholderSection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-14 bg-gray-100">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-agro-green-200 flex items-center justify-center border border-agro-green-300">
            <p className="text-agro-green-800 font-medium text-center px-4">
              Foto: Campos de cultivo (arrozales / maizales)
            </p>
          </div>
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-agro-green-200 flex items-center justify-center border border-agro-green-300">
            <p className="text-agro-green-800 font-medium text-center px-4">
              Foto: Equipo técnico en campo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
