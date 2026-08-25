import { StrapiImage } from "./image"

type Quote = {
    id: number,
    author: string,
    message: string,
    __component: 'shared.quote'
}

type Subtitle = {
    id: number,
    text: string,
    __component: 'shared.subtitulo'
}

type RichText = {
    id: number,
    body: string,
    __component: 'shared.rich-text'
}

type MediaSkeleton = {
    id: number,
    file: StrapiImage,
    __component: 'shared.media'
}

export type BlockSkeleton = Quote | Subtitle | RichText | MediaSkeleton