type ImageFormat = {
    etag: string;
    ext: string;
    hash: string;
    height: number;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    sizeInBytes: number;
    url: string;
    width: number;
};

type ImageFormats = {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
    thumbnail: ImageFormat;
};

export type StrapiImage = {
    alternativeText: string | null;
    caption: string | null;
    createdAt: string;
    documentId: string;
    ext: string;
    focalPoint: number | null;
    formats: ImageFormats;
    hash: string;
    height: number;
    id: number;
    mime: string;
    name: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown | null;
    publishedAt: string;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
};