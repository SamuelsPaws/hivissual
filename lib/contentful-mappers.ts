import type { Entry, Asset, UnresolvedLink } from 'contentful';
import { MediaSkeleton, TestimonialSkeleton } from './contentful-types';
import { Media, Testimonial } from './types';
import itemTypeMapper from './utils/itemTypeMapper';

function isAsset(
  item: UnresolvedLink<'Asset'> | Asset<undefined, 'en-US'>
): item is Asset<undefined, 'en-US'> {
  return item.sys.type === 'Asset';
}

function hasFileUrl(
  asset: Asset<undefined, 'en-US'>
): asset is Asset<undefined, 'en-US'> & {
  fields: {
    file: {
      url: string;
    };
  };
} {
  return typeof asset.fields.file?.url === 'string';
}

function getImageUrl(image: UnresolvedLink<"Asset"> | Asset<undefined, "en-US">): string {
  if (isAsset(image) && hasFileUrl(image)) {
    return `https:${image.fields.file.url}`
  } else {
    return ''
  }
}

export function mapMedia(
  entry: Entry<MediaSkeleton, undefined, 'en-US'>
): Media {
  return {
    client: entry.fields.client,
    type: itemTypeMapper(entry.fields.type),
    imageUrl: getImageUrl(entry.fields.image),
    alt: entry.fields.description,
    videoUrl: entry.fields.videoUrl,
    instaUrl: entry.fields.instaUrl,
    year: entry.fields.year,
    featured: entry.fields.featured,
    projectSlug: entry.fields.slug
  };
}

export function mapTestimonial(
  entry: Entry<TestimonialSkeleton, undefined, 'en-US'>
): Testimonial {
  return {
    author: entry.fields.author,
    message: entry.fields.message,
    imageUrl: entry.fields.image ? getImageUrl(entry.fields.image) : '/assets/anonymous.svg',
    contactLink: entry.fields.contactLink ? entry.fields.contactLink : null
  }
}