<div class:active={$current === segment || (segment === 'home' && $current === undefined)}>
	<a rel="prefetch" href={segment === 'home' ? '/' : segment}>
		<slot></slot>
	</a>
</div>

<script>
	import { getContext } from 'svelte';
	import { menuIsOpen, currentPage } from '../../store.js';

	export let segment;
	const current = getContext('current');
</script>

<style lang="scss">
	div {
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