import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

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
});
