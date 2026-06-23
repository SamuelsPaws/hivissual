import { Media, Project } from '@/lib/types';
import itemTypeMapper from '@/lib/utils/itemTypeMapper';
import clsx from 'clsx';
import Image from 'next/image'
import { SetStateAction } from 'react';

interface Props {
    thisMediaIndex: number;
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
    thisMedia: Media;
}

const GridItem = ({ thisMediaIndex, setSelectedMediaIndex, thisMedia }: Props) => {
    const handleClick = () => {
        setSelectedMediaIndex(thisMediaIndex)
    }

  return (
    <button
        onClick={handleClick}
        className='
            w-full h-60 aspect-auto relative
            md:w-60 md:h-auto md:aspect-square
            flex flex-col justify-end
            md:hover:scale-105 duration-300 group
            rounded-4xl overflow-hidden'
    >
        {/* Dark overlay */}
        <div className="
            absolute inset-0 z-10
            bg-linear-to-b from-transparent via-brandblack/60 to-brandblack/90
            opacity-0 md:group-hover:opacity-100 duration-300"
        ></div>
        {/* Image (thumbnail) */}
        <Image
            src={thisMedia.imageUrl}
            fill
            sizes='100%'
            className='w-full h-full object-cover z-0'
            alt={thisMedia.alt}
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
                <i
                    className={clsx(
                        'fa absolute bottom-6 left-6',
                        thisMedia.type === 'image' && 'fa-camera',
                        thisMedia.type === 'video' && 'fa-video-camera',
                        thisMedia.type === 'project' && 'fa-briefcase'
                    )}
                    aria-hidden="true"
                ></i>
            </div>
            {/* Right part with text */}
            <div className="
                flex-1 p-2
                hidden md:group-hover:flex justify-start items-center"
            >
                <div className="
                    flex flex-col items-start"
                >
                    <span className="mb-2 text-md text-brandwhite text-left font-semibold">
                        {itemTypeMapper(thisMedia.type)}
                    </span>
                    <p className="text-sm text-gray-200 text-left">
                        <span className='font-semibold'>Cliente: </span>{thisMedia.client}
                    </p>
                </div>
            </div>
        </div>
    </button>
  )
}

export default GridItem