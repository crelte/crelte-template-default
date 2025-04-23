<script context="module">
	export const templates = import.meta.glob('@/templates/*.svelte');

	/** @type {import('crelte').Config} */
	export const config = {
		preloadOnMouseOver: true,
	};
</script>

<script>
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';

	export let entry;
	export let template;
	export let templateData;
</script>

<svelte:head>
	<title>{entry?.title ?? 'Not Found'}</title>
</svelte:head>

<Header {entry} />

<!-- update entire component if page changes -->
{#key entry}
	<div class="app">
		<svelte:component this={template} {entry} {...templateData} />
	</div>
{/key}

<Footer {entry} />
