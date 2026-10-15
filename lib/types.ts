export type Media = {
    type: 'image' | 'video',
    src: string,
    alt: string
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

export type BlogQuote = {
    author: string,
    message: string,
    type: 'shared.quote'
}

type BlogSubtitle = {
    text: string,
    type: 'shared.subtitulo'
}

type BlogRichText = {
    body: string,
    type: 'shared.rich-text'
}

type BlogMedia = {
    src: string,
    caption: string | null,
    type: 'shared.media'
}

export type BlogBlock = BlogQuote | BlogSubtitle | BlogRichText | BlogMedia

export type BlogCategory = {
    label: string,
    slug: string
}

export type BlogArticle = {
    title: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    description: string,
    slug: string,
    coverSrc: string,
    blocks: (BlogBlock | null)[],
    category: BlogCategory
}

export type Breadcrumb = {
  name: string;
  url: string;
}

export type NavDdItemType = {
    label: string,
    href: string,
    external: boolean
}

type NavLinkDropdown = NavDdItemType[] | null

export type NavLinkType = {
    label: string,
    href: string,
    external: boolean,
    dropdown: NavLinkDropdown
}

export type PortfolioItemMedia = {
    type: 'image',
    src: string,
    caption: string | null,
} | {
    type: 'video',
    src: string,
    caption: string | null,
    thumbnail: {
        src: string,
        caption: string | null
    },
    linkToPost: string | null,
    postPlatform: string
}

export type PortfolioItem = {
    id: number,
    displayTitle: string | null,
    date: string,
    client: string,
    description: string | null,
    featured: boolean,
    industry: string,
    priority: string,
    slug: string,
    media: PortfolioItemMedia
}

export type GridVersion = 'featuredItems'