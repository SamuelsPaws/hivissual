import MasonryItem from '@/components/MasonryItem'
import { PortfolioItem } from '@/lib/types';
import { SetStateAction } from 'react';

interface Props {
    items: PortfolioItem[];
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const MasonryGrid = ({ items, setSelectedMediaIndex }: Props) => {
  return (
    <div className="
        w-full mb-8
        md:w-fit md:mx-auto md:mb-24
        grid
        grid-cols-2 grid-rows-[repeat(4,200px)] gap-4
        md:grid-cols-[220px_280px_220px_280px] md:grid-rows-[repeat(2,180px)] md:gap-8"
    >
        {items[0] &&<MasonryItem
            thisMediaIndex={0}
            thisMedia={items[0]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={true}
        />}
        {items[1] && <MasonryItem
            thisMediaIndex={1}
            thisMedia={items[1]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={true}
            spansTwoCols={false}
        />}
        {items[2] && <MasonryItem
            thisMediaIndex={2}
            thisMedia={items[2]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={false}
        />}
        {items[3] && <MasonryItem
            thisMediaIndex={3}
            thisMedia={items[3]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={true}
            spansTwoCols={true}
        />}
        {items[4] && <MasonryItem
            thisMediaIndex={4}
            thisMedia={items[4]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={false}
        />}
        {items[5] && <MasonryItem
            thisMediaIndex={5}
            thisMedia={items[5]}
            setSelectedMediaIndex={setSelectedMediaIndex}
            spansTwoRows={false}
            spansTwoCols={false}
        />}
    </div>
  )
}

export default MasonryGrid