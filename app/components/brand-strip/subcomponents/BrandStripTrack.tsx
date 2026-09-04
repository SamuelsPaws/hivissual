import { useEffect, useRef, useState } from "react";
import BrandStripItem from "./BrandStripItem";

interface Props {
    srcs: string[];
}

const BrandStripTrack = ({ srcs }: Props) => {
    const [cardWidth, setCardWidth] = useState(0)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!cardRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setCardWidth(entry.contentRect.width)
        })

        observer.observe(cardRef.current)

        return () => observer.disconnect()
    }, [])

    return (
    <div className="
        h-full z-0
        flex gap-8
        animate-scroll-left"
    >
        {srcs.map((el, index) => (
            <BrandStripItem
                key={index}
                src={el}
            />
        ))}
    </div>
    )
}

export default BrandStripTrack