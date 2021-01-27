<svelte:head>
	<title>migcarva. works</title>
</svelte:head>
<div class="container">
	<Logo invert={false} />
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
	import Logo from '../../components/Logo.svelte';

	// import mixpanel from 'mixpanel-browser';
	// mixpanel.track("Works page");

	export let works;
</script>

<style>
</style>