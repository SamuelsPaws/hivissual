import SectionContentSt from "@/components/SectionContentSt";
import Hero from "./components/Hero";
import SectionContentCen from "@/components/SectionContentCen";
import SectionCTA from "@/components/section-cta/SectionCTA";
import { getFeaturedImages, getFeaturedMedia, getTestimonials } from "@/lib/contentful-queries";
import GallerySimple from "@/components/GallerySimple";
import ServiceCardGrid from "./components/ServiceCardGrid";
import AboutGrid from "./components/about-grid/AboutGrid";
import WhiteBtn from "@/components/WhiteBtn";
import company from "@/data/company";
import { Metadata } from "next";
import { homeMetadata } from "@/data/metadata";
import breadcrumbData from "@/data/breadcrumbs.json";
import { getBreadcrumbSchema } from "@/lib/seo/schema/schema";
import JsonLd from "@/components/JsonLd";
import { generateHomeSchema } from "@/lib/seo/schema/home";

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
	} = homeMetadata
	const canonical = BASE_URL

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

export default async function Home() {
	const featuredEntries = await getFeaturedMedia()
	const testimonials = await getTestimonials()
	const featuredImages = await getFeaturedImages()

	const orgSchema = generateHomeSchema()
	const bcSchema = getBreadcrumbSchema(breadcrumbData.home, BASE_URL)

	return (
    <main>
		{/* Json ld */}
		<JsonLd data={orgSchema} />
		<JsonLd data={bcSchema} />
		{/* Page */}
		<Hero />
		<SectionContentSt
			title="Mira mis trabajos destacados"
			bgColor="bg-brandblack"
		>
			{/* Masonry Grid */}
			<GallerySimple items={featuredEntries} />
			<WhiteBtn
				href="/portafolio/redes-sociales"
				label="Ver Portafolio Completo"
			/>
		</SectionContentSt>
		{/* Services */}
		<SectionContentSt
			title="Conoce mis servicios"
			bgColor="bg-brandblack-100"
		>
			<ServiceCardGrid />
		</SectionContentSt>
		{/* <SectionContentSt
			title="Reseñas y Testimonios"
			bgColor="bg-brandblack-200"
		>
			<TestimonialSlider testimonials={testimonials} />
		</SectionContentSt> */}
		{/* About */}
		<SectionContentCen
			title="Quién Soy"
			bgColor="bg-brandgray-100"
		>
			<AboutGrid />
		</SectionContentCen>
		<SectionCTA
			gallery={featuredImages.map(el => el.imageUrl)}
			bgColor="bg-brandgray-200"
		/>
		{/* Footer wrapper */}
		<div className="w-full h-footer-height-mob lg:h-footer-height bg-brandgray-200"></div>
    </main> 
  )
}
