import { BlockSkeleton } from "./block";
import { StrapiMedia } from "./image";

interface StrapiSystemFields {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

interface StrapiResponse<T> {
    data: T[];
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

interface CategorySkeleton {
    id: number;
    createdAt: string;
    description: string | null;
    documentId: string;
    name: string;
    publishedAt: string;
    slug: string;
    updatedAt: string;
}

export interface ArticleSkeleton extends StrapiSystemFields {
    title: string;
    description: string;
    slug: string;
    cover: StrapiMedia;
    category: CategorySkeleton;
    blocks: BlockSkeleton[];
}

export type ArticleResponse = StrapiResponse<ArticleSkeleton>

export type PortfolioItemMediaSkeleton = {
    id: number,
    item: StrapiMedia,
    __component: 'shared.fotografia-de-portafolio'
} | {
    id: number,
    item: StrapiMedia,
    __component: 'shared.video-de-portafolio',
    linkToPost: string,
    postPlatform: string,
    thumbnail: StrapiMedia
};

export interface PortfolioItemSkeleton extends StrapiSystemFields {
    innerTitle: string;
    displayTitle: string | null;
    date: string;
    client: string;
    category: string;
    slug: string;
    description: string | null;
    priority: string;
    industry: string;
    featured: boolean;
    media: PortfolioItemMediaSkeleton[];
}

export type PortfolioItemResponse = StrapiResponse<PortfolioItemSkeleton>
