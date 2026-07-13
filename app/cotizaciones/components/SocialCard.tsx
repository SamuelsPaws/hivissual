'use client'
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
    iconClass: string;
    text: string;
    href: string;
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

const SocialCard = ({ iconClass, text, href }: Props) => {
  return (
    <motion.a
        href={href}
        target="_blank"
        className="
            w-fit p-8 relative
            flex items-center gap-4
            text-xl lg:text-2xl text-gray-300
            gradient-border rounded-2xl
            outline outline-transparent lg:hover:outline-gray-300"
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <i className={clsx("fa", iconClass)}></i>
        <span>{text}</span>
    </motion.a>
  )
}

export default SocialCard