import type { Entry, Asset, UnresolvedLink } from 'contentful';
import { MediaSkeleton } from './contentful-types';
import { Media } from './types';
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

export function mapMedia(
  entry: Entry<MediaSkeleton, undefined, 'en-US'>
): Media {
  return {
    client: entry.fields.client,
    type: itemTypeMapper(entry.fields.type),
    imageUrl: isAsset(entry.fields.image) && hasFileUrl(entry.fields.image) ? `https:${entry.fields.image.fields.file.url}` : '',
    alt: entry.fields.description,
    videoUrl: entry.fields.videoUrl,
    instaUrl: entry.fields.instaUrl,
    year: entry.fields.year,
    projectSlug: entry.fields.slug
  };
}