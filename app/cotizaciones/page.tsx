import SectionContentSt from "@/components/SectionContentSt";
import SocialCard from "./components/SocialCard";
import SectionCTA from "@/components/SectionCTA";
import FooterWrapper from "@/components/FooterWrapper";
import QuoteCard from "./components/quote-app/QuoteCard";
import HeroLeftPart from "./components/HeroLeftPart";
import FAQTitle from "./components/FAQTitle";
import FAQAnswer from "./components/FAQAnswer";
import { Metadata } from "next";
import company from "@/data/company";
import { contactMetadata } from "@/data/metadata";
import breadcrumbData from "@/data/breadcrumbs.json";
import { getBreadcrumbSchema } from "@/lib/seo/schema/schema";
import JsonLd from "@/components/JsonLd";
import { generateContactSchema } from "@/lib/seo/schema/contact";

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
	} = contactMetadata
	const canonical = `${BASE_URL}/cotizaciones`

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

export default function Contact() {
	const contactSchema = generateContactSchema()
	const bcSchema = getBreadcrumbSchema(breadcrumbData.contact, BASE_URL)

    return (
    <main>
        {/* Json ld */}
		<JsonLd data={contactSchema} />
		<JsonLd data={bcSchema} />
		{/* Page */}
        {/* Hero */}
        <section className="
            relative
            px-8 pt-24 pb-8
            lg:px-32 lg:pt-32 lg:pb-24
            flex flex-col lg:flex-row gap-8
            bg-brandblack overflow-hidden"
        >
            <HeroLeftPart />
            {/* Right part */}
            <div className="
                lg:flex-1 z-10
                flex flex-col justify-center items-center gap-8"
            >
                <QuoteCard />
                <p className="text-lg lg:text-xl text-brandwhite font-semibold">
                    O si prefieres
                </p>
                <a
                    href=""
                    className="
                        px-8 py-4 mt-8
                        text-brandwhite text-lg lg:text-xl font-semibold whitespace-nowrap
                        bg-whatsapp-400 rounded-full"
                >
                    Escríbeme un Mensaje
                    <i className="fa fa-whatsapp scale-150 ml-4" aria-hidden="true"></i>
                </a>
            </div>
            {/* Glow */}
            {/* <div className="
                absolute z-0
                bottom-1/2 left-0
                lg:bottom-8 lg:left-0
                w-160 h-60 mt-4
                bg-radial-[at_center] from-brandwhite via-transparent to-transparent
                opacity-70 lg:opacity-80 mix-blend-screen blur-[80px]
                bg-contain"
            ></div> */}
            <img
                src="/assets/glow.svg"
                className="
                    absolute
                    w-140 top-[25%] left-[25%] opacity-50
                    lg:w-240 lg:top-[20%] lg:left-[10%] lg:opacity-40"
            />
        </section>
        <SectionContentSt
            title="Encuéntrame en Redes Sociales"
            bgColor="bg-brandblack-100"
        >
            <div className="
                w-fit mx-auto
                flex flex-col gap-8"
            >
                <SocialCard
                    text="hivissual"
                    iconClass="fa-instagram"
                    href="https://www.instagram.com/hivissual/"
                />
                {/* <SocialCard
                    text="Hivissual"
                    iconClass="fa-facebook-square"
                    href="https://www.instagram.com/hivissual/"
                /> */}
            </div>
        </SectionContentSt>
        <SectionContentSt
            title="Preguntas Frecuentes"
            bgColor="bg-brandblack-200"
        >
            <FAQTitle text="¿Qué tipo de proyectos realizas?" />
            <FAQAnswer text="Trabajo en proyectos de fotografía, producción de video y creación de contenido para empresas, marcas y profesionales que buscan fortalecer su presencia digital." />
            <FAQTitle text="¿Trabajas con clientes de cualquier ciudad/país?" />
            <FAQAnswer text="Sí. Dependiendo del proyecto, puedo trabajar tanto de forma local como remota." />
            <FAQTitle text="¿Cómo puedo solicitar una cotización?" />
            <FAQAnswer text="Puedes utilizar el seleccionador en la parte de arriba de esta página o escribirme directamente por WhatsApp para conversar sobre tu proyecto." />
        </SectionContentSt>
        <SectionCTA bgColor="bg-brandgray-100" />
        <FooterWrapper bgColor="bg-brandgray-100" />
    </main>
    )
}