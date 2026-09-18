'use client'
import { motion } from "motion/react";
import { fadeUpSmall, viewportOnce } from "@/lib/motion";

interface Props {
    text: string;
}

const FAQAnswer = ({ text }: Props) => {
  return (
    <motion.p
        className="
            mb-8 lg:mb-16 p-4
            text-sm lg:text-lg text-gray-200
            border border-brandgold-100 rounded-xl"
        variants={fadeUpSmall}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
    >
        {text}
    </motion.p>
  )
}

export default FAQAnswer
