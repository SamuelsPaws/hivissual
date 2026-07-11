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

const FAQAnswer = ({ text }: Props) => {
  return (
    <motion.p
        className="
            mb-8 lg:mb-16 p-4
            text-sm lg:text-lg text-gray-200
            border border-brandgold-100 rounded-xl"
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-8px 0px' }}
    >
        {text}
    </motion.p>
  )
}

export default FAQAnswer