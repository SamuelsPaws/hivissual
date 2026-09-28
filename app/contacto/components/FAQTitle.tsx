'use client'
import { motion } from "motion/react";
import { fadeUpSmall, viewportOnce } from "@/lib/motion";

interface Props {
    text: string;
}

const FAQTitle = ({ text }: Props) => {
  return (
    <motion.h3
        className="mb-4 lg:mb-8 text-lg lg:text-2xl text-brandwhite font-semibold"
        variants={fadeUpSmall}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
    >
        {text}
    </motion.h3>
  )
}

export default FAQTitle
