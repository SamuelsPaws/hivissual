import { BlockSkeleton } from "./block";
import { StrapiImage } from "./image";

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
    cover: StrapiImage;
    category: CategorySkeleton;
    blocks: BlockSkeleton[];
}

export type ArticleResponse = StrapiResponse<ArticleSkeleton>