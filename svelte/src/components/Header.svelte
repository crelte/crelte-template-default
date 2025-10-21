<script>
	import { getSite, getGlobal } from 'crelte';

	const header = getGlobal('header');
	const site = getSite();

	let { entry } = $props();

	$inspect('header.title', $header.title);
</script>

<div class="header">
	<nav>
		<ul>
			<li>
				<a href={$site.url.toString()}>Starter</a>
				<a href="https://docs.crelte.com/" target="_blank">Docs</a>
			</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.header {
		margin-bottom: 2rem;
	}
</style>
