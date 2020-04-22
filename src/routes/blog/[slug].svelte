<svelte:head>
	<title>migcarva. {post.title}</title>
</svelte:head>

<section id="{post.slug}">
	<IntersectableTransition>
		<h2>
			{post.title}<br>
			<span>tl:dr — {@html post.summary}</span>
		</h2>
	</IntersectableTransition>
	<div class="row">
		<div class="col-8">
			<div class='content'>
				{@html post.html}
			</div>
		</div>
	</div>
	<div class="row next">
		{#if post.next.slug !== null}
			<div class="col-12">
				<p>up next</p>
				<a href="/blog/{post.next.slug}">{post.next.title}</a>
			</div>
		{:else}
			<div class="col-12">
				<p>no more posts</p>
				<a href="/blog">go back to the list</a>
			</div>
		{/if}
	</div>

</section>



<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import IntersectableTransition from '../../helpers/IntersectableTransition.svelte';

	export let post;
</script>

<style lang="scss">
	section {
		padding-top: 25vh;

		h2 {
			span {
				font-size: calc(var(--font-h3) * 0.75);
			}
		}

		.next {
			div {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-end;

				p {
					margin: 0;
				}

				a {
					display: block;
					float: right;
					transition: 0.3s;
					margin-bottom: 2em;
					font-size: var(--font-blog-p);
					font-weight: var(--font-bold);

					&:hover {
						color: var(--action);
					}
				}
			}
		}

	}
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h3) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(p) {
		font-size: var(--font-blog-p);
		line-height: var(--line-height-big);
		margin-bottom: 2rem;
	}


	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: var(--line-height-small);
		list-style: circle;
		margin-bottom: 2rem;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>