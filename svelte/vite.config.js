import { resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import crelte from 'crelte/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
	// when the dev server runs inside ddev (ddev sv npm run dev) we
	// need to allow requests coming through the ddev router and make
	// HMR connect through it (port 443) instead of the vite port.
	// vite also serves https itself (using the ddev certificate),
	// otherwise crelte would see http requests and redirect to the
	// https site url, causing a redirect loop
	const ddev = !!process.env.DDEV_PRIMARY_URL;

	return {
		css: {
			devSourcemap: true,
		},
		plugins: [svelte(), crelte()],
		resolve: {
			alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
		},
		server: ddev
			? {
					allowedHosts: ['.ddev.site'],
					https: {
						cert: readFileSync('/etc/ssl/certs/master.crt'),
						key: readFileSync('/etc/ssl/certs/master.key'),
					},
					hmr: {
						protocol: 'wss',
						clientPort: 443,
					},
				}
			: {},
	};
});
