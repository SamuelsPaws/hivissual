import Image from "next/image"
import AboutCta from "./subcomponents/AboutCta"

const AboutGrid = () => {
  return (
    <div className="
        w-full z-10 relative
        md:w-fit md:mx-auto
        flex flex-col md:flex-row gap-4 md:gap-8"
    >
        {/* Left part */}
        <div className="w-full md:w-120 flex flex-col gap-4 md:gap-8">
            <div className="
                w-full p-8 relative
                gradient-border rounded-2xl
                reveal-down"
            >
                <p className="text-gray-200 text-my-md">
                    Hivissual es un estudio creativo especializado en la creación de contenido visual y gestión de redes sociales, enfocado en ayudar a emprendedores y marcas personales a destacar en el entorno digital.
                </p>
            </div>
            <div className="
                w-full p-8
                bg-linear-to-b from-brandwhite to-[#d2d2d2]
                rounded-2xl
                reveal-up"
            >
                <p className="text-black text-my-md font-normal">
                    Mi trabajo se basa en una idea simple: cada marca tiene una historia que merece ser contada de la mejor manera posible. Esta filosofía me ayuda a crear contenido visual auténtico, estratégico y alineado con el crecimiento de cada marca.
                </p>
            </div>
        </div>
        {/* Right part */}
        <div className="w-full md:w-120 flex flex-col gap-4 md:gap-8">
            <div
                className="
                    w-full h-60 relative
                    md:w-full md:flex-1 md:h-auto
                    rounded-4xl overflow-hidden
                    reveal-left"
            >
                <Image
                    src="/assets/about-1.webp"
                    fill
                    sizes="100%"
                    className="w-full object-cover object-right"
                    alt="Stock"
                />
            </div>
            <AboutCta />
        </div>
    </div>
  )
}

export default AboutGrid