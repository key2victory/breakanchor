import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getProjectCategories() {
  return client
    .fetch(
      groq`*[_type == "projectCategory"]{
        _id,
        title,
        "value": value.current,
        colorTheme
      }`,
      {},
      { next: { revalidate: 15 } },
    )
    .then((categories) => categories)
    .catch((error) => {
      console.error('Get Categories Error: ', error);
      return null;
    });
}
