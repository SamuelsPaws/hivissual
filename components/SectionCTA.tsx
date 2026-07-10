'use client'
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
    bgColor: string;
}

const variants = {
    h2: {
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
                delay: 0.2
            }
        }
    },
    cta: {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: 0.4
            }
        }
    }
}

const SectionCTA = ({ bgColor }: Props) => {
  return (
    <section className={clsx(
        "h-120 lg:h-140 px-8",
        "flex flex-col justify-center items-center gap-8 lg:gap-16",
        bgColor
    )}>
        <motion.h2
            className="text-2xl lg:text-5xl text-brandwhite text-center font-semibold"
            variants={variants.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px 0px' }}
        >
            ¿Listo para crear algo para tu marca?
        </motion.h2>
        <motion.p
            className="text-md lg:text-lg text-gray-200 text-center"
            variants={variants.subheadline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px 0px' }}
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
            variants={variants.cta}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px 0px' }}
        >
            Escríbeme a WhatsApp
            <i className="fa fa-whatsapp scale-150 ml-6" aria-hidden="true"></i>
        </motion.a>
    </section>
  )
}

export default SectionCTA