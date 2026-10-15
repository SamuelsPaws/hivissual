'use client'
import { useCallback, useState } from 'react'
import GalleryGrid from './subcomponents/GalleryGrid';
import { GridVersion, PortfolioItem } from '@/lib/types';
import Lightbox from './subcomponents/Lightbox';

interface Props {
    items: PortfolioItem[];
    gridVersion: GridVersion;
    gridClassName: string;
}

const Gallery = ({ items, gridVersion, gridClassName }: Props) => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)
    const isLightboxOpen = selectedMediaIndex !== null

    const previousMedia = useCallback(() => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return prev > 0 ? prev - 1 : items.length - 1
            }

            return null
        })
    }, [items.length])

    const nextMedia = useCallback(() => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return (prev + 1) % items.length
            }

            return null
        })
    }, [items.length])

    const getSelectedMedia = () => {
        if (selectedMediaIndex !== null) {
            return items[selectedMediaIndex]
        }

        return null
    }

    const selectedMedia = getSelectedMedia()

    return (
    <>
    <GalleryGrid
        items={items}
        selectedMediaIndex={selectedMediaIndex}
        setSelectedMediaIndex={setSelectedMediaIndex}
        version={gridVersion}
        className={gridClassName}
    />
    <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setSelectedMediaIndex(null)}
        item={selectedMedia}
        previousMedia={previousMedia}
        nextMedia={nextMedia}
    />
    </>
    )
}

export default Gallery
