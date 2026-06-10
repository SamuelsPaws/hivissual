import Image from "next/image";

export default async function ProjectSlug() {
    return (
    <main>
        <section className="
            h-140 relative
            px-32 py-32
            flex
            bg-brandblack-100"
        >
            {/* Left part with info */}
            <div className="
                w-[60%]
                flex flex-col justify-center items-start gap-8"
            >
                <h1 className="text-left text-6xl font-semibold leading-20">
                    Caso de Estudio:<br />Restaurante ABC
                </h1>
                <div className="w-80 h-[1px] bg-brandgold-600"></div>
                <p className="text-lg text-gray-200">
                    Campaña de crecimiento en redes sociales con fotografía y producción de videos publicitarios
                </p>
            </div>
            {/* Right part with image */}
            <div className="
                flex-1 z-10
                flex justify-center items-center"
            >
                <div className="
                    h-full aspect-square relative
                    rounded-4xl overflow-hidden shadow-md"
                >
                    <Image
                        src="/assets/stock.jpg"
                        fill
                        sizes="100%"
                        className="w-full h-full object-cover"
                        priority
                        alt="stock"
                    />
                </div>
            </div>
            {/* Glow */}
            <div className="
                absolute bottom-0 right-0 z-0
                w-140 h-100 mt-4
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-70 mix-blend-screen blur-[80px]
                bg-contain"
            ></div>
        </section>
        {/* Footer wrapper */}
        <div className="w-full h-footer-height bg-brandblack-100"></div>
    </main>
    )
}