import Image from "next/image"
import Link from "next/link"

const RelatedProjectCard = () => {
  return (
    <Link
        href="/"
        className="
            w-full h-60 relative
            md:w-80 md:h-auto md:aspect-square
            flex items-end
            rounded-4xl overflow-hidden
            md:hover:scale-105 duration-300"
    >
        <Image
            src="/assets/stock.jpg"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
            alt="Stock"
        />
        {/* Dark overlay */}
        <div className="
            absolute inset-0 z-10
            bg-linear-to-b from-transparent via-brandblack/80 to-brandblack/90"
        ></div>
        {/* Content */}
        <div className="
            w-full h-[50%] z-20
            flex justify-center items-center"
        >
            {/* Wrapper */}
            <div className="
                w-[75%]
                flex flex-col items-start gap-2"
            >
                <span className="text-lg text-brandwhite font-semibold">
                    Proyecto con Mama Cuchara
                </span>
                <span className="text-md text-brandwhite">
                    Tipo de Empresa: Hotel
                </span>
            </div>
        </div>
    </Link>
  )
}

export default RelatedProjectCard