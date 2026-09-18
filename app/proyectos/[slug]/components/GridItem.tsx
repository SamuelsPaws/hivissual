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
            pressable md:hover:scale-[1.02] group
            rounded-4xl overflow-hidden'
    >
        {/* Dark overlay */}
        <div className="
            absolute inset-0 z-10
            bg-linear-to-b from-transparent via-brandblack/30 to-brandblack/70
            opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-[var(--ease-premium)]"
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
        </div>
    </Link>
  )
}

export default GridItem
