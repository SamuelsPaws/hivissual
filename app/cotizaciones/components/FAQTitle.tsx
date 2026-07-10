'use client'
import { motion } from "motion/react";

interface Props {
    text: string;
}

const variants = {
    hidden: {
        opacity: 0,
        y: 8
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}

const FAQTitle = ({ text }: Props) => {
  return (
    <motion.h3
        className="mb-4 lg:mb-8 text-lg lg:text-2xl text-brandwhite font-semibold"
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-8px 0px' }}
    >
        {text}
    </motion.h3>
  )
}

export default FAQTitle