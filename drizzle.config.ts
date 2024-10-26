import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './app/db/schema.server.ts',
	out: './app/db/migrations',
	dialect: 'sqlite',
});
