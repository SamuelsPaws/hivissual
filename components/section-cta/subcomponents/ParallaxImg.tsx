import clsx from "clsx";
import Image from "next/image";
import { Ref } from "react";

interface Props {
    ref: Ref<HTMLDivElement> | undefined;
    src: string;
    index: number;
    thisIndex: number;
    hasDuration: boolean;
}

const ParallaxImg = ({ ref, src, index, thisIndex, hasDuration }: Props) => {
    const indexInView = thisIndex - index
    // The moving layer is 140% of its card. Translate percentages are relative
    // to that larger layer, so convert the intended card-relative 10% step.
    const parallaxOffset = -indexInView * (10 / 1.4)

    return (
    <div ref={ref} className="
        relative
        h-full w-[calc((100%-1rem)/3)] md:w-[calc((100%-4rem)/5)] shrink-0
        overflow-hidden"
    >
        <div
            className={clsx(
                "w-[140%] h-[110%]",
                "absolute top-1/2 left-0",
                "transition-transform ease-[var(--ease-premium)] will-change-transform",
                hasDuration ? "duration-700" : "duration-0"
            )}
            style={{
                transform: `translate3d(${parallaxOffset}%, -50%, 0)`
            }}
        >
            <Image
                src={src}
                fill
                sizes="100%"
                className={clsx(
                    "w-full h-full",
                    "object-cover object-center",
                )}
                alt="about"
            />
        </div>
    </div>
    )
}

export default ParallaxImg
