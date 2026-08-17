'use client'
import { useEffect, useRef, useState } from "react";
import ParallaxImg from "./ParallaxImg";
import clsx from "clsx";

interface Props {
    gallery: string[];
}

const ParallaxTrack = ({ gallery }: Props) => {
    const [index, setIndex] = useState<number>(0)
    const [hasDuration, setHasDuration] = useState<boolean>(true)
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index >= 5) {
                setHasDuration(false)
                setIndex(0)

                requestAnimationFrame(() => {
                    setHasDuration(true)
                    setIndex(1)
                })
            } else {
                setIndex(prev => prev + 1)
            }
        }, 3000)

        return () => clearTimeout(timeout)
    }, [index])

    return (
    <div
        className={clsx(
            "h-full",
            "flex gap-4",
            hasDuration ? "duration-1000" : "duration-0",
            "ease-in-out"
        )}
        style={{
            transform: `translateX(calc(${index * 20}%)`
        }}
    >
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={0} src="/assets/about-2.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={1} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={2} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={3} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={4} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={5} src="/assets/about-2.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={6} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={7} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={8} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={9} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={10} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={11} src="/assets/about-1.webp" />
        <ParallaxImg hasDuration={hasDuration} index={index} thisIndex={12} src="/assets/about-1.webp" />
    </div>
    )
}

export default ParallaxTrack