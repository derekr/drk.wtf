import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { codeInput } from '@sanity/code-input'
import { projectDetails } from './project-details'
// import { visionTool } from '@sanity/vision'

import { schemaTypes } from './schema'

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
