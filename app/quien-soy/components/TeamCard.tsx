'use client'
import { motion } from "motion/react";
import Image from "next/image"

interface Props {
    name: string;
    role: string;
    imgSrc: string;
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

const TeamCard = ({ name, role, imgSrc }: Props) => {
  return (
    <motion.div
        className="w-[80%] lg:w-auto flex flex-col gap-4 lg:gap-8"
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <div className="
            w-full lg:w-75 aspect-square relative
            rounded-4xl overflow-hidden"
        >
            <Image
                src={imgSrc}
                fill
                sizes="100%"
                className="w-full h-full object-cover scale-200"
                alt="Project Manager de Hivissual"
            />
        </div>
        <div className="self-stretch flex flex-col items-center gap-2">
            <span className="text-2xl lg:text-3xl text-brandwhite font-semibold">
                {name}
            </span>
            <span className="text-md lg:text-lg text-gray-200">
                {role}
            </span>
        </div>
    </motion.div>
  )
}

export default TeamCard