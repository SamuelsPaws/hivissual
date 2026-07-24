import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface MediaFields {
  client: EntryFieldTypes.Text;
  type: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  description: EntryFieldTypes.Text;
  videoUrl: EntryFieldTypes.Text;
  instaUrl: EntryFieldTypes.Text;
  year: EntryFieldTypes.Text;
  featured: EntryFieldTypes.Boolean;
  slug: EntryFieldTypes.Text;
}

export interface TestimonialFields {
  author: EntryFieldTypes.Text;
  message: EntryFieldTypes.Text;
  contactLink: EntryFieldTypes.Text;
  image?: EntryFieldTypes.AssetLink;
}

export type MediaSkeleton = EntrySkeletonType<MediaFields, 'media'>
export type TestimonialSkeleton = EntrySkeletonType<TestimonialFields, 'testimonial'>
