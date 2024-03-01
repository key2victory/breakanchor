import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getAuthor(slug) {
  return client.fetch(
    groq`*[_type == "author"]{
      _id,
      _createdAt,
      _updatedAt,
      "image": {
        "url": profileImage.asset->url,
        "altText": profileImage.alt
      },
    }`,
    {},
    { next: { revalidate: 10 } },
  );
}