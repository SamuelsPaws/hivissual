import SectionContentFr from "@/components/SectionContentFr";
import Image from "next/image";
import H2 from "./components/H2";
import H3 from "./components/H3";
import P from "./components/P";
import ServiceTag from "./components/ServiceTag";
import GridItem from "./components/GridItem";
import SectionContentSt from "@/components/SectionContentSt";
import RelatedProjectCard from "./components/RelatedProjectCard";
import Link from "next/link";

export default async function ProjectSlug() {
    return (
    <main>
        {/* Hero */}
        <section className="
            h-140 relative
            px-32 py-32
            flex
            bg-brandblack overflow-hidden"
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
                    rounded-4xl overflow-hidden shadow-lg"
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
                opacity-80 mix-blend-screen blur-[80px]
                bg-contain"
            ></div>
        </section>
        <SectionContentFr bgColor="bg-brandblack-200">
            {/* Two columns container */}
            <div className="w-full flex">
                {/* Left part */}
                <div className="w-[50%]">
                    <H2 first={true}>
                        El Cliente
                    </H2>
                    <p className="mb-8 text-xl text-brandgold-600 font-semibold">
                        Restaurante ABC
                    </p>
                    <H3>Tipo de Empresa</H3>
                    <P>Restaurante</P>
                    <H3>¿Qué necesitaba el cliente?</H3>
                    <P>Fortalecer su presencia digital. A pesar de ofrecer una experiencia de calidad y contar con un establecimiento bien posicionado, su presencia digital no lo reflejaba, limitando su capacidad para alcanzar potenciales comensales que buscaban opciones en línea.</P>
                    <H2 first={false}>
                        Objetivos
                    </H2>
                    <ul className="
                        mb-8 flex flex-col gap-4
                        text-lg text-gray-200"
                    >
                        <li>
                            <i className="fa fa-circle scale-30 mr-2"></i>
                            Reforzar la credibilidad de la marca mediante una imagen digital más profesional
                        </li>
                        <li>
                            <i className="fa fa-circle scale-30 mr-2"></i>
                            Facilitar que nuevos clientes descubrieran el restaurante en línea
                        </li>
                        <li>
                            <i className="fa fa-circle scale-30 mr-2"></i>
                            Crear una presencia visual coherente con la experiencia ofrecida en el local
                        </li>
                    </ul>
                    <H2 first={false}>
                        Servicios Ofrecidos
                    </H2>
                    <div className="flex flex-wrap gap-8">
                        <ServiceTag text="Fotografía" />
                        <ServiceTag text="Producción de Video" />
                        <ServiceTag text="Estrategia de Contenido" />
                    </div>
                </div>
            </div>
            <H2 first={false}>
                Galería
            </H2>
            {/* Gallery grid */}
            <div className="
                w-full md:w-fit mx-auto mt-16
                grid
                grid-cols-1 grid-rows-auto
                md:grid-cols-2 md:grid-rows-4
                xl:grid-cols-4 xl:grid-rows-2
                gap-8"
            >
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </div>
            {/* Pagination */}
            <div className="
                w-fit mx-auto
                flex gap-2"
            >
                <button className="
                    mt-16 w-8 h-8
                    grid place-content-center
                    text-lg text-black
                    bg-gray-300 rounded-lg"
                >
                    1
                </button>
                <button className="
                    mt-16 w-8 h-8
                    grid place-content-center
                    bg-transparent
                    text-lg text-brandwhite
                    border border-brandwhite rounded-lg"
                >
                    2
                </button>
            </div>
        </SectionContentFr>
        <SectionContentSt
            title="Otros Proyectos"
            bgColor="bg-brandgray-100"
        >
            {/* Grid */}
            <div className="
                w-full md:w-fit mx-auto mb-16
                flex flex-wrap flex-col md:flex-row gap-8"
            >
                <RelatedProjectCard />
                <RelatedProjectCard />
                <RelatedProjectCard />
            </div>
            <Link
                href="/portafolio"
                className="
                    block w-fit
                    mx-auto px-8 py-4
                    bg-brandwhite
                    text-black text-lg font-semibold
                    rounded-full"
            >
                Ver Portafolio Completo
            </Link>
        </SectionContentSt>
        {/* Footer wrapper */}
        <div className="w-full h-footer-height bg-brandgray-100"></div>
    </main>
    )
}