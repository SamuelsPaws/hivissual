import SectionContentSt from "@/components/SectionContentSt";
import Hero from "./components/Hero";
import Image from "next/image";
import Link from "next/link";
import SectionContentCen from "@/components/SectionContentCen";
import SectionCTA from "@/components/SectionCTA";
import { getFeaturedMedia } from "@/lib/contentful-queries";
import GallerySimple from "@/components/GallerySimple";
import ServiceCardGrid from "./components/ServiceCardGrid";
import AboutGrid from "./components/AboutGrid";

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
        <ServiceCardGrid />
      </SectionContentSt>
      <SectionContentCen
        title="Detrás de la Cámara"
        bgColor="bg-brandblack-200"
      >
        <AboutGrid />
      </SectionContentCen>
      <SectionCTA bgColor="bg-brandgray-100" />
      {/* Footer wrapper */}
      <div className="w-full h-footer-height-mob lg:h-footer-height bg-brandgray-100"></div>
    </main> 
  )
}
