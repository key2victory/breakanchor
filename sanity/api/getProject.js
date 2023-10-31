import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      tagLine,
      content,
      "enableLink": externalLink.enableLink,
      "externalLink": {
        "name": externalLink.linkName,
        "url": externalLink.linkUrl
      },
      "enableGallery": gallery.enableImageGallery,
      gallery: {
        "images": gallery.images
        "displayMode": gallery.display
      }
      "image": {
        "url": headerImage.asset->url,
        "altText": headerImage.alt
      },
      "slug": slug.current,
      "category": {
        "title": category->title,
        "value": category->value.current,
        "color": category->colorTheme.hex
      },
      tags,
    }`,
    {},
    { next: { revalidate: 15 } },
  );
}
