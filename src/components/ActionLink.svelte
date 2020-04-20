<IntersectableTransition isFade {...options}>
	<a class="action" href={href}><slot></slot></a>
</IntersectableTransition>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	export let href;
	export let options;
</script>

<style lang="scss">
</style>
