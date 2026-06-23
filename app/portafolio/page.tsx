import SectionContentFr from "@/components/SectionContentFr";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import SectionCTA from "@/components/SectionCTA";
import FooterWrapper from "@/components/FooterWrapper";
import { getMedia } from "@/lib/contentful-queries";

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function Portfolio({ searchParams }: Props) {
    const params = await searchParams
    const page = Number(params.page ?? 1)
    const entries = await getMedia()

    return (
    <main>
        <Banner
            title="Mi Trabajo"
            description="Explora proyectos, fotografías y producciones creadas para marcas y profesionales."
            bgSrc="/assets/banner.webp"
        />
        {/* Content section */}
        <SectionContentFr bgColor="bg-brandblack-100">
            <Gallery mediaArr={entries} />
        </SectionContentFr>
        <SectionCTA bgColor="bg-brandgray-100" />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}