import { PortfolioItem } from '@/lib/types';
import GridItem from './gallery/subcomponents/ImageBtn'
import { SetStateAction } from 'react';

interface Props {
    items: PortfolioItem[];
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const GalleryGrid = ({ items, setSelectedMediaIndex }: Props) => {

  	return (
    <div className="
        w-full md:w-fit mx-auto
        grid
        grid-cols-1 grid-rows-auto
        md:grid-cols-2
        xl:grid-cols-4
        gap-4 md:gap-8"
    >
		{items.map((el, index) => (
			<GridItem
				key={index}
				setSelectedMediaIndex={setSelectedMediaIndex}
				thisItemIndex={index}
				thisItem={el}
			/>
		))}
    </div>
  )
}

export default GalleryGrid