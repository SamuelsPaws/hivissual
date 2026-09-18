import type { MetadataRoute } from 'next'
import company from '@/data/company'
import { getArticleSitemapEntries } from '@/lib/strapi/strapi-queries'

const BASE_URL = company.url

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const frequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'

    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/portafolio',
        '/quien-soy',
        '/cotizaciones',
        '/blog',
    ].map(route => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/blog' ? 'weekly' : frequency,
        priority: route === "" ? 1 : 0.8,
    }))

    const articles = await getArticleSitemapEntries()
    const articleRoutes: MetadataRoute.Sitemap = articles.map(article => ({
        url: `${BASE_URL}/blog/${encodeURIComponent(article.categorySlug)}/${encodeURIComponent(article.slug)}`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: frequency,
        priority: 0.7,
    }))

    return [...staticRoutes, ...articleRoutes]
}
