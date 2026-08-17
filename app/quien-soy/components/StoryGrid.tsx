'use client'
import { motion } from "motion/react"
import Image from "next/image"
import StoryCard from "./StoryCard"
import StoryPhoto from "./StoryPhoto"

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
        grid grid-cols-1 md:grid-cols-2 gap-8"
    >
        <StoryCard
            text="Mi pasión por la fotografía y el video comenzó desde muy joven, pero mi camino profesional tomó forma a los 21 años, cuando tuve la oportunidad de incorporarme al equipo de Meraki Beauty Center."
            className="reveal-right"
        />
        <StoryPhoto
            src="/assets/about-1.webp"
            className="reveal-left"
        />
        <StoryPhoto
            src="/assets/about-1.webp"
            className="z-20 reveal-left order-2 md:order-0"
        />
        <StoryCard
            text="En ese momento también me encontraba estudiando Artes Visuales, una experiencia que me permitió combinar la creatividad con el marketing digital."
            className="reveal-right order-1 md:order-0"
        />
        <StoryCard
            text="Desde entonces, he desarrollado un enfoque que une la estética y la estrategia, creando contenido visual que no solo capta la atención, sino que también ayuda a las marcas a conectar con su audiencia y alcanzar sus objetivos comerciales."
            className="reveal-right order-3 md:order-0"
        />
        <StoryPhoto
            src="/assets/about-1.webp"
            className="reveal-left order-4 md:order-0"
        />
    </div>
  )
}

export default StoryGrid