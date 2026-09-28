'use client'
import { motion } from "motion/react";
import Image from "next/image"
import { fadeUp, viewportOnce } from "@/lib/motion";
import clsx from "clsx";

interface Props {
    name: string;
    role: string;
    imgSrc: string;
    imgCn?: string;
}

const TeamCard = ({ name, role, imgSrc, imgCn }: Props) => {
  return (
    <motion.div
        className="
            w-full md:w-auto group
            flex flex-col gap-4 md:gap-8"
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
    >
        <div className="
            w-full md:w-75 aspect-square relative
            rounded-4xl overflow-hidden"
        >
            <Image
                src={imgSrc}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className={clsx(
                    "w-full h-full object-cover",
                    imgCn,
                    "md:group-hover:scale-110 duration-400 ease-out"
                )}
                alt="Miembro de Hivissual"
            />
        </div>
        <div className="self-stretch flex flex-col items-center gap-2">
            <span className="
                md:group-hover:-translate-y-2 duration-400 ease-out
                text-2xl md:text-3xl text-brandwhite font-semibold"
            >
                {name}
            </span>
            <span className="
                md:group-hover:-translate-y-3 duration-600 ease-out
                text-md md:text-lg text-gray-200"
            >
                {role}
            </span>
        </div>
    </motion.div>
  )
}

export default TeamCard
