import { SetStateAction } from "react";
import { PortfolioItem } from "@/lib/types";
import ImageBtn from "../ImageBtn";

interface Props {
    items: PortfolioItem[];
    className: string;
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const FeaturedGrid = ({ items, className, setSelectedMediaIndex }: Props) => {
    return (
    <div className={className}>
        {items.map((el, index) => {
            const src = el.media.type === 'video' ? el.media.thumbnail.src : el.media.src

            return (
                <ImageBtn
                    key={index}
                    thisItemIndex={index}
                    setSelectedMediaIndex={setSelectedMediaIndex}
                    thisItem={el}
                />
            )
        })}
    </div>
    )
}

export default FeaturedGrid
