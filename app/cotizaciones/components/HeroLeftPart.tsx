'use client'
import { motion } from "motion/react"
import Image from "next/image"

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
    image: {
        hidden: {
            opacity: 0,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: 0.6
            }
        }
    },
}

const HeroLeftPart = () => {
  return (
    <div className="
        w-full lg:w-1/2 z-10
        flex flex-col justify-center items-center gap-4 lg:gap-8"
    >
        <motion.h1
            className="
                text-3xl leading-12
                lg:text-6xl lg:leading-20
                text-brandwhite text-center font-semibold"
            variants={variants.h1}
            initial="hidden"
            animate="visible"
        >
            Hablemos de Tu Proyecto
        </motion.h1>
        <motion.p
            className="text-sm lg:text-lg text-gray-200 text-center"
            variants={variants.subheadline}
            initial="hidden"
            animate="visible"
        >
            Cuéntame qué tienes en mente y veremos cómo transformarlo en contenido que impulse tu marca.
        </motion.p>
        <motion.div
            className="
                w-[60%] lg:w-60 aspect-square relative
                mt-2 lg:mt-0
                rounded-full overflow-hidden shadow-lg"
            variants={variants.image}
            initial="hidden"
            animate="visible"
        >
            <Image
                src="/assets/about-1.webp"
                fill
                sizes="100%"
                priority
                className="w-full h-full object-cover"
                alt="Stock"
            />
        </motion.div>
    </div>
  )
}

export default HeroLeftPart