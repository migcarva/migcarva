<svelte:head>
	<title>migcarva. blog</title>
</svelte:head>

<div class="container">
	<Logo invert={false} />
	<PostsList {posts} />
</div>

<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostsList from '../../components/PostsList.svelte';
	import Logo from '../../components/Logo.svelte';

	import mixpanel from 'mixpanel-browser';
	mixpanel.track("Blog page");

	export let posts;
</script>

<style lang="scss">
</style>