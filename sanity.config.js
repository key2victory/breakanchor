import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env';
import schema from './sanity/schemas';

export default defineConfig({
  title: 'Break Anchor',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
