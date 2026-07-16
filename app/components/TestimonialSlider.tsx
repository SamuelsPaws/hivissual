'use client'
import { useState } from "react"
import TestimonialTrack from "./TestimonialTrack"
import { Testimonial } from "@/lib/types"

interface Props {
    testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: Props) => {
    const [currIndex, setCurrIndex] = useState<number>(0)

    const trackTranslateStr = `-translate-x-[calc(((100%+64px)/3)*${currIndex})]`

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
            w-[80%]
            overflow-hidden"
        >
            <TestimonialTrack
                testimonials={testimonials}
                translateStr={trackTranslateStr}
            />
        </div>
        <div className="
            flex-1
            flex justify-end items-center"
        >
            {currIndex < testimonials.length - 3 &&
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