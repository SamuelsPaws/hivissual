'use client'
import { useState } from 'react'
import FilterTag from './FilterTag'
import GalleryGrid from './GalleryGrid'
import Lightbox from '@/components/Lightbox'
import { Media } from '@/lib/types'

interface Props {
    mediaArr: Media[];
}

const Gallery = ({ mediaArr }: Props) => {
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

    const isLightboxOpen = selectedMediaIndex !== null

    const previousMedia = () => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return prev > 0 ? prev - 1 : mediaArr.length - 1
            }

            return null
        })
    }

    const nextMedia = () => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return (prev + 1) % mediaArr.length
            }

            return null
        })
    }

    const getSelectedMedia = () => {
        if (selectedMediaIndex !== null) {
            return mediaArr[selectedMediaIndex]
        }

        return null
    }

    const selectedMedia = getSelectedMedia()

    return (
    <div className="w-full">
        {/* Filters */}
        <div className="mb-8 lg:mb-16 flex items-center gap-4 flex-wrap">
            <span className="text-md lg:text-lg text-brandwhite">
                Filtros:
            </span>
            <FilterTag
                text='Fotografía'
                thisCategory='foto'
                selectedCategory={categoryFilter}
                setCategoryFilter={setCategoryFilter}
            />
            <FilterTag
                text='Video'
                thisCategory='video'
                selectedCategory={categoryFilter}
                setCategoryFilter={setCategoryFilter}
            />
            <FilterTag
                text='Proyectos'
                thisCategory='proyecto'
                selectedCategory={categoryFilter}
                setCategoryFilter={setCategoryFilter}
            />
        </div>
        {/* Grid */}
        <GalleryGrid
            mediaArr={mediaArr}
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