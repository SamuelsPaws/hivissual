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
        <div className="mb-16 flex items-center gap-4">
            <span className="text-lg text-brandwhite">
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
        {/* Pagination */}
        <div className="
            w-fit mx-auto
            flex gap-2"
        >
            <button className="
                mt-16 w-8 h-8
                grid place-content-center
                text-lg text-black
                bg-gray-300 rounded-lg"
            >
                1
            </button>
            <button className="
                mt-16 w-8 h-8
                grid place-content-center
                bg-transparent
                text-lg text-brandwhite
                border border-brandwhite rounded-lg"
            >
                2
            </button>
        </div>
    </div>
    )
}

export default Gallery