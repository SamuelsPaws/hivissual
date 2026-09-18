'use client'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'
import { springSmooth, springSnappy } from '@/lib/motion'

const ctaVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 0.8,
        scale: 1,
        transition: {
            ...springSnappy,
            delay: 0.4
        }
    }
}

const HeroLeftPart = () => {
  return (
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
            lg:text-[2.5rem] lg:leading-14 xl:leading-16
            animate-fade-in-right-400"
        >
            Tu marca merece verse tan <span className="text-image">profesional</span> como el trabajo que haces.
        </h1>
        <p className="
            text-sm lg:text-lg text-gray-200
            animate-fade-in-right-800"
        >
            Hivissual | Fotografía, video y contenido estratégico para empresas y profesionales que quieren destacar en redes sociales y medios digitales.
        </p>
        <div className="relative">
            <motion.div
                className='mt-2 lg:mt-0 z-50 relative'
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
            >
                <Link
                    href='/portafolio/redes-sociales'
                    className="
                        block w-fit
                        mx-auto
                        px-6 py-3
                        lg:px-8 lg:py-4
                        bg-brandwhite
                        text-lg lg:text-2xl font-semibold text-black
                        rounded-full md:hover:scale-[1.05] duration-400 ease-out"
                >
                    Explorar Portafolio
                </Link>
            </motion.div>
            {/* Glow */}
            <div className="
                absolute -bottom-5 left-1/2 -translate-x-1/2
                w-[160%] h-8 z-20
                lg:w-[140%] lg:h-10
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-100 lg:opacity-80 mix-blend-screen blur-[8px]
                bg-contain"
            ></div>
        </div>
    </div>
  )
}

export default HeroLeftPart
