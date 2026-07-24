'use client'
import { useEffect, useRef, useState } from "react"
import TestimonialTrack from "./TestimonialTrack"
import { Testimonial } from "@/lib/types"
import TestimonialCard from "./TestimonialCard";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

interface Props {
    testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: Props) => {
    const [currIndex, setCurrIndex] = useState<number>(0)
    const showingCards = useMediaQuery("(min-width: 1024px)") ? 3 : 1

    const increaseCurrIndex = () => {
        setCurrIndex(prev => prev + 1)
    }

    const decreaseCurrIndex = () => {
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
                <button
                    onClick={decreaseCurrIndex}
                    className="
                        w-[60%] h-40 relative
                        bg-white/20 md:hover:bg-white/40 duration-200
                        rounded-r-full"
                >
                    <img
                        src="/assets/black-arrow-left.svg"
                        className="
                            w-8 h-8
                            absolute top-1/2 left-[40%] -translate-1/2"
                    />
                </button>
            }
        </div>
        <div className="
            w-[60%] lg:w-[80%] h-120
            flex justify-center items-center gap-[64px]"
        >
            {testimonials.slice(currIndex, showingCards + currIndex).map(({ message, author, imageUrl }, index) =>
                <TestimonialCard
                    key={index}
                    message={message}
                    author={author}
                    imageUrl={imageUrl}
                />
            )}
        </div>
        <div className="
            flex-1
            flex justify-end items-center"
        >
            {currIndex < testimonials.length - showingCards &&
                <button
                    onClick={increaseCurrIndex}
                    className="
                        w-[60%] h-40 relative
                        bg-white/20 md:hover:bg-white/40 duration-200
                        rounded-l-full"
                >
                    <img
                        src="/assets/black-arrow-right.svg"
                        className="
                            w-8 h-8
                            absolute top-1/2 left-[60%] -translate-1/2"
                    />
                </button>
            }
        </div>
    </div>
  )
}

export default TestimonialSlider