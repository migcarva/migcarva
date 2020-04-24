<nav>
	<ul>
		{#each links as link, i}
			<li>
				<IntersectableTransition options={{ x: 256, y: 0, delay: 128 + 64 * (i + 1) }}>
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
		padding: calc(7.5vh + 6rem) 0 7.5vh;
		// @media (min-width: 375px) {
		// 	padding: 10vh 0 7.5vh;
		// }
	}
</style>