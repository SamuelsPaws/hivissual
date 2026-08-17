import company from "@/data/company";

export const generateContactSchema = () => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'ContactPage',
            '@id': `${company.url}/cotizaciones/#webpage`,
            url: `${company.url}/cotizaciones`,
            name: 'Contacto y Cotizaciones | Hivissual',
            description:
                'Ponte en contacto con Hivissual para solicitar una cotización de fotografía comercial, producción audiovisual, estrategia de contenido o desarrollo web. Conversemos sobre tu próximo proyecto.',
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
        }
    ]
});