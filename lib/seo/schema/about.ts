import company from "@/data/company";

export const generateAboutSchema = () => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'AboutPage',
            '@id': `${company.url}/sobre-mi/#webpage`,
            url: `${company.url}/sobre-mi`,
            name: 'Sobre Hivissual',
            description:
                'Conoce la historia, filosofía y enfoque creativo de Hivissual, un estudio especializado en fotografía comercial, producción audiovisual, estrategia de contenido y desarrollo web para marcas.',
            isPartOf: {
                '@id': `${company.url}/#website`
            },
            about: {
                '@id': `${company.url}/#organization`
            },
            publisher: {
                '@id': `${company.url}/#organization`
            },
            primaryImageOfPage: `${company.url}${company.image}`,
            inLanguage: 'es'
        },
        {
            '@type': 'Person',
            '@id': `${company.url}/#founder`,
            name: 'Martín Espín',
            worksFor: {
                '@id': `${company.url}/#organization`
            },
            jobTitle: 'Fotógrafo y Director Creativo'
        }
    ]
});