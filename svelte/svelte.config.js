import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: '',
				includePaths: ['./src'],
			},
		}),
	],
	compilerOptions: {
		// runes: true,
	},
};

export default config;
