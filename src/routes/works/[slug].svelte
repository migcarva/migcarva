<svelte:head>
	<title>migcarva. {work.title}</title>
</svelte:head>

<section id="{work.slug}">
	<IntersectableTransition>
		<h2>
			{work.title}<br>
			<span>tl:dr — {@html work.summary}</span>
		</h2>
	</IntersectableTransition>
</section>

<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`works/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { work: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import IntersectableTransition from '../../helpers/IntersectableTransition.svelte';

	export let work;
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
</style>