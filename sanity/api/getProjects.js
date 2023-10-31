import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getProjects() {
  return client
    .fetch(
      groq`*[_type == "project"]{
        _id,
        title,
        tagLine,
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
    )
    .then((projects) => projects)
    .catch((error) => {
      console.error('Get Projects Error: ', error);
      return null;
    });
}
