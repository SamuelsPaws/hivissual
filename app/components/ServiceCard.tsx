'use client'
import { motion } from "motion/react";
import ServiceCardLi from "./ServiceCardLi";
import { springSmooth, springSnappy, viewportOnce } from "@/lib/motion";

interface Props {
    title: string;
    items: string[];
}

const variants = {
    hidden: {
        opacity: 0,
        y: 32
    },
    visible: {
        opacity: 1,
        y: 0,
        border: '1px solid #fff0',
        transition: springSmooth
    },
    hovered: {
        y: -3,
        border: '1px solid #fff8',
        transition: springSnappy
    }
}

const ServiceCard = ({ title, items }: Props) => {
  return (
    <motion.div
        className="
            w-full lg:w-100 relative
            p-8 lg:p-12
            rounded-2xl lg:rounded-4xl cursor-default
            gradient-border"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        whileHover="hovered"
    >
        <h3 className="
            mb-8 lg:mb-8
            text-brandwhite text-xl md:text-2xl font-semibold"
        >
            {title}
        </h3>
        <ul className="
            flex flex-col gap-4
            text-my-md"
        >
            {items.map((el, index) => (
                <ServiceCardLi
                    key={index}
                    text={el}
                />
            ))}
        </ul>
    </motion.div>
  )
}

export default ServiceCard
