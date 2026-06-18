import Image from 'next/image'

interface Props {
    title: string;
    description: string | null;
}

const Banner = ({ title, description }: Props) => {
  return (
    <section className="
        h-95 relative
        p-16
        flex flex-col justify-end items-start gap-8"
    >
        {/* Image BG */}
        <div className="absolute inset-0 z-0">
            <Image
                src="/assets/stock.jpg"
                fill
                sizes="100%"
                className="w-full object-cover object-top"
                priority
                alt="Stock"
            />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-brandblack to-brandblack/80 z-10"></div>
        {/* Actual content */}
        <h1 className="
            z-20 relative
            text-6xl text-brandwhite font-semibold"
        >
            {title}
        </h1>
        {description &&
            <p className="
                z-20 relative
                text-lg text-brandwhite"
            >
                {description}
            </p>
        }
    </section>
  )
}

export default Banner