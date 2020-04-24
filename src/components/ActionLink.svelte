<IntersectableTransition {...lOptions}>
	<a rel="prefetch" href={href}><slot></slot></a>
</IntersectableTransition>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	export let href;
	export let anchor = '';
	export let threshold = 0;

	const lOptions = {
		isFade: true,
		anchor: anchor,
		threshold,
	};

</script>

<style lang="scss">
	a {
		display: block;
		float: right;
		transition: 0.3s;

		&:hover {
			color: var(--action);
		}
	}
</style>
