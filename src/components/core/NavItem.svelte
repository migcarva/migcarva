<li class:active={$currentPage === segment || (segment === 'home' && $currentPage === undefined)}>
	<a rel="prefetch" href={segment === 'home' ? '/' : segment} on:click={(e) => togglePage(e, segment)}>
		<slot></slot>
	</a>
</li>

<script>
	import { menuIsOpen, currentPage } from '../../store.js';

	export let segment;

	function togglePage(e, page) {
		currentPage.set(page);
		menuIsOpen.toggle();
	}
</script>

<style lang="scss">
	li {
		&.active {
			font-weight: 600;
		}
	}
	a {
		position: relative;
		color: white;
		font-size: calc(var(--font-h2) * .75);
		&:hover {
			&:after {
				width: 100%;
			}
		}
		&:after {
			position: absolute;
			content: "";
			bottom: 0;
			left: 0;
			border-bottom: 2px solid white;
			width: 0;
			transition: width .4s var(--ease-for-hover);
		}
	}
</style>