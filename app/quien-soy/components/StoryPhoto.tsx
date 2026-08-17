import clsx from "clsx";
import Image from "next/image";

interface Props {
    src: string;
    className?: string;
}

const StoryPhoto = ({ src, className }: Props) => {
    return (
    <div className={clsx(
        "w-full md:w-120 h-80 relative",
        "rounded-4xl overflow-hidden",
        className
    )}>
        <Image
            src={src}
            fill
            sizes="100%"
            className="w-full h-full object-cover"
            alt="Stock"
        />
    </div>
    )
}

export default StoryPhoto