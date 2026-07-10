'use client'
import { motion } from "motion/react";

interface Props {
    title: string;
    text: string;
}

const variants = {
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

const TrustCard = ({ title, text }: Props) => {
  return (
    <motion.div
        className="
            w-full lg:w-100 relative
            p-8 lg:p-8
            bg-linear-to-b from-brandwhite to-gray-200 rounded-2xl lg:rounded-4xl"
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <h3 className="
            mb-4 lg:mb-8
            text-black text-xl lg:text-2xl font-semibold"
        >
            {title}
        </h3>
        <p className="text-sm lg:text-md text-black">
            {text}
        </p>
    </motion.div>
  )
}

export default TrustCard