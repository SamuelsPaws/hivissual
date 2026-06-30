export type Media = {
    client: string,
    type: string,
    imageUrl: string,
    alt: string,
    videoUrl: string | null,
    instaUrl: string | null,
    year: string | null,
    projectSlug: string | null
}

export type PaginatedResponse<T> = {
    items: T[],
    total: number,
    hasMore: boolean,
    nextOffset: number
}

export type Project = {
    slug: string
    thumbnail: string,
    alt: string,
    client: string,
    description: string,
    companyType: string,
    clientNeed: string,
    objectives: string[],
    services: string[],
    results: string[],
    gallery: Media[]
}