import SectionContentFr from "@/components/SectionContentFr";
import clsx from "clsx";
import Image from "next/image";
import Banner from "@/components/Banner";
import Gallery from "./components/Gallery";
import { Media } from "@/lib/types";

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
}

const exampleMediaArr: Media[] = [
    {
        type: 'image',
        src: '/assets/stock.jpg',
        alt: 'Stock photo',
        title: 'Stock Photo',
        caption: 'A Stock Photo',
        thumbnail: '/assets/stock.jpg',
        client: 'Mama Cuchara',
        projectSlug: null
    },
    {
        type: 'project',
        src: '/assets/stock.jpg',
        alt: 'Stock photo',
        title: 'Stock Photo',
        caption: 'A Stock Photo',
        thumbnail: '/assets/stock.jpg',
        client: 'Restaurante ABC',
        projectSlug: 'hola'
    },
    {
        type: 'video',
        src: '/assets/hero.webp',
        alt: 'Stock photo',
        title: 'Stock Photo',
        caption: 'A Stock Photo',
        thumbnail: '/assets/hero.webp',
        client: 'No one',
        projectSlug: null
    },
]

export default async function Portfolio({ searchParams }: Props) {
    const params = await searchParams
    const page = Number(params.page ?? 1)

    return (
    <main>
        <Banner
            title="Mi Trabajo"
            description="Explora proyectos, fotografías y producciones creadas para marcas y profesionales."
        />
        {/* Content section */}
        <SectionContentFr bgColor="bg-brandblack-100">
            <Gallery mediaArr={exampleMediaArr} />
        </SectionContentFr>
        {/* Footer wrapper */}
        <div className="w-full h-footer-height bg-brandblack-100"></div>
    </main>
    )
}