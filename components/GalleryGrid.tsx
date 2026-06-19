import { Media, Project } from '@/lib/types';
import GridItem from './GridItem'
import { SetStateAction } from 'react';

interface Props {
    mediaArr: Media[];
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const GalleryGrid = ({ mediaArr, setSelectedMediaIndex }: Props) => {
  return (
    <div className="
        w-full md:w-fit mx-auto
        grid
        grid-cols-1 grid-rows-auto
        md:grid-cols-2
        xl:grid-cols-4
        gap-4 md:gap-8"
    >
      {mediaArr.map((el, index) =>
        <GridItem
          key={index}
          setSelectedMediaIndex={setSelectedMediaIndex}
          thisMediaIndex={index}
          thisMedia={mediaArr[index]}
        />
      )}
    </div>
  )
}

export default GalleryGrid