'use client'
import { useState } from 'react'
import FilterTag from './FilterTag'
import GridItem from './GridItem'

const ContentContainer = () => {
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

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
        <div className="
            w-full md:w-fit mx-auto
            grid
            grid-cols-1 grid-rows-auto
            md:grid-cols-2 md:grid-rows-4
            xl:grid-cols-4 xl:grid-rows-2
            gap-8"
        >
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
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

export default ContentContainer