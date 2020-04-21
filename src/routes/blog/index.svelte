<svelte:head>
	<title>migcarva. blog</title>
</svelte:head>

<section id="posts">
	<IntersectableTransition>
		<h2>
			My thoughts<br>
			<span>— Perpetually curious and forever learning</span>
		</h2>
	</IntersectableTransition>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul>
</section>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import IntersectableTransition from '../../helpers/IntersectableTransition.svelte';

	export let posts;
</script>

<style lang="scss">
	#posts {
		padding-top: 25vh;
	}
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>