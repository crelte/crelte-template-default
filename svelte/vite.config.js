import { resolve } from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import crelte from 'crelte/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [svelte(), crelte()],
		resolve: {
			alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
		},
	};
});
