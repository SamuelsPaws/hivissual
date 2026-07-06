import SectionContentSt from "@/components/SectionContentSt";
import Hero from "./components/Hero";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import ServiceCardLi from "./components/ServiceCardLi";
import SectionContentCen from "@/components/SectionContentCen";
import SectionCTA from "@/components/SectionCTA";
import { getFeaturedMedia } from "@/lib/contentful-queries";
import GallerySimple from "@/components/GallerySimple";

export default async function Home() {
  const featuredEntries = await getFeaturedMedia()

  return (
    <main>
      <Hero />
      <SectionContentSt
        title="Mira mis trabajos destacados"
        bgColor="bg-brandblack"
      >
        {/* Masonry Grid */}
        <GallerySimple items={featuredEntries} />
        <Link
          href="/portafolio"
          className="
            block w-fit mx-auto
            px-6 py-3
            lg:px-8 lg:py-4
            bg-brandwhite
            text-black text-md lg:text-xl font-semibold
            rounded-full"
        >
          Ver Portafolio Completo
        </Link>
      </SectionContentSt>
      <SectionContentSt
        title="Conoce mis servicios"
        bgColor="bg-brandblack-100"
      >
        <div className="
            w-fit mx-auto
            flex justify-center gap-8 flex-wrap"
        >
            <ServiceCard title="Fotografía">
                <ul className="
                    flex flex-col gap-4
                    text-md lg:text-md"
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
            <ServiceCard title="Producción de Video">
                <ul className="
                    flex flex-col gap-4
                    text-md lg:text-md"
                >
                    <ServiceCardLi>
                        Videos promocionales
                    </ServiceCardLi>
                    <ServiceCardLi>
                        Reels y contenido corto
                    </ServiceCardLi>
                    <ServiceCardLi>
                        Producción audiovisual para marcas
                    </ServiceCardLi>
                </ul>
            </ServiceCard>
            <ServiceCard title="Estrategia de Contenido">
                <ul className="
                    flex flex-col gap-4
                    text-md lg:text-md"
                >
                    <ServiceCardLi>
                        Planificación de contenido
                    </ServiceCardLi>
                    <ServiceCardLi>
                        Dirección creativa
                    </ServiceCardLi>
                    <ServiceCardLi>
                        Contenido orientado al crecimiento digital
                    </ServiceCardLi>
                </ul>
            </ServiceCard>
        </div>
      </SectionContentSt>
      <SectionContentCen
        title="Detrás de la Cámara"
        bgColor="bg-brandblack-200"
      >
        {/* Layout container */}
        <div className="
          w-full
          lg:w-fit lg:mx-auto
          flex flex-col lg:flex-row gap-4 lg:gap-8"
        >
          {/* Left part */}
          <div className="w-full lg:w-100 flex flex-col gap-4 lg:gap-8">
            <div className="
              w-full p-8 relative
              gradient-border rounded-2xl"
            >
              <p className="text-gray-200 text-md lg:text-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </div>
            <div className="
              w-full p-8
              bg-linear-to-b from-brandwhite to-[#d2d2d2]
              rounded-2xl"
            >
              <p className="text-black text-md lg:text-lg font-semibold">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
              </p>
            </div>
          </div>
          {/* Right part */}
          <div className="w-full lg:w-100 flex flex-col gap-4 lg:gap-8">
            <div className="
              w-full h-60 relative
              lg:w-auto lg:h-auto lg:flex-1
              rounded-4xl overflow-hidden"
            >
              <Image
                src="/assets/about-1.webp"
                fill
                sizes="100%"
                className="w-full object-cover object-right"
                alt="Stock"
              />
            </div>
            <Link
              href="/quien-soy"
              className="
              w-full py-2
              flex items-center justify-center
              bg-transparent
              text-gray-200 text-md lg:text-lg text-center
              border border-gray-200 rounded-full"
            >
              Todo sobre mí y mi Equipo
              <i className="fa fa-arrow-right ml-2 scale-90" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </SectionContentCen>
      <SectionCTA bgColor="bg-brandgray-100" />
      {/* Footer wrapper */}
      <div className="w-full h-footer-height-mob lg:h-footer-height bg-brandgray-100"></div>
    </main> 
  )
}
