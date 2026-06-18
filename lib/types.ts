export type Media = {
    type: 'image' | 'video' | 'project',
    src: string,
    alt: string,
    title: string,
    caption: string,
    thumbnail: string,
    client: string,
    projectSlug: string | null
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