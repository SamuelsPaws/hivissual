import SectionContentSt from "@/components/SectionContentSt";
import Hero from "./components/Hero";
import Image from "next/image";
import MasonryItem from "./components/MasonryItem";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import ServiceCardLi from "./components/ServiceCardLi";
import SectionContentCen from "@/components/SectionContentCen";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionContentSt
        title="Mira mis trabajos destacados"
        bgColor="bg-brandblack"
      >
        {/* Masonry Grid */}
        <div className="
          w-fit mx-auto mb-24
          grid grid-cols-[220px_220px_220px_220px] grid-rows-[180px_180px] gap-8"
        >
          <MasonryItem spansTwo={false} />
          <MasonryItem spansTwo={true} />
          <MasonryItem spansTwo={false} />
          <MasonryItem spansTwo={true} />
          <MasonryItem spansTwo={false} />
          <MasonryItem spansTwo={false} />
        </div>
        <Link
          href="/portafolio"
          className="
            block w-fit
            mx-auto px-8 py-4
            bg-brandwhite
            text-black text-xl font-semibold
            rounded-full"
        >
          Ver Portafolio Completo
        </Link>
      </SectionContentSt>
      <SectionContentSt
        title="Conoce mis servicios"
        bgColor="bg-brandblack-100"
      >
        <div className="w-fit mx-auto flex gap-8">
          <ServiceCard title="Fotografía">
            <ul className="
              flex flex-col gap-4
              text-lg"
            >
              <ServiceCardLi>
                Sesiones fotográficas profesionales para empresas, marcas y negocios
              </ServiceCardLi>
              <ServiceCardLi>
                Imágenes pensadas para transmitir confianza en tus publicidades
              </ServiceCardLi>
            </ul>
          </ServiceCard>
          <ServiceCard title="Producción de Video">
            <ul className="
              flex flex-col gap-4
              text-lg"
            >
              <ServiceCardLi>
                Sesiones fotográficas profesionales para empresas, marcas y negocios
              </ServiceCardLi>
              <ServiceCardLi>
                Imágenes pensadas para transmitir confianza en tus publicidades
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
        <div className="w-fit mx-auto flex gap-8">
          {/* Left part */}
          <div className="w-100 flex flex-col gap-8">
            <div className="
              w-full p-8 relative
              gradient-border rounded-2xl"
            >
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
            </div>
            <div className="
              w-full p-8
              bg-linear-to-b from-brandwhite to-[#d2d2d2]
              text-black text-lg font-semibold
              rounded-2xl"
            >
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
            </div>
          </div>
          {/* Right part */}
          <div className="w-100 flex flex-col gap-8">
            <div className="
              flex-1 relative
              rounded-4xl overflow-hidden"
            >
              <Image
                src="/assets/stock.jpg"
                fill
                sizes="100%"
                className="w-full object-cover"
                alt="Stock"
              />
            </div>
            <Link
              href="/quien-soy"
              className="
              px-4 py-2
              bg-transparent
              text-brandwhite text-lg text-center
              border border-brandwhite rounded-full"
            >
              Todo Sobre Mí y mi Equipo
              <i className="fa fa-arrow-right ml-2 scale-90" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </SectionContentCen>
      {/* Footer wrapper */}
      <div className="w-full h-footer-height bg-brandblack-200"></div>
    </main> 
  )
}
