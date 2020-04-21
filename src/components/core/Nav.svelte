<nav>
	<ul>
		{#each links as link, i}
			<li>
				<IntersectableTransition options={{ x: 256, y: 0, delay: 256 + 128 * (i + 1) }}>
					<NavItem segment={link}>{link}</NavItem>
				</IntersectableTransition>
			</li>
		{/each}
	</ul>
</nav>

<script>
	import NavItem from './NavItem.svelte';
	import IntersectableTransition from '../../helpers/IntersectableTransition.svelte';

	const links = [ 'home', 'about', 'works', 'blog'];
</script>

<style lang="scss">
	nav {
		overflow: hidden;
		margin: 7.5vh 0;
		@media (min-width: 375px) {
			margin: 15vh 0;
		}
	}
</style>