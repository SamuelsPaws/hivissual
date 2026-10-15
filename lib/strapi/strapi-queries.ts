'use server'
import { BlogArticle, PaginatedResponse, PortfolioItem } from "../types";
import { mapArticle, mapPortfolioItem } from "./strapi-mappers";
import strapiFetch from "./strapiFetch";
import { ArticleResponse, PortfolioItemResponse } from "./types/strapi-types";

export async function getArticles(): Promise<BlogArticle[]> {
    const entries: ArticleResponse = await strapiFetch('/articles?populate=*')    

    return entries.data.map(mapArticle)
}

export type ArticleSitemapEntry = {
    slug: string
    categorySlug: string
    updatedAt: string
}

export async function getArticleSitemapEntries(): Promise<ArticleSitemapEntry[]> {
    const pageSize = 100
    const articles: ArticleSitemapEntry[] = []
    let page = 1
    let pageCount = 1

    do {
        const entries: ArticleResponse = await strapiFetch(
            `/articles?fields[0]=slug&fields[1]=updatedAt&populate[category][fields][0]=slug&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
        )

        articles.push(...entries.data.map(article => ({
            slug: article.slug,
            categorySlug: article.category.slug,
            updatedAt: article.updatedAt,
        })))

        pageCount = entries.meta?.pagination?.pageCount ?? 1
        page += 1
    } while (page <= pageCount)

    return articles
}

export async function getArticleBySlug(slug: string): Promise<BlogArticle> {
    const entries: ArticleResponse = await strapiFetch(`/articles?filters[slug][$eq]=${slug}&populate[cover][populate]=*&populate[category][populate]=*&populate[blocks][populate]=*`)

    return mapArticle(entries.data[0])
}

export async function getPortfolioItems(limit = 8, offset = 0): Promise<PaginatedResponse<PortfolioItem>> {
    const entries: PortfolioItemResponse = await strapiFetch(`/portfolio-items?populate[media][populate]=*&pagination[limit]=${limit}&pagination[start]=${offset}`)

    const items = entries.data.map(mapPortfolioItem)
    const total = entries.meta?.pagination?.total ?? 0

    return {
        items,
        total,
        hasMore: offset + items.length < total,
        nextOffset: offset + items.length
    }
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
    const entries: PortfolioItemResponse = await strapiFetch(`/portfolio-items?filters[featured][$eq]=true&populate[media][populate]=*&pagination[limit]=8`)

    const items = entries.data.map(mapPortfolioItem)
    return items
}
