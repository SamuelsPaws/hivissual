'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

const variants = {
    h1: {
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
    },
    subheadline: {
        hidden: {
            opacity: 0,
            y: 16
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.3
            }
        }
    },
    cta: {
        hidden: {
            opacity: 0,
            y: 16
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.6
            }
        }
    },
    glow: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.9
            }
        }
    },
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
        <motion.h1
            className="
                text-brandwhite font-semibold
                text-3xl leading-10
                lg:text-[2.5rem] lg:leading-14 xl:leading-16"
            variants={variants.h1}
            initial="hidden"
            animate="visible"
        >
            Tu marca merece verse tan <span className="text-brandgold-600">profesional</span> como el trabajo que haces.
        </motion.h1>
        <motion.p
            className="text-sm lg:text-lg text-gray-200"
            variants={variants.subheadline}
            initial="hidden"
            animate="visible"
        >
            Hivissual - Fotografía, video y contenido estratégico para empresas y profesionales que quieren destacar en redes sociales y medios digitales.
        </motion.p>
        <motion.div
            className='mt-2 lg:mt-0'
            variants={variants.cta}
            initial="hidden"
            animate="visible"
        >
            <Link
                href='/portafolio'
                className="
                    block
                    px-6 py-3
                    lg:px-8 lg:py-4
                    bg-brandwhite
                    text-lg lg:text-2xl font-semibold text-black
                    rounded-full"
            >
                Explorar Portafolio
            </Link>
        </motion.div>
        {/* Glow */}
        <motion.div
            className="
                w-screen h-8 mt-4
                lg:w-140 lg:h-12
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-100 lg:opacity-70 mix-blend-screen blur-[20px]
                bg-contain"
            variants={variants.glow}
            initial="hidden"
            animate="visible"
        ></motion.div>
    </div>
  )
}

export default HeroLeftPart