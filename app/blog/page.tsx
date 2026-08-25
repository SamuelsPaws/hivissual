import { getArticles } from "@/lib/strapi/strapi-queries"
import Banner from "@/components/Banner"
import SectionContentSt from "@/components/SectionContentSt"
import ArticleLink from "./components/ArticleLink"
import SectionCTA from "@/components/section-cta/SectionCTA"
import { getFeaturedImages } from "@/lib/contentful-queries"

export default async function Blog() {
    const articles = await getArticles()
    const ctaGallery = await getFeaturedImages()

    return (
    <main>
        <Banner
            title="Blog: Bitácora de Hivissual"
            description="Aprende más sobre fotografía, producción audiovisual, creación de contenido y redes sociales con mis artículos."
            bgSrc="/assets/about-5.webp"
            objectPos="object-[0%_55%]"
        />
        <SectionContentSt
            title="Últimos Artículos"
            bgColor="bg-brandblack"
        >
            {/* Container with left content and right table */}
            <div className="
                w-full
                flex flex-col md:flex-row gap-8"
            >
                {/* Left part with articles */}
                <div className="
                    w-full
                    md:w-auto md:flex-1
                    flex flex-col
                    rounded-2xl border border-gray-400"
                >
                    {articles.map((el, index) => (
                        <ArticleLink
                            key={index}
                            article={el}
                            isLast={index >= articles.length - 1}
                        />
                    ))}
                </div>
                {/* Right part with table */}
                <div className="w-full md:w-100"></div>
            </div>
        </SectionContentSt>
        <SectionCTA
            bgColor="bg-brandblack-200"
            gallery={ctaGallery.map(el => el.imageUrl)}
        />
        {/* Footer wrapper */}
		<div className="w-full h-footer-height-mob lg:h-footer-height bg-brandblack-200"></div>
    </main>
    )
}