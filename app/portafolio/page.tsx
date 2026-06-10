import SectionContentFr from "@/components/SectionContentFr";
import clsx from "clsx";
import Image from "next/image";

export default function Portfolio() {
    return (
    <main>
        {/* Banner */}
        <section className="
            h-100 relative
            p-16
            flex flex-col justify-end items-start gap-8"
        >
            {/* Image BG */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/stock.jpg"
                    fill
                    sizes="100%"
                    className="w-full object-cover object-top"
                    priority
                    alt="Stock"
                />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-brandblack to-brandblack/80 z-10"></div>
            {/* Actual content */}
            <h1 className="
                z-20 relative
                text-6xl text-brandwhite font-semibold"
            >
                Mi Trabajo
            </h1>
            <p className="
                z-20 relative
                text-lg text-brandwhite"
            >
                Explora proyectos, fotografías y producciones creadas para marcas y profesionales.
            </p>
        </section>
        {/* Content section */}
        <SectionContentFr bgColor="bg-brandblack-100">
            {/* Filters */}
            <div className="flex items-center gap-4">
                <span className="text-lg text-brandwhite">
                    Filtros:
                </span>
                <button className={clsx(
                    "px-4 py-2",
                    "border border-brandwhite",
                    "rounded-lg",
                    "text-md"
                )}>
                    Fotografía
                </button>
                <button className={clsx(
                    "px-4 py-2",
                    "border border-brandwhite",
                    "rounded-lg",
                    "text-md"
                )}>
                    Video
                </button>
                <button className={clsx(
                    "px-4 py-2",
                    "border border-brandwhite",
                    "rounded-lg",
                    "text-md"
                )}>
                    Proyectos
                </button>
            </div>
        </SectionContentFr>
        {/* Footer wrapper */}
        <div className="w-full h-footer-height bg-brandblack-100"></div>
    </main>
    )
}