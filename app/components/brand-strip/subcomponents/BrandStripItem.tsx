import Image from "next/image";

interface Props {
    src: string;
}

const BrandStripItem = ({ src }: Props) => {
    return (
    <div className="
        h-full w-[calc((100%-6rem)/3)] md:w-[calc((100%-10rem)/6)]
        shrink-0 relative"
    >
        <Image
            src={src}
            fill
            sizes="100%"
            className="w-full h-full object-contain"
            alt="Logo de empresa"
        />
    </div>
    )
}

export default BrandStripItem