import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface MediaFields {
  client: EntryFieldTypes.Text;
  type: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  description: EntryFieldTypes.Text;
  videoUrl: EntryFieldTypes.Text;
  year: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
}

export type MediaSkeleton = EntrySkeletonType<MediaFields, 'media'>
