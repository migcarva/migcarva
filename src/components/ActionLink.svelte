<FadeIn {...options}>
	<a class="action" href={href}><slot></slot></a>
</FadeIn>

<script>
	import FadeIn from '../helpers/FadeIn.svelte';
	export let href;
	export let options;
</script>

<style lang="scss">
</style>
