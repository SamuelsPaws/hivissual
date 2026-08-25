import Image from "next/image";

interface Props {
    title: string;
    description: string;
    coverSrc: string;
}

const ArticleBanner = ({ title, description, coverSrc }: Props) => {
    return (
    <section className="
        h-80 md:h-120 relative
        px-8 py-8
        md:px-40 md:py-16
        flex flex-col justify-end items-center gap-4 md:gap-8
        text-center"
    >
        {/* Image bg */}
        <Image
            src={coverSrc}
            fill
            sizes="100%"
            className="w-full h-full object-cover object-right z-0"
            alt="Portada del artículo"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 to-black/60"></div>
        {/* Content */}
        <h1 className="
            relative z-20
            text-xl md:text-5xl text-brandwhite
            font-semibold leading-8 md:leading-16"
        >
            {title}
        </h1>
        <p className="
            relative z-20
            text-my-md text-gray-200"
        >
            {description}
        </p>
    </section>
    )
}

export default ArticleBanner