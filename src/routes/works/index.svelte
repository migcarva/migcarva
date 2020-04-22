<svelte:head>
	<title>migcarva. Works</title>
</svelte:head>
<div class="container">
	<WorksList {works} />
</div>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`works.json`).then(r => r.json()).then(works => {
			return { works };
		});
	}
</script>

<script>
	import WorksList from '../../components/WorksList.svelte';

	export let works;
</script>

<style>
</style>