'use client'
import clsx from "clsx";
import { motion } from "motion/react";
import CtaParallax from "./subcomponents/CtaParallax";
import { fadeUp, lift, press, scaleReveal, springSnappy, viewportOnce } from "@/lib/motion";

interface Props {
    bgColor: string;
    gallery: string[];
}

const SectionCTA = ({ bgColor, gallery }: Props) => {
  return (
    <section className={clsx(
        "py-16 md:py-32 px-0",
        "flex flex-col justify-center items-center gap-12 lg:gap-16",
        bgColor
    )}>
        <motion.h2
            className="
                mx-8
                text-2xl lg:text-5xl text-brandwhite text-center
                font-semibold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
        >
            ¿Listo para crear algo para tu marca?
        </motion.h2>
        <CtaParallax gallery={gallery} />
        <motion.p
            className="
                mx-8
                text-md lg:text-lg text-gray-200 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
        >
            Cuéntame sobre tu proyecto y te responderé personalmente.
        </motion.p>
        <motion.a
            href="https://wa.me/593983523721?text=%C2%A1Hola%21%20Me%20interesa%20solicitar%20un%20proyecto%20para%20mi%20marca."
            target="_blank"
            rel="noopener noreferrer"
            className="
                px-8 py-4
                lg:px-12 lg:py-6
                text-brandwhite text-md lg:text-2xl font-semibold whitespace-nowrap
                bg-whatsapp-400 rounded-full"
            aria-label="Chat on WhatsApp"
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            whileHover={lift}
            whileTap={press}
            transition={springSnappy}
            viewport={viewportOnce}
        >
            Escríbeme a WhatsApp
            <i className="fa fa-whatsapp scale-150 ml-6" aria-hidden="true"></i>
        </motion.a>
    </section>
  )
}

export default SectionCTA
