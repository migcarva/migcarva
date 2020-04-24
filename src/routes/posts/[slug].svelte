<svelte:head>
	<title>migcarva. {post.title}</title>
</svelte:head>

<div class="container">
	<Logo invert={false} />
	<section id="{post.slug}">
		<div class="row">
			<div class="col-8">
				<IntersectableTransition>
					<h2>
						{post.title}<br>
						<span>tl:dr — {@html post.summary}</span>
					</h2>
				</IntersectableTransition>
			</div>
		</div>
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
					<a href="/posts/{post.next.slug}">{post.next.title}</a>
				</div>
			{:else}
				<div class="col-12">
					<p>no more posts</p>
					<a href="/posts">go back to the list</a>
				</div>
			{/if}
		</div>
	</section>
</div>

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
	import Logo from '../../components/Logo.svelte';
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