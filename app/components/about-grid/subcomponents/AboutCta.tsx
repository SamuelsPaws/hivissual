'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { fadeUp, lift, press, springSnappy, viewportOnce } from '@/lib/motion'

const AboutCta = () => {
    return (
    <motion.div
        className="w-full"
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        whileHover={lift}
        whileTap={press}
        transition={springSnappy}
        viewport={viewportOnce}
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
