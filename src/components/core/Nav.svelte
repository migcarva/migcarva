<svelte:window on:hashchange={handle_hashchange} on:scroll={handle_scroll} />
<nav>
	<ul>
		{#each links as link, i}
			<IntersectableTransition options={{ x: 256, y: 0, delay: 256 + 128 * (i + 1) }}>
				<NavItem segment={link === 'home' ? '' : link}>{link}</NavItem>
			</IntersectableTransition>
		{/each}
	</ul>
</nav>

<script>
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import NavItem from './NavItem.svelte';
	import IntersectableTransition from '../../helpers/IntersectableTransition.svelte';

	export let segment;
	export let page;

	const links = [ 'home', 'about', 'works', 'blog'];

	const current = writable(null);
	setContext('nav', current);

	let open = false;
	let visible = true;

	// hide nav whenever we navigate
	page.subscribe(() => {
		open = false;
	});

	function intercept_touchstart(event) {
		if (!open) {
			event.preventDefault();
			event.stopPropagation();
			open = true;
		}
	}

	// Prevents navbar to show/hide when clicking in docs sidebar
	let hash_changed = false;
	function handle_hashchange() {
		hash_changed = true;
	}

	let last_scroll = 0;
	function handle_scroll() {
		const scroll = window.pageYOffset;
		if (!hash_changed) {
			visible = (scroll < 50 || scroll < last_scroll);
		}

		last_scroll = scroll;
		hash_changed = false;
	}

	$: $current = segment;
</script>

<style lang="scss">
	nav {
		margin: 7.5vh 0;
		@media (min-width: 375px) {
			margin: 15vh 0;
		}
	}
</style>