'use client'
import { motion } from "motion/react";

interface Props {
    title: string;
    children: React.ReactNode;
}

const cardVariants = {
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

const ServiceCard = ({ title, children }: Props) => {
  return (
    <motion.div
        className="
            w-full lg:w-100 relative
            p-8 lg:p-12
            rounded-2xl lg:rounded-4xl
            gradient-border"
        variants={cardVariants}
    >
        <h3 className="
            mb-8 lg:mb-8
            text-brandwhite text-xl lg:text-2xl font-semibold"
        >
            {title}
        </h3>
        {children}
    </motion.div>
  )
}

export default ServiceCard