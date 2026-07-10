'use client'
import { stagger } from "motion"
import ServiceCard from "./ServiceCard"
import ServiceCardLi from "./ServiceCardLi"
import { motion } from "motion/react"

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.3)
        }
    }
}

const ServiceGrid = () => {
  return (
    <motion.div
        className="
            w-fit mx-auto
            flex justify-center gap-8 flex-wrap"
        variants={gridVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <ServiceCard title="Fotografía">
            <ul className="
                flex flex-col gap-4
                text-md lg:text-md"
            >
                <ServiceCardLi>
                    Fotografía comercial
                </ServiceCardLi>
                <ServiceCardLi>
                    Fotografía de producto
                </ServiceCardLi>
                <ServiceCardLi>
                    Fotografía para redes sociales
                </ServiceCardLi>
            </ul>
        </ServiceCard>
        <ServiceCard title="Producción de Video">
            <ul className="
                flex flex-col gap-4
                text-md lg:text-md"
            >
                <ServiceCardLi>
                    Videos promocionales
                </ServiceCardLi>
                <ServiceCardLi>
                    Reels y contenido corto
                </ServiceCardLi>
                <ServiceCardLi>
                    Producción audiovisual para marcas
                </ServiceCardLi>
            </ul>
        </ServiceCard>
        <ServiceCard title="Estrategia de Contenido">
            <ul className="
                flex flex-col gap-4
                text-md lg:text-md"
            >
                <ServiceCardLi>
                    Planificación de contenido
                </ServiceCardLi>
                <ServiceCardLi>
                    Dirección creativa
                </ServiceCardLi>
                <ServiceCardLi>
                    Contenido orientado al crecimiento digital
                </ServiceCardLi>
            </ul>
        </ServiceCard>
    </motion.div>
  )
}

export default ServiceGrid