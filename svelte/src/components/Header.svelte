<script>
	import { getSite, getGlobal } from 'crelte';

	const header = getGlobal('header');
	const site = getSite();

	let { entry } = $props();
</script>

<div class="header">
	<nav>
		<ul>
			<li>
				<a href={$site.url}>Starter</a>
				<a href="docs">Docs</a>
			</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.header {
		margin-bottom: 2rem;
	}
</style>
