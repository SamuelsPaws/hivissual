'use client'
import { useState } from 'react'
import Lightbox from '@/components/Lightbox'
import { Media, PaginatedResponse } from '@/lib/types'
import MasonryGrid from './MasonryGrid'

// bump
interface Props {
    items: Media[];
}

const Gallery = ({ items }: Props) => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

    const isLightboxOpen = selectedMediaIndex !== null

    const previousMedia = () => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return prev > 0 ? prev - 1 : items.length - 1
            }

            return null
        })
    }

    const nextMedia = () => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return (prev + 1) % items.length
            }

            return null
        })
    }

    const getSelectedMedia = () => {
        if (selectedMediaIndex !== null) {
            return items[selectedMediaIndex]
        }

        return null
    }

    const selectedMedia = getSelectedMedia()

    return (
    <div className="w-full">
        {/* Grid */}
        <MasonryGrid
            mediaArr={items}
            setSelectedMediaIndex={setSelectedMediaIndex}
        />
        <Lightbox
            isOpen={isLightboxOpen}
            onClose={() => setSelectedMediaIndex(null)}
            media={selectedMedia}
            previousMedia={previousMedia}
            nextMedia={nextMedia}
        />
    </div>
    )
}

export default Gallery