import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getBlogs() {
  return client
    .fetch(
      groq`*[_type == "blog"]{
        _id,
        _createdAt,
        _updatedAt,
        "slug": slug.current,
        "image": image.asset->url,
        title,
        tagLine,
        readingTime,
        topics
      }`,
      {},
      { next: { revalidate: 15 } },
    )
    .then((blogs) => blogs)
    .catch((error) => {
      console.error('Get Blogs: ', error);
      return null;
    });
}
