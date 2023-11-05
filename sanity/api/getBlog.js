import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getBlog(slug) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      "slug": slug.current,
      image,
      title,
      author->,
      tagLine,
      readingTime,
      topics,
      content
    }`,
    { slug },
    { next: { revalidate: 10 } },
  );
}
