<svelte:head>
	<title>migcarva. blog</title>
</svelte:head>

<div class="container">
	<Logo invert={false} />
	<section id="posts">
		<IntersectableTransition>
			<h2>
				My thoughts<br>
				<span>— Ideas, writtings and sometimes rants!</span>
			</h2>
		</IntersectableTransition>

		<ul>
			{#each posts as post}
				<li id="{post.slug}">
					<IntersectableTransition anchor="#{post.slug}" threshold={1}>
						<a rel='prefetch' href='blog/{post.slug}'>
							<div class="row">
								<div class="col-8">
									<h3>{post.title}</h3>
								</div>
								<div class="col-8">
									<p>{@html post.summary}</p>
								</div>
							</div>
						</a>
					</IntersectableTransition>
				</li>
			{/each}
		</ul>
	</section>
</div>

<script context="module">
	export async function preload({ params, query }) {
		// return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		// 	return { posts };
		// });
		const res = await this.fetch(`blog.json`);
		const data = await res.json();
		console.log(data);

		if (res.status === 200) {
			return { posts: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import IntersectableTransition from '../../helpers/IntersectableTransition.svelte';
	import Logo from '../../components/Logo.svelte';

	export let posts;
</script>

<style lang="scss">
	#posts {
		padding-top: 25vh;
	}
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;

		li {
			margin-bottom: 2rem;
			@media (min-width: 48em) {
				margin-bottom: 4rem;
			}

			h3 {
				font-size: calc(var(--font-h3) * 1.35);
			}
		}
	}
</style>