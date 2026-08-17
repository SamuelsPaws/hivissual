import company from "@/data/company";

export const generatePortfolioSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${company.url}/portafolio/#webpage`,
    url: `${company.url}/portafolio`,
    name: 'Portafolio | Hivissual',
    description:
        'Explora una selección de proyectos de fotografía comercial, producción audiovisual y contenido para redes sociales realizados por Hivissual.',
    isPartOf: {
        '@id': `${company.url}/#website`
    },
    about: {
        '@id': `${company.url}/#organization`
    },
    publisher: {
        '@id': `${company.url}/#organization`
    },
    inLanguage: 'es'
});