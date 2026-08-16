import Image from "next/image"
import HeroLeftPart from "./HeroLeftPart"

const Hero = () => {
    return (
    <section className="
        h-screen md:h-auto relative
        px-8
        md:pt-32 md:pb-24 md:px-32
        xl:pt-48 xl:pb-32"
    >
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
            <Image
                src="/assets/hero.webp"
                fill
                sizes="100%"
                className="w-full h-full object-cover object-[80%_100%] lg:object-[100%_20%]"
                priority
                alt="Imagen de Hivissual"
            />
        </div>
        {/* Dark Overlay */}
        <div className="
            absolute inset-0 z-10
            bg-gradient-to-b from-black/40 via-black/80 to-black/95
            lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent"
        ></div>
        {/* Left content div */}
        <HeroLeftPart />
    </section>
  )
}

export default Hero