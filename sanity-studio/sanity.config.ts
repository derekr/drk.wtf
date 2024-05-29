import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'drk-wtf',

  projectId: 'pfnv96lh',
  dataset: 'main',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    presentationTool({
      previewUrl: 'http://localhost:5173',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
