import Image from 'next/image'
import Link from 'next/link'

const GridItem = () => {
  return (
    <Link
        href="/proyectos/hola"
        className='
            w-full h-60 aspect-auto
            md:w-60 md:aspect-square relative
            flex flex-col justify-end
            md:hover:scale-105 duration-300 group
            rounded-4xl overflow-hidden'
    >
        {/* Dark overlay */}
        <div className="
            absolute inset-0 z-10
            bg-linear-to-b from-transparent via-brandblack/70 to-brandblack/90
            opacity-0 md:group-hover:opacity-100 duration-300"
        ></div>
        {/* Image */}
        <Image
            src="/assets/stock.jpg"
            fill
            sizes='100%'
            className='w-full h-full object-cover z-0'
            alt=''
        />
        {/* Lower part with info */}
        <div className="
            w-full h-[50%] z-20
            flex"
        >
            {/* Left part with icon */}
            <div className="
                w-[30%] h-full relative
                text-3xl"
            >
                <i className='fa fa-camera absolute bottom-6 left-6' aria-hidden="true"></i>
            </div>
            {/* Right part with text */}
            <div className="
                flex-1 p-2
                hidden md:group-hover:flex justify-center items-center"
            >
                <div className="
                    flex flex-col items-start"
                >
                    <span className="mb-2 text-md text-brandwhite font-semibold">
                        Fotografía
                    </span>
                    <p className="text-sm text-gray-200">
                        Para: Restaurante ABC
                    </p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default GridItem