'use server'
import { BlogArticle } from "../types";
import qs from 'querystring';
import { mapArticle } from "./strapi-mappers";
import strapiFetch from "./strapiFetch";
import { ArticleResponse } from "./types/strapi-types";

export async function getArticles(): Promise<BlogArticle[]> {
    const entries: ArticleResponse = await strapiFetch('/articles?populate=*')    

    return entries.data.map(mapArticle)
}

export async function getArticleBySlug(slug: string): Promise<BlogArticle> {
    const entries: ArticleResponse = await strapiFetch(`/articles?filters[slug][$eq]=${slug}&populate[cover][populate]=*&populate[category][populate]=*&populate[blocks][populate]=*`)
    console.log(entries.data[0]);

    return mapArticle(entries.data[0])
}