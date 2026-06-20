import Banner from "@/components/Banner";
import FooterWrapper from "@/components/FooterWrapper";
import SectionContentCen from "@/components/SectionContentCen";
import SectionContentFr from "@/components/SectionContentFr";
import SectionContentSt from "@/components/SectionContentSt";
import SectionCTA from "@/components/SectionCTA";
import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
import ServiceCardLi from "./components/ServiceCardLi";

export default function About() {
    return (
    <main>
        <Banner
            title="Quién Soy"
            description={null}
            bgSrc="/assets/about-5.webp"
        />
        <SectionContentFr
            bgColor="bg-brandblack-100"
        >
            {/* Div with two columns */}
            <div className="
                w-full
                flex items-start gap-8"
            >
                <div className="
                    w-[60%]
                    flex flex-col"
                >
                    <p className="
                        mb-8 p-8 relative
                        text-lg text-black
                        bg-linear-to-b from-gray-100 to-gray-300 rounded-2xl"
                    >
                        Hivissual es un estudio creativo especializado en la creación de contenido visual y gestión de redes sociales, enfocado en ayudar a emprendedores y marcas personales a destacar en el entorno digital.
                    </p>
                    <p className="
                        mb-16 p-8 relative
                        text-lg text-gray-200
                        gradient-border rounded-2xl"
                    >
                        Mi trabajo se basa en una idea simple: cada marca tiene una historia que merece ser contada de la mejor manera posible. Disfruto acompañar a mis clientes desde la idea inicial hasta el resultado final, construyendo una relación cercana que me permite comprender a fondo sus objetivos y necesidades. Esta forma de trabajar me ayuda a crear contenido visual auténtico, estratégico y alineado con el crecimiento de cada marca. Cuando colaboro con personas y empresas comprometidas con su presencia digital, es donde mi combinación de creatividad, dirección visual y marketing logra generar el mayor impacto.
                    </p>
                </div>
                {/* Images grid */}
                <div className="
                    flex-1 h-160
                    grid grid-cols-[1fr_1fr]"
                >
                    <div className="
                        w-[140%] aspect-square relative
                        rounded-4xl overflow-hidden"
                    >
                        <Image
                            src="/assets/about-2.webp"
                            fill
                            sizes="100%"
                            className="w-full h-full object-cover scale-200"
                            alt="Fotografía del fundador de la marca"
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div className="
                        w-[140%] aspect-square relative
                        place-self-end
                        rounded-4xl overflow-hidden shadow-[-4px_-4px_8px_rgb(0,0,0,0.15)]"
                    >
                        <Image
                            src="/assets/about-3.webp"
                            fill
                            sizes="100%"
                            className="w-full h-full object-cover scale-200"
                            alt="Fotografía del fundador de la marca"
                        />
                    </div>
                </div>
            </div>

        </SectionContentFr>
        <SectionContentSt
            title="Mi Historia"
            bgColor="bg-brandblack-200"
        >
            <div className="
                w-fit mx-auto
                flex items-center gap-8"
            >
                <div className="
                    w-100 aspect-square relative
                    rounded-4xl overflow-hidden"
                >
                    <Image
                        src="/assets/about-1.webp"
                        fill
                        sizes="100%"
                        className="w-full h-full object-cover"
                        alt="Yo"
                    />
                </div>
                <div className="
                    w-140 p-8 relative
                    gradient-border rounded-2xl"
                >
                    <p className="pb-2 text-md text-gray-200 text-left">
                        Mi pasión por la fotografía y el video comenzó desde muy joven, pero mi camino profesional tomó forma a los 21 años, cuando tuve la oportunidad de incorporarme al equipo de Meraki Beauty Center.
                    </p>
                    <p className="text-md text-gray-200 text-left">
                        En ese momento también me encontraba estudiando Artes Visuales, una experiencia que me permitió combinar la creatividad con el marketing digital. Desde entonces, he desarrollado un enfoque que une la estética y la estrategia, creando contenido visual que no solo capta la atención, sino que también ayuda a las marcas a conectar con su audiencia y alcanzar sus objetivos comerciales.
                    </p>
                </div>
            </div>
        </SectionContentSt>
        <SectionContentFr
            bgColor="bg-brandgray-100"
        >
            <h2 className="
                mb-8 lg:mb-24
                text-center text-2xl lg:text-4xl text-brandwhite font-semibold leading-16"
            >
                Más de 5 años ayudando a marcas y negocios a fortalecer su presencia digital mediante contenido visual estratégico
            </h2>
            <div className="
                w-fit mx-auto
                flex gap-8"
            >
                <ServiceCard title="Fotografía">
                    <ul className="
                        flex flex-col gap-4
                        text-md lg:text-lg"
                    >
                        <ServiceCardLi>
                            Fotografía comercial
                        </ServiceCardLi>
                        <ServiceCardLi>
                            Fotografía de producto
                        </ServiceCardLi>
                        <ServiceCardLi>
                            Fotografía para redes sociales
                        </ServiceCardLi>
                    </ul>
                </ServiceCard>
            </div>
        </SectionContentFr>
        <SectionCTA bgColor="bg-brandgray-200" />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}