<IntersectableTransition {...lOptions}>
	<a class="action" href={href}><slot></slot></a>
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
</style>
