'use client'
import { useEffect, useRef, useState } from "react";
import ParallaxImg from "./ParallaxImg";
import clsx from "clsx";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

interface Props {
    gallery: string[];
}

const ParallaxTrack = ({ gallery }: Props) => {
    const [index, setIndex] = useState<number>(0)
    const [hasDuration, setHasDuration] = useState<boolean>(true)
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const showingCards = isDesktop ? 5 : 3
    const resetIndex = isDesktop ? 5 : 6
    const gap = isDesktop ? 16 : 8
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index >= resetIndex) {
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

    useEffect(() => {
        if (!cardRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setCardWidth(entry.contentRect.width);
        });

        observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, []);

    const offset = index * (cardWidth + gap)

    return (
    <div
        className={clsx(
            "h-full",
            "flex gap-2 md:gap-4",
            hasDuration ? "duration-1000" : "duration-0",
            "ease-in-out"
        )}
        style={{
            transform: `translateX(-${offset}px)`
        }}
    >
        {[ ...gallery.slice(0, resetIndex), ...gallery.slice(0, resetIndex)].map((el, i) => (
            <ParallaxImg
                key={i}
                ref={i === 0 ? cardRef : undefined}
                src={el}
                index={index}
                thisIndex={i}
                hasDuration={hasDuration}
            />
        ))}
    </div>
    )
}

export default ParallaxTrack