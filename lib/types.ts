export type Media = {
    client: string,
    type: string,
    imageUrl: string,
    alt: string,
    videoUrl: string | null,
    instaUrl: string | null,
    year: string | null,
    featured: boolean,
    projectSlug: string | null
}

export type PaginatedResponse<T> = {
    items: T[],
    total: number,
    hasMore: boolean,
    nextOffset: number
}

export type Testimonial = {
    message: string,
    author: string,
    imageUrl: string,
    contactLink: string | null
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