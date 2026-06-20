import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="
        h-screen lg:h-auto relative
        px-8
        lg:pt-32 lg:pb-24 lg:px-32"
    >
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
            <Image
                src="/assets/hero.webp"
                fill
                sizes="100%"
                className="w-full h-full object-cover object-[80%_100%] lg:object-top-right"
                priority
                alt="Hero image"
            />
        </div>
        {/* Dark Overlay */}
        <div className="
            absolute inset-0 z-10
            bg-gradient-to-b from-black/40 via-black/80 to-black/95
            lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent"
        ></div>
        {/* Left content div */}
        <div className="
            w-full h-full
            lg:w-[50%] lg:h-auto
            relative z-20
            flex flex-col justify-center items-center gap-6 lg:gap-8
            text-center"
        >
            <h1 className="
                text-brandwhite font-semibold
                text-3xl leading-10
                lg:text-[2.5rem] lg:leading-14 xl:leading-16"
            >
                Tu marca merece verse tan <span className="text-brandgold-600">profesional</span> como el trabajo que haces.
            </h1>
            <p className="text-sm lg:text-lg text-gray-200">
                Hivissual - Fotografía, video y contenido estratégico para empresas y profesionales que quieren destacar en redes sociales y medios digitales.
            </p>
            <Link
                href='/portafolio'
                className="
                    block mt-2 lg:mt-0
                    px-6 py-3
                    lg:px-8 lg:py-4
                    bg-brandwhite
                    text-lg lg:text-2xl font-semibold text-black
                    rounded-full"
            >
                Explorar Portafolio
            </Link>
            <div className="
                w-screen h-8 mt-4
                lg:w-140 lg:h-12
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-100 lg:opacity-70 mix-blend-screen blur-[20px]
                bg-contain"
            ></div>
        </div>
    </section>
  )
}

export default Hero