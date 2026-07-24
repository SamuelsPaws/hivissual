'use client'
import { motion } from "motion/react";
import Image from "next/image"

interface Props {
    message: string;
    author: string;
    imageUrl: string;
}

const TestimonialCard = ({ message, author, imageUrl }: Props) => {
  return (
    <motion.div
        className="
            w-full lg:w-1/3
            flex flex-col items-center gap-8"
    >
        <p className="
            text-sm lg:text-md xl:text-lg text-center text-gray-200
            before:content-['“'] before:text-2xl before:font-['Source_Serif_4']
            after:content-['”'] after:text-2xl after:font-['Source_Serif_4']"
        >
            {message}
        </p>
        {/* Lower div with name and photo */}
        <div className="
            w-full xl:px-8
            flex items-center gap-8"
        >
            <div className="
                w-16 aspect-square relative
                rounded-full overflow-hidden"
            >
                <Image
                    src={imageUrl}
                    fill
                    sizes="100%"
                    className="w-full h-full object-cover"
                    alt="Stock"
                />
            </div>
            <div className="flex-1 text-sm xl:text-md text-gray-200 text-left">
                — {author}
            </div>
        </div>
    </motion.div>
  )
}

export default TestimonialCard