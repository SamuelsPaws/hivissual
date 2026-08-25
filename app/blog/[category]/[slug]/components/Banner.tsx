import Image from "next/image";

interface Props {
    title: string;
    description: string;
    coverSrc: string;
}

const Banner = ({ title, description, coverSrc }: Props) => {
    return (
    <section className="
        h-120 relative
        py-16 px-40
        flex flex-col justify-end items-center gap-8
        text-center"
    >
        {/* Image bg */}
        <Image
            src={coverSrc}
            fill
            sizes="100%"
            className="w-full h-full object-cover z-0"
            alt="Portada del artículo"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 to-black/60"></div>
        {/* Content */}
        <h1 className="
            relative z-20
            text-5xl text-brandwhite font-semibold leading-16"
        >
            {title}
        </h1>
        <p className="
            relative z-20
            text-myf-lg text-gray-200"
        >
            {description}
        </p>
    </section>
    )
}

export default Banner