'use client'
import { useState } from "react";
import { Testimonial } from "@/lib/types";
import TestimonialCard from "./TestimonialCard";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import { AnimatePresence, motion } from "motion/react";
import { press, springSmooth, springSnappy } from "@/lib/motion";

interface Props {
    testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: Props) => {
    const [currIndex, setCurrIndex] = useState<number>(0)
    const [direction, setDirection] = useState<1 | -1>(1)
    const showingCards = useMediaQuery("(min-width: 1024px)") ? 3 : 1

    const increaseCurrIndex = () => {
        setDirection(1)
        setCurrIndex(prev => prev + 1)
    }

    const decreaseCurrIndex = () => {
        setDirection(-1)
        setCurrIndex(prev => prev - 1)
    }

  return (
    <div className="
        w-full
        flex justify-between items-center"
    >
        <div className="
            flex-1
            flex justify-start items-center"
        >
            {currIndex > 0 &&
                <motion.button
                    onClick={decreaseCurrIndex}
                    className="
                        w-[60%] h-40 relative
                        bg-white/20 md:hover:bg-white/40
                        rounded-r-full"
                    whileTap={press}
                    transition={springSnappy}
                    aria-label="Testimonios anteriores"
                >
                        <img
                            src="/assets/black-arrow-left.svg"
                            alt=""
                        className="
                            w-8 h-8
                            absolute top-1/2 left-[40%] -translate-1/2"
                    />
                </motion.button>
            }
        </div>
        <div className="
            w-[60%] lg:w-[80%] h-100 lg:h-120
            flex justify-center items-center gap-[64px]"
        >
            <AnimatePresence mode="popLayout" initial={false}>
                {testimonials.slice(currIndex, showingCards + currIndex).map(({ message, author, imageUrl }) =>
                    <motion.div
                        layout
                        key={`${author}-${imageUrl}`}
                        className="w-full lg:w-1/3"
                        initial={{ opacity: 0, x: direction * 18, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: direction * -18, scale: 0.98 }}
                        transition={springSmooth}
                    >
                        <TestimonialCard message={message} author={author} imageUrl={imageUrl} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        <div className="
            flex-1
            flex justify-end items-center"
        >
            {currIndex < testimonials.length - showingCards &&
                <motion.button
                    onClick={increaseCurrIndex}
                    className="
                        w-[60%] h-40 relative
                        bg-white/20 md:hover:bg-white/40
                        rounded-l-full"
                    whileTap={press}
                    transition={springSnappy}
                    aria-label="Testimonios siguientes"
                >
                        <img
                            src="/assets/black-arrow-right.svg"
                            alt=""
                        className="
                            w-8 h-8
                            absolute top-1/2 left-[60%] -translate-1/2"
                    />
                </motion.button>
            }
        </div>
    </div>
  )
}

export default TestimonialSlider
