'use client'
import { useState } from 'react'
import FilterTag from './FilterTag'
import GalleryGrid from './GalleryGrid'
import Lightbox from '@/components/Lightbox'
import { PaginatedResponse, PortfolioItem } from '@/lib/types'
import MoreBtn from '@/app/portafolio/[category]/components/MoreBtn'
import { loadPortfolioItems } from '@/lib/actions'

interface Props {
    initialEntries: PaginatedResponse<PortfolioItem>;
}

const Gallery = ({ initialEntries }: Props) => {
    const [items, setItems] = useState<PortfolioItem[]>(initialEntries.items)
    const [nextOffset, setNextOffset] = useState<number>(initialEntries.nextOffset)
    const [hasMore, setHasMore] = useState<boolean>(initialEntries.hasMore)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
    const [selectedItemIndex, setSelectedMediaIndex] = useState<number | null>(null)

    const isLightboxOpen = selectedItemIndex !== null

    const loadMore = async () => {
        setIsLoading(true)

        const newEntries = await loadPortfolioItems(8, nextOffset)

        setItems(prev => [...prev, ...newEntries.items])
        setNextOffset(newEntries.nextOffset)
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
        if (selectedItemIndex !== null) {
            return items[selectedItemIndex]
        }

        return null
    }

    const selectedItem = getSelectedMedia()

    return (
    <div className="w-full">
        {/* Filters */}
        {false && <div className="mb-8 lg:mb-16 flex items-center gap-4 flex-wrap">
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
        </div>}
        {/* Grid */}
        <GalleryGrid
            items={items}
            setSelectedMediaIndex={setSelectedMediaIndex}
        />
        {hasMore &&
            <MoreBtn onClick={loadMore} isLoading={isLoading} />
        }
        <Lightbox
            isOpen={isLightboxOpen}
            onClose={() => setSelectedMediaIndex(null)}
            item={selectedItem}
            previousMedia={previousMedia}
            nextMedia={nextMedia}
        />
    </div>
    )
}

export default Gallery