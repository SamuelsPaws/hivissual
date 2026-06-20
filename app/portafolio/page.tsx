import SectionContentFr from "@/components/SectionContentFr";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import { Media } from "@/lib/types";
import SectionCTA from "@/components/SectionCTA";
import FooterWrapper from "@/components/FooterWrapper";

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
        src: 'https://player.vimeo.com/video/1202614198?autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
            bgSrc="/assets/about-5.webp"
        />
        {/* Content section */}
        <SectionContentFr bgColor="bg-brandblack-100">
            <Gallery mediaArr={exampleMediaArr} />
        </SectionContentFr>
        <SectionCTA bgColor="bg-brandgray-100" />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}