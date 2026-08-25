import { BlogArticle, BlogBlock } from "../types";
import mapCreatedDate from "../utils/mapCreatedDate";
import { BlockSkeleton } from "./types/block";
import { ArticleSkeleton } from "./types/strapi-types";

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
                type: entryBlock.__component
            }
        }

        return null
    }

    return null
}

export function mapArticle(entry: ArticleSkeleton): BlogArticle {
    return {
        title: entry.title,
        date: mapCreatedDate(entry.createdAt),
        description: entry.description,
        slug: entry.slug,
        coverSrc: `https://r2-worker.fortales.workers.dev/${entry.cover.hash}${entry.cover.ext}`,
        blocks: entry.blocks.map(el => mapArticleBlock(el)),
        category: { label: entry.category.name, slug: entry.category.slug }
    }
}