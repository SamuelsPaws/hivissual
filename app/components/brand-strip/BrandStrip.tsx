'use client'
import BrandStripTrack from "./subcomponents/BrandStripTrack";

interface Props {
    srcs: string[];
}

const BrandStrip = ({ srcs }: Props) => {
    return (
    <div className="
        w-full h-16 md:h-24 relative
        overflow-hidden"
    >
        <BrandStripTrack srcs={srcs} />
        {/* Overlay */}
        <div className="
            absolute inset-0 z-10
            bg-[linear-gradient(90deg,#1a1a1c,#1a1a1c20_20%,#1a1a1c20_80%,#1a1a1c)]"
        ></div>
    </div>
    )
}

export default BrandStrip