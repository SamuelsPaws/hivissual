import SectionContentSt from "@/components/SectionContentSt";
import Hero from "./components/Hero";
import Link from "next/link";
import SectionContentCen from "@/components/SectionContentCen";
import SectionCTA from "@/components/SectionCTA";
import { getFeaturedMedia, getTestimonials } from "@/lib/contentful-queries";
import GallerySimple from "@/components/GallerySimple";
import ServiceCardGrid from "./components/ServiceCardGrid";
import AboutGrid from "./components/AboutGrid";
import TestimonialSlider from "./components/TestimonialSlider";

export default async function Home() {
  const featuredEntries = await getFeaturedMedia()
  const testimonials = await getTestimonials()
  console.log(testimonials);
  

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
      <SectionContentSt
        title="Reseñas y Testimonios"
        bgColor="bg-brandblack-200"
      >
        <TestimonialSlider testimonials={testimonials} />
      </SectionContentSt>
      <SectionContentCen
        title="Detrás de la Cámara"
        bgColor="bg-brandgray-100"
      >
        <AboutGrid />
      </SectionContentCen>
      <SectionCTA bgColor="bg-brandgray-200" />
      {/* Footer wrapper */}
      <div className="w-full h-footer-height-mob lg:h-footer-height bg-brandgray-200"></div>
    </main> 
  )
}
