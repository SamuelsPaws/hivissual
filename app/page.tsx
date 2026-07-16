import SectionContentSt from "@/components/SectionContentSt";
import Hero from "./components/Hero";
import Link from "next/link";
import SectionContentCen from "@/components/SectionContentCen";
import SectionCTA from "@/components/SectionCTA";
import { getFeaturedMedia } from "@/lib/contentful-queries";
import GallerySimple from "@/components/GallerySimple";
import ServiceCardGrid from "./components/ServiceCardGrid";
import AboutGrid from "./components/AboutGrid";
import TestimonialSlider from "./components/TestimonialSlider";

const testimonials = [
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
  {
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
  {
    message: 'PUTA dolor, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
  {
    message: 'maricon MARICPON, sit amet consectetur adipisicing elit. Itaque perferendis eum perspiciatis asperiores. Ullam provident sapiente dolor cum harum commodi nesciunt quisquam suscipit molestias libero obcaecati, magni veniam, cumque officiis.',
    author: 'Michelle Q., CEO de Meraki Beauty Center',
    imageUrl: '/assets/about-1.webp'
  },
]

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
      {false && <SectionContentSt
        title="Reseñas y Testimonios"
        bgColor="bg-brandblack-200"
      >
        <TestimonialSlider testimonials={testimonials} />
      </SectionContentSt>}
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
