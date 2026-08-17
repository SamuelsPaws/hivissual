'use client'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'

const variants: Variants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    },
    hovered: {
        scale: 1.05,
        transition: { duration: 0.4, ease: 'easeOut' }
    }
}

const AboutCta = () => {
    return (
    <motion.div
        className="w-full"
        variants={variants}
        initial='hidden'
        whileInView='visible'
        whileHover='hovered'
        viewport={{ once: true, margin: '-8px 0px' }}
    >
        <Link
            href="/quien-soy"
            className="
            w-full md:w-full
            py-4 px-8
            flex items-center justify-center
            bg-brandwhite
            text-black text-my-lg text-center font-semibold
            rounded-full"
        >
            Todo Sobre Mí y Mi Equipo
        </Link>
    </motion.div>
    )
}

export default AboutCta