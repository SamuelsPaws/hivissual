import clsx from "clsx";
import Image from "next/image";

interface Props {
    src: string;
    index: number;
    thisIndex: number;
    hasDuration: boolean;
}

const ParallaxImg = ({ src, index, thisIndex, hasDuration }: Props) => {
    const indexInView = thisIndex - index

    return (
    <div className="
        relative
        h-full w-[calc((100%-4rem)/5)] shrink-0"
    >
        <Image
            src={src}
            fill
            sizes="100%"
            className={clsx(
                "w-full h-full",
                "object-cover",
                hasDuration ? "duration-1000" : "duration-0"
            )}
            style={{
                objectPosition: `${indexInView * 25}% 50%`
            }}
            alt="about"
        />
    </div>
    )
}

export default ParallaxImg