import Image from 'next/image'

interface Props {
    title: string;
    description: string | null;
    bgSrc: string;
}

const Banner = ({ title, description, bgSrc }: Props) => {
  return (
    <section className="
        h-60 lg:h-90 relative
        p-8 lg:p-16
        flex flex-col justify-end items-start gap-4 lg:gap-8"
    >
        {/* Image BG */}
        <div className="absolute inset-0 z-0">
            <Image
                src={bgSrc}
                fill
                sizes="100%"
                className="w-full object-cover object-[0%_35%]"
                priority
                alt="Stock"
            />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-brandblack to-brandblack/60 z-10"></div>
        {/* Actual content */}
        <h1 className="
            z-20 relative
            text-4xl lg:text-6xl text-brandwhite font-semibold"
        >
            {title}
        </h1>
        {description &&
            <p className="
                z-20 relative
                text-sm lg:text-lg text-brandwhite"
            >
                {description}
            </p>
        }
    </section>
  )
}

export default Banner