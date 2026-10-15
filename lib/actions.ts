'use server'
import { getPortfolioItems } from "./strapi/strapi-queries"

export async function loadPortfolioItems(limit: number, offset: number) {
    return getPortfolioItems(limit, offset)
}