import { assertValue } from '../src/utils/helpers';

// Client Side
export const apiVersion = `2023-07-31`;
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);
export const useCdn = false;
