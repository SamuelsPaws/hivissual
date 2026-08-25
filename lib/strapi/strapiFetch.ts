'use server'
import strapiData from "@/data/strapi";

const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN!

async function strapiFetch<T>(path: string): Promise<T> {
    const response = await fetch(`${strapiData.endpointBase}${path}`, {
    headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`)
    }

    return response.json();
}

export default strapiFetch