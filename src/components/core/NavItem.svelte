<Hoverable let:hovering={hover}>
	{#if hover}
		<li class:active="{$current === segment || segment === ''}">
			<a rel="prefetch" href={segment} class:hover>
				<slot></slot>
			</a>
		</li>
	{:else}
		<li class:active="{$current === segment || segment === ''}">
			<a rel="prefetch" href={segment}>
				<slot></slot>
			</a>
		</li>
	{/if}
</Hoverable>

<script>
	import { getContext } from 'svelte';
	import Hoverable from '../../helpers/Hoverable.svelte';

	export let segment = null;
	const current = getContext('nav');
	console.log(current);
	console.log(segment);


</script>

<style lang="scss">
	li :hover {
		a:after {
			width: 100%;
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
	}
	.active {
		font-weight: 600;
	}

	.hover {
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