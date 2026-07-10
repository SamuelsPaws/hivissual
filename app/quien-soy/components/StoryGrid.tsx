'use client'
import { motion } from "motion/react"
import Image from "next/image"

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

const StoryGrid = () => {
  return (
    <div className="
        w-full lg:w-fit mx-auto
        flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
    >
        <div className="
            flex flex-col gap-4 lg:gap-8
            text-sm lg:text-lg"
        >
            <motion.div
                className="
                    w-full lg:w-140 p-8 relative
                    bg-linear-to-b from-gray-100 to-gray-300 rounded-2xl"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-24px 0px' }}
            >
                <p className="text-black text-left">
                    Mi pasión por la fotografía y el video comenzó desde muy joven, pero mi camino profesional tomó forma a los 21 años, cuando tuve la oportunidad de incorporarme al equipo de Meraki Beauty Center.
                </p>
            </motion.div>
            <motion.div
                className="
                    w-full lg:w-140 p-8 relative
                    bg-linear-to-b from-gray-100 to-gray-300 rounded-2xl"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-24px 0px' }}
            >
                <p className="text-black text-left">
                    En ese momento también me encontraba estudiando Artes Visuales, una experiencia que me permitió combinar la creatividad con el marketing digital.
                </p>
            </motion.div>
            <motion.div
                className="
                    w-full lg:w-140 p-8 relative
                    bg-linear-to-b from-gray-100 to-gray-300 rounded-2xl"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-24px 0px' }}
            >
                <p className="text-black text-left">
                    Desde entonces, he desarrollado un enfoque que une la estética y la estrategia, creando contenido visual que no solo capta la atención, sino que también ayuda a las marcas a conectar con su audiencia y alcanzar sus objetivos comerciales.
                </p>
            </motion.div>
        </div>
        <motion.div
            className="
                w-full lg:w-100 aspect-square relative
                rounded-4xl overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px 0px' }}
        >
            <Image
                src="/assets/about-1.webp"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
                alt="Yo"
            />
        </motion.div>
    </div>
  )
}

export default StoryGrid