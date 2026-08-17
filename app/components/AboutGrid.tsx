'use client'
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}

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
            <motion.div
                className="w-full"
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-8px 0px' }}
            >
                <Link
                    href="/quien-soy"
                    className="
                    w-full md:w-full
                    py-4 px-8
                    flex items-center justify-center
                    bg-transparent
                    text-gray-200 text-my-md text-center
                    border border-gray-200 rounded-full"
                >
                    Todo sobre mí y mi Equipo
                    <i className="fa fa-arrow-right ml-2 scale-90" aria-hidden="true"></i>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutGrid