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

    return (
    <div ref={ref} className="
        relative
        h-full w-[calc((100%-1rem)/3)] md:w-[calc((100%-4rem)/5)] shrink-0
        overflow-hidden"
    >
        <div
            className={clsx(
                "w-[140%] h-[110%]",
                "absolute top-1/2 -translate-y-1/2",
                hasDuration ? "duration-1000" : "duration-0"
            )}
            style={{
                left: `-${indexInView * 10}%`
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