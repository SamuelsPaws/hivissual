import SectionContentFr from "@/components/SectionContentFr";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import SectionCTA from "@/components/section-cta/SectionCTA";
import FooterWrapper from "@/components/FooterWrapper";
import { getFeaturedImages, getMedia, getMediaByCategory } from "@/lib/contentful-queries";
import company from "@/data/company";
import { portfolioMetadata } from "@/data/metadata";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema/schema";
import breadcrumbData from "@/data/breadcrumbs.json";
import { generatePortfolioSchema } from "@/lib/seo/schema/portfolio";
import { mapCategoryLabel } from "@/lib/utils/mapCategory";
import portfolioCategories from "@/data/portfolioCategories";

type Props = {
    params: Promise<{
        category: string
    }>
}

const BASE_URL = company.url;

export function generateMetadata(): Metadata {
	const {
		title,
		description,
		keywords,
		ogTitle,
		ogDescription,
		twitterTitle,
		twitterDescription,
		category
	} = portfolioMetadata
	const canonical = `${BASE_URL}/portafolio`

    return {
        metadataBase: new URL(BASE_URL),

        title,
        description,
        keywords,
        applicationName: company.name,
        authors: [
            {
                name: company.name,
            },
        ],
        creator: company.name,
        publisher: company.name,
        alternates: {
			canonical
		},

        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url: canonical,
            siteName: company.name,
            locale: "es_EC",
            type: "website",
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Hivissual",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: twitterTitle,
            description: twitterDescription,
            images: ["/opengraph-image.jpg"],
        },

        category: category,

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
  	}
}

export default async function Portfolio({ params }: Props) {
    const { category } = await params

    const entries = await getMediaByCategory(8, 0, mapCategoryLabel(category))
    const featuredImages = await getFeaturedImages()

    const categoryData = portfolioCategories.find(el => el.slug === category)

	const portfolioSchema = generatePortfolioSchema()
	const bcSchema = getBreadcrumbSchema(breadcrumbData.portfolio, BASE_URL)

    return (
    <main>
        {/* Json ld */}
		<JsonLd data={portfolioSchema} />
		<JsonLd data={bcSchema} />
		{/* Page */}
        <Banner
            title={categoryData ? categoryData.h1 : 'Mis Trabajos'}
            description="Explora proyectos, fotografías y producciones creadas para marcas y profesionales."
            bgSrc="/assets/banner.webp"
        />
        {/* Content section */}
        <SectionContentFr bgColor="bg-brandblack-100">
            <Gallery initialEntries={entries} />
        </SectionContentFr>
        <SectionCTA
			gallery={featuredImages.map(el => el.imageUrl)}
            bgColor="bg-brandgray-100"
        />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}