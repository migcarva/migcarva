<IntersectableTransition isFade {...lOptions}>
	<a class="action" href={href}><slot></slot></a>
</IntersectableTransition>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	export let href;
	export let anchor = '';
	export let threshold = 0;

	const lOptions = {
		options: { duration: 640, delay: 1024 },
		...anchor,
		...threshold,
  };
</script>

<style lang="scss">
</style>
