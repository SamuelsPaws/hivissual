import clsx from "clsx";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    cn?: string;
}

const ServiceImage = ({ src, alt, cn }: Props) => {
    return (
    <Image
        src={src}
        fill
        sizes="(min-width: 768px) 400px, 100vw"
        className={clsx("object-cover", cn)}
        alt={alt}
    />
    );
};

export default ServiceImage;
