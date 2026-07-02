'use client'
import { useState } from 'react'
import FilterTag from './FilterTag'
import GalleryGrid from './GalleryGrid'
import Lightbox from '@/components/Lightbox'
import { Media, PaginatedResponse } from '@/lib/types'
import MoreBtn from '@/app/portafolio/components/MoreBtn'
import { loadMedia } from '@/lib/actions'

// bump
interface Props {
    initialEntries: PaginatedResponse<Media>;
}

const Gallery = ({ initialEntries }: Props) => {
    const [items, setItems] = useState<Media[]>(initialEntries.items)
    const [hasMore, setHasMore] = useState<boolean>(initialEntries.hasMore)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

    const isLightboxOpen = selectedMediaIndex !== null

    const loadMore = async () => {
        setIsLoading(true)

        const newEntries = await loadMedia(8, 8)

        setItems(prev => [...prev, ...newEntries.items])
        setHasMore(newEntries.hasMore)
        setIsLoading(false)
    }

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
            mediaArr={items}
            setSelectedMediaIndex={setSelectedMediaIndex}
        />
        {hasMore &&
            <MoreBtn onClick={loadMore} isLoading={isLoading} />
        }
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