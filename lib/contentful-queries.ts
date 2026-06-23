import { contentful } from './contentful';
import { mapMedia } from './contentful-mappers';
import { MediaSkeleton } from './contentful-types';

export async function getMedia() {
  const entries = await contentful.getEntries<MediaSkeleton>({
    content_type: 'media'
  });
  return entries.items.map(mapMedia);
}