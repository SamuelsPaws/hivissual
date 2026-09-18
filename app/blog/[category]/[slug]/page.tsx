import SectionContentFr from "@/components/SectionContentFr"
import ArticleBanner from "./components/ArticleBanner"
import { getArticleBySlug, getArticles } from "@/lib/strapi/strapi-queries"
import Image from "next/image"
import Block from "./components/Block"
import SectionCTA from "@/components/section-cta/SectionCTA"
import { getFeaturedImages } from "@/lib/contentful-queries"
import Link from "next/link"
import RelArticleLink from "./components/RelArticleLink"
import CustomIcon from "@/components/CustomIcon"
import WhiteBtn from "@/components/WhiteBtn"
import company from "@/data/company"
import type { Metadata } from "next"

type Props = {
    params: Promise<{
        category: string
        slug: string
    }>
}

const BASE_URL = company.url
const AUTHOR_NAME = 'Martín Espín'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = await getArticleBySlug(slug)
    const canonical = `${BASE_URL}/blog/${encodeURIComponent(article.category.slug)}/${encodeURIComponent(article.slug)}`
    const title = `${article.title} | ${company.name}`
    const modifiedTime = new Date(Math.max(
        Date.parse(article.publishedAt),
        Date.parse(article.updatedAt)
    )).toISOString()

    return {
        metadataBase: new URL(BASE_URL),
        title,
        description: article.description,
        keywords: [
            article.title,
            article.category.label,
            `${article.category.label} para marcas`,
            'fotografía y producción audiovisual',
            'creación de contenido',
            company.name,
        ],
        applicationName: company.name,
        authors: [{
            name: AUTHOR_NAME,
            url: `${BASE_URL}/quien-soy`,
        }],
        creator: AUTHOR_NAME,
        publisher: company.name,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description: article.description,
            url: canonical,
            siteName: company.name,
            locale: 'es_EC',
            type: 'article',
            publishedTime: article.publishedAt,
            modifiedTime,
            authors: [AUTHOR_NAME],
            section: article.category.label,
            tags: [article.category.label, 'Fotografía', 'Video', 'Contenido digital'],
            images: [{
                url: article.coverSrc,
                alt: article.title,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: article.description,
            images: [{
                url: article.coverSrc,
                alt: article.title,
            }],
        },
        category: article.category.label,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
    }
}

export default async function BlogArticle({ params }: Props) {
    const { slug } = await params
    const article = await getArticleBySlug(slug)
    const ctaGallery = await getFeaturedImages()
    const allArticles = await getArticles()
    const relatedArticles = allArticles.filter(el => el.slug !== article.slug)

    return (
    <main>
        <ArticleBanner
            title={article.title}
            description={article.description}
            coverSrc={article.coverSrc}
        />
        <SectionContentFr
            bgColor="bg-brandblack-200"
        >
            
            {/* Author */}
            <div className="mb-0 md:mb-8 text-my-sm text-gray-400 flex items-center gap-4">
                <span>
                    Por:{' '}
                    <Link
                        href="/quien-soy"
                        className="md:hover:underline"
                    >
                        Martín Espín (Hivissual)
                    </Link>
                </span>
                <div className="w-12 aspect-square rounded-full relative overflow-hidden">
                    <Image
                        src="/assets/about-5.webp"
                        fill
                        sizes="100%"
                        className="w-full h-full object-cover"
                        alt="Hivissual"
                    />
                </div>
                <span className="hidden md:block">|</span>
                <span className="hidden md:block">{article.date}</span>
            </div>
            {/* Date on mobile */}
            <span className="mb-8 block text-my-sm text-gray-400">
                {article.date}
            </span>
            {/* Container with content and table */}
            <div className="
                w-full
                flex flex-col gap-8
                md:flex-row md:gap-16"
            >
                {/* Left part with content */}
                <div className="
                    w-full
                    md:w-auto md:flex-1"
                >
                    {article.blocks.map((el, index) => (
                        <Block
                            key={index}
                            item={el}
                        />
                    ))}
                    <p className="my-4 md:my-8 text-my-sm text-gray-200">
                        ¿Quieres seguir aprendiendo? Explora más consejos, ideas y trucos.
                    </p>
                    <WhiteBtn
                        href="/blog"
                        label="Visita el Blog"
                        centered={false}
                    />
                </div>
                {/* Right part with table */}
                <div className="
                    w-full md:w-[30%] relative
                    px-4 py-6
                    md:px-8 md:py-8
                    flex flex-col justify-between gap-4 md:gap-8
                    gradient-border rounded-2xl"
                >
                    <div className="flex-1">
                        <div className="w-full sticky top-[calc(var(--spacing-header-height)+1rem)]">
                            <h3 className="
                                mb-4 md:mb-8
                                text-my-xl text-brandwhite font-semibold"
                            >
                                Artículos Relacionados
                            </h3>
                            <ul className="
                                w-full flex flex-col
                                border border-gray-400 rounded-2xl"
                            >
                                {relatedArticles.map((el, index) => (
                                    <RelArticleLink
                                        key={index}
                                        article={el}
                                        isLast={index >= relatedArticles.length - 1}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Link
                        href="/blog"
                        className="
                            w-full group
                            p-8
                            flex items-center justify-center gap-2
                            text-brandwhite text-my-lg text-center
                            border border-gray-400 rounded-2xl
                            pressable md:hover:bg-white/5"
                    >
                        <span className="transition-transform duration-300 ease-[var(--ease-premium)] md:group-hover:translate-x-1">
                            Ver Todos los Artículos
                        </span>
                        <CustomIcon
                            iconId="arrowR"
                        />
                    </Link>
                </div>
            </div>
        </SectionContentFr>
        <SectionCTA
            bgColor="bg-brandgray-100"
            gallery={ctaGallery.map(el => el.imageUrl)}
        />
        {/* Footer wrapper */}
		<div className="w-full h-footer-height-mob lg:h-footer-height bg-brandgray-100"></div>
    </main>
    )
}
