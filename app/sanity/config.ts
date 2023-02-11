import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { codeInput } from '@sanity/code-input'
// import { visionTool } from '@sanity/vision'

import { schemaTypes } from './schema'

export const projectDetails = () => ({
  projectId:
    typeof document === 'undefined' ? process.env.SANITY_PROJECT_ID : window?.ENV?.projectId,
  dataset: typeof document === 'undefined' ? process.env.SANITY_DATASET : window?.ENV?.dataset,
  apiVersion:
    typeof document === 'undefined' ? process.env.SANITY_API_VERSION : window?.ENV?.apiVersion,
})

export const config = defineConfig({
  ...projectDetails(),
  plugins: [
    deskTool(),
    codeInput(),
    // visionTool({
    //   // Note: These are both optional
    //   defaultApiVersion:
    //     typeof document === 'undefined' ? process.env.SANITY_API_VERSION : window?.ENV?.apiVersion,
    //   defaultDataset: 'main',
    // }),
  ],
  basePath: `/studio`,
  schema: {
    types: schemaTypes,
  },
})
