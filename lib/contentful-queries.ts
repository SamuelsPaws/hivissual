import { contentful } from './contentful';
import { mapMedia, mapTestimonial } from './contentful-mappers';
import { MediaSkeleton, TestimonialSkeleton } from './contentful-types';
import { Media, PaginatedResponse, Testimonial } from './types';

export async function getMedia(
  limit = 8,
  offset = 0
): Promise<PaginatedResponse<Media>> {
  const entries = await contentful.getEntries<MediaSkeleton>({
    content_type: 'media',
    limit,
    skip: offset,
    order: ['-sys.createdAt'],
  })

  const items = entries.items.map(mapMedia)

  return {
    items,
    total: entries.total,
    hasMore: offset + items.length < entries.total,
    nextOffset: offset + items.length
  }
}

export async function getFeaturedMedia(): Promise<Media[]> {
  const entries = await contentful.getEntries<MediaSkeleton>({
    content_type: 'media',
    "fields.featured": true
  })

  return entries.items.map(mapMedia)
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const entries = await contentful.getEntries<TestimonialSkeleton>({
    content_type: 'testimonial'
  })

  return entries.items.map(mapTestimonial)
}