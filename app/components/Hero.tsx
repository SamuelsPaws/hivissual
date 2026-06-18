import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="
        pt-32 pb-24 px-32 relative"
    >
        {/* BG Image*/}
        <div className="absolute inset-0 z-0">
            <Image
                src="/assets/hero.webp"
                fill
                sizes="100%"
                className="object-cover"
                priority
                alt="Hero image"
            />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/20 to-transparent"></div>
        {/* Left content div */}
        <div className="
            w-[50%] relative z-20
            flex flex-col items-center gap-8
            text-center"
        >
            <h1 className="text-5xl text-brandwhite font-semibold leading-14 xl:leading-16">
                Tu marca merece verse tan <span className="text-brandgold-600">profesional</span> como el trabajo que haces.
            </h1>
            <p className="text-lg text-brandwhite/90">
                Fotografía, video y contenido estratégico para empresas y profesionales que quieren destacar en redes sociales y medios digitales.
            </p>
            <Link
                href='/portafolio'
                className="
                    px-8 py-4
                    bg-brandwhite
                    text-2xl font-semibold text-black
                    rounded-full"
            >
                Explorar Portafolio
            </Link>
            <div className="
                w-140 h-12 mt-4
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-70 mix-blend-screen blur-[20px]
                bg-contain"
            ></div>
        </div>
    </section>
  )
}

export default Hero