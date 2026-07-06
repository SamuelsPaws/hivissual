import MasonryItem from '@/components/MasonryItem'
import { Media } from '@/lib/types';
import { SetStateAction } from 'react';

interface Props {
    mediaArr: Media[];
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const MasonryGrid = ({ mediaArr, setSelectedMediaIndex }: Props) => {
  return (
    <div className="
        w-full mb-8
        md:w-fit md:mx-auto md:mb-24
        grid
        grid-cols-2 grid-rows-[repeat(4,200px)] gap-4
        md:grid-cols-[repeat(4,220px)] md:grid-rows-[repeat(2,160px)] md:gap-8"
    >
        {mediaArr[0] &&<MasonryItem
            thisMediaIndex={0}
            thisMedia={mediaArr[0]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={true}
        />}
        {mediaArr[1] && <MasonryItem
            thisMediaIndex={1}
            thisMedia={mediaArr[1]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={true}
            spansTwoCols={false}
        />}
        {mediaArr[2] && <MasonryItem
            thisMediaIndex={2}
            thisMedia={mediaArr[2]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={false}
        />}
        {mediaArr[3] && <MasonryItem
            thisMediaIndex={3}
            thisMedia={mediaArr[3]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={true}
            spansTwoCols={true}
        />}
        {mediaArr[4] && <MasonryItem
            thisMediaIndex={4}
            thisMedia={mediaArr[4]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={false}
        />}
        {mediaArr[5] && <MasonryItem
            thisMediaIndex={5}
            thisMedia={mediaArr[5]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={false}
        />}
    </div>
  )
}

export default MasonryGrid