import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      tagLine,
      content,
      externalLink,
      "imageGallery": {
        "isEnabled": imageGallery.enableImageGallery,
        "displayMode": imageGallery.display,
        "images": imageGallery.images[@._type == 'image'].asset->url,
      },
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
    { slug },
    { next: { revalidate: 10 } },
  );
}
