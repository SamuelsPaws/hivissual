import { SetStateAction } from "react";
import ProjectSlugGrid from "./grids/FeaturedGrid";
import { GridVersion, PortfolioItem } from "@/lib/types";

interface Props {
    items: PortfolioItem[];
    selectedMediaIndex: number | null;
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
    version: GridVersion;
    className: string;
}

const GalleryGrid = ({ items, selectedMediaIndex, setSelectedMediaIndex, version, className }: Props) => {
    if (version === 'featuredItems') {
        return (
        <ProjectSlugGrid
            items={items}
            className={className}
            setSelectedMediaIndex={setSelectedMediaIndex}
        />
        )
    }

    return (
    <div></div>
    )
}

export default GalleryGrid