import { resolve } from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import crelte from 'crelte-node/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		css: {
			devSourcemap: true,
		},
		plugins: [
			svelte({
				preprocess: sveltePreprocess({
					scss: {
						prependData: `@import 'src/sass/vars.scss';`,
					},
				}),
				compilerOptions: {
					hydratable: true,
				},
			}),
			crelte(),
		],
		resolve: {
			alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
		},
	};
});
