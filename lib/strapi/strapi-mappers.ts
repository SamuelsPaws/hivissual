import { BlogArticle, BlogBlock, PortfolioItem, PortfolioItemMedia } from "../types";
import mapCreatedDate from "../utils/mapCreatedDate";
import { BlockSkeleton } from "./types/block";
import { ArticleSkeleton, PortfolioItemMediaSkeleton, PortfolioItemSkeleton } from "./types/strapi-types";

function mapArticleBlock(entryBlock: BlockSkeleton): BlogBlock | null {
    if (entryBlock.__component === 'shared.quote') {
        return {
            author: entryBlock.author,
            message: entryBlock.message,
            type: entryBlock.__component
        }
    }
    
    if (entryBlock.__component === 'shared.subtitulo') {
        return {
            text: entryBlock.text,
            type: entryBlock.__component
        }
    }
    
    if (entryBlock.__component === 'shared.rich-text') {
        return {
            body: entryBlock.body,
            type: entryBlock.__component
        }
    }
    
    if (entryBlock.__component === 'shared.media') {
        if (entryBlock.file) {
            return {
                src: `https://r2-worker.fortales.workers.dev/${entryBlock.file.hash}${entryBlock.file.ext}`,
                caption: entryBlock.file.caption,
                type: entryBlock.__component
            }
        }

        return null
    }

    return null
}

function mapPortfolioItemMedia(entry: PortfolioItemMediaSkeleton): PortfolioItemMedia {
    if (entry.__component === 'shared.video-de-portafolio') {
        return {
            type: 'video',
            src: `https://r2-worker.fortales.workers.dev/${entry.item.hash}${entry.item.ext}`,
            caption: entry.item.caption,
            thumbnail: {
                src: `https://r2-worker.fortales.workers.dev/${entry.thumbnail.hash}${entry.thumbnail.ext}`,
                caption: entry.item.caption
            },
            linkToPost: entry.linkToPost.length ? entry.linkToPost : null,
            postPlatform: entry.postPlatform
        }
    }

    return {
        type: 'image',
        src: `https://r2-worker.fortales.workers.dev/${entry.item.hash}${entry.item.ext}`,
        caption: entry.item.caption
    }
}

export function mapArticle(entry: ArticleSkeleton): BlogArticle {
    return {
        title: entry.title,
        date: mapCreatedDate(entry.createdAt),
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
        publishedAt: entry.publishedAt ?? entry.createdAt,
        description: entry.description,
        slug: entry.slug,
        coverSrc: `https://r2-worker.fortales.workers.dev/${entry.cover.hash}${entry.cover.ext}`,
        blocks: entry.blocks.map(el => mapArticleBlock(el)),
        category: { label: entry.category.name, slug: entry.category.slug }
    }
}

export function mapPortfolioItem(entry: PortfolioItemSkeleton): PortfolioItem {
    return {
        id: entry.id,
        displayTitle: entry.displayTitle,
        date: entry.date,
        client: entry.client,
        description: entry.description,
        featured: entry.featured,
        industry: entry.industry,
        priority: entry.priority,
        slug: entry.slug,
        media: mapPortfolioItemMedia(entry.media[0])
    }
}