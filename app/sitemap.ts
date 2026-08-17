import { MetadataRoute } from 'next'
import company from '@/data/company'

const BASE_URL = company.url

export default function sitemap(): MetadataRoute.Sitemap {
    const frequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'

    const routes = [
        '',
        '/portafolio',
        '/quien-soy',
        '/cotizaciones'
    ].map(route => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: frequency,
        priority: route === "" ? 1 : 0.8,
    }))

    return routes
}