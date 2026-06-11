import Image from "next/image"

const RelatedProjectCard = () => {
  return (
    <div className="
        w-full h-60 relative
        md:w-80 md:h-auto md:aspect-square
        rounded-4xl overflow-hidden"
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
            bg-linear-to-b from-transparent via-brandblack/70 to-brandblack/90"
        ></div>
    </div>
  )
}

export default RelatedProjectCard