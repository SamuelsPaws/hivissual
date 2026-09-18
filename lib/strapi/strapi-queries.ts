'use server'
import { BlogArticle } from "../types";
import { mapArticle } from "./strapi-mappers";
import strapiFetch from "./strapiFetch";
import { ArticleResponse } from "./types/strapi-types";

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
