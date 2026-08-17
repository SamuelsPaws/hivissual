import company from "@/data/company";

export const generateHomeSchema = () => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${company.url}/#organization`,
            name: 'Hivissual',
            url: company.url,
            logo: company.logo,
            image: `${company.url}/opengraph-image.png`,
            telephone: company.phone,
            email: company.email, 
            description:
                'Estudio creativo especializado en fotografía comercial, producción audiovisual, estrategia de contenido y desarrollo web para marcas y emprendedores.',
            knowsAbout: [
                'Fotografía Comercial',
                'Fotografía de Producto',
                'Producción Audiovisual',
                'Videos Promocionales',
                'Reels para Redes Sociales',
                'Contenido para Redes Sociales',
                'Estrategia de Contenido',
                'Dirección Creativa',
                'Desarrollo Web',
                'Branding Digital'
            ],
            sameAs: [
                company.instagram,
                company.facebook
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: company.phone,
                email: company.email,
                availableLanguage: 'es'
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${company.url}/#website`,
            url: company.url,
            name: 'Hivissual',
            description:
                'Fotografía, video, contenido estratégico y desarrollo web para marcas.',
            publisher: {
                '@id': `${company.url}/#organization`
            },
            inLanguage: 'es'
        }
    ]
})