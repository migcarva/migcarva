<svelte:head>
	<title>migcarva. {work.title}</title>
</svelte:head>

<div id="hero-{work.slug}" class="hero">
	<figure>
		<div>
			<IntersectableTransition
				anchor="#hero-{work.slug}" threshold={.1}
				options={{ y: 1280, duration: 1280, delay: 1024}}
			>
				<picture>
					<img
						src="/images/works/{work.slug}/cover.jpg"
						alt="{work.alt}"
						sizes="100vw"
						srcset="/images/works/{work.slug}/cover.jpg 480w, /images/works/{work.slug}/cover.jpg 1024w, /images/works/{work.slug}/cover.jpg 1200w"
					/>
					<source
						media="(min-width: 1024px)"
						sizes="100vw"
						srcset="/images/works/{work.slug}/cover.webp 1024w, /images/works/{work.slug}/cover.webp 1200w"
					/>
			</picture>
			</IntersectableTransition>
		</div>
	</figure>
</div>

<section id="details" class="container">
	<div class="row">
		<div class="col-6">
			<div class="row title">
				<div class="col-12 group">
					<IntersectableTransition
						anchor="#hero-{work.slug}" threshold={.1} isFade
						options={{ duration: 1920, delay: 1024 + 256}}
					>
						<h2>{work.title}</h2>
					</IntersectableTransition>
				</div>
			</div>
			<div class="row">
				<div class="col-6 group">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 0}}
					>
						<p class="title">CLIENT</p>
						<a rel="noreferrer" href="{work.client.url}">{work.client.name}</a>
					</IntersectableTransition>
				</div>
				<div class="col-6 group">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 256}}
					>
						<p class="title">EMPLOYER</p>
						<a rel="noreferrer" href="{work.employer.url}">{work.employer.name}</a>
					</IntersectableTransition>
				</div>
			</div>
			<div class="row">
				<div class="col-6 group">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 256 * 2}}
					>
						<p class="title">TECHNOLOGY</p>
						<p>{work.tech}</p>
					</IntersectableTransition>
				</div>
				<div class="col-6">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 256 * 3}}
					>
						<a rel="noreferrer" href="{work.url}" target="_blank">
							<p>see website</p>
							<div>
								<div class="left"></div>
								<div class="center"></div>
								<div class="right"></div>
							</div>
						</a>
					</IntersectableTransition>
				</div>
			</div>
		</div>
		<div class="col-6">
			<IntersectableTransition
				anchor="#details" threshold={.75}
				options={{ y: 128, duration: 1280, delay: 640}}
			>
				{@html work.description}
			</IntersectableTransition>
		</div>

	</div>
</section>

<section id="galery">
	<div class="container">
		<IntersectableTransition
			anchor="#details" threshold={0}
			options={{ y: 1280, duration: 1280, delay: 0}}
		>
			<h3>{work.punchline}</h3>
		</IntersectableTransition>
	</div>
	<div class="gallery">
		{#each work.images as image}
			<picture>
				<source 
					media="(min-width: 1024px)"
					sizes="100vw"
					type="image/webp"
					srcset="
						/images/works/{work.slug}/{image.src_m}.webp 1024w, 
						/images/works/{work.slug}/{image.src}.webp 1200w
					"
				>
				<source 
					media="(min-width: 480px)"
					sizes="100vw"
					type="image/jpeg"
					srcset="
						/images/works/{work.slug}/{image.src_s}.jpg 480w, 
						/images/works/{work.slug}/{image.src_m}.jpg 1024w, 
						/images/works/{work.slug}/{image.src}.jpg 1200w
					"
				>
				<img
					src="/images/works/{work.slug}/{image.src}.jpg" 
					alt="{image.alt}"
				>
			</picture>
		{/each}
	</div>
</section>

<section id="next" class="container">
	<div class="row next">
		{#if work.next.slug !== null}
			<div class="col-12">
				<p>up next</p>
				<a href="/works/{work.next.slug}">{work.next.title}</a>
			</div>
		{:else}
			<div class="col-12">
				<p>no more works</p>
				<a href="/works">go back to the list</a>
			</div>
		{/if}
	</div>
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
	.hero {
		position: relative;
		width: 100%;
		height: 100vh;
		max-height: 384px;

		@media (min-width: 48em) {
			max-height: 640px;
		}

		figure {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			> div {
				width: 100%;
				height: 100%;
				overflow: hidden;
				margin-bottom: 1.2em;
				position: relative;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					pointer-events: none;
					user-select: none;
					transition: transform .6s cubic-bezier(0, 0.55, 0.45, 1);
				}
			}
		}
	}

	#details {
		margin-top: 10vh;
		min-height: 30vh;

		h2 {
			font-size: calc(var(--font-h2) * 0.5);
			margin-bottom: 1rem;

			@media (min-width: 48em) {
				font-size: calc(var(--font-h2) * 0.75);
			}
		}

		a {
			position: relative;
			display: inline-block;
			text-transform: uppercase;
			font-weight: 600;

			&:hover {
				.left, .right {
					width: 45%;
				}
			}

			p {
			font-size: var(--font-h3);
				margin-bottom: 0;
			}

			div {
				position: relative;
				width: 100%;
				height: 1px;

				div {
					display: flex;
					height: 1px;
					background: black;
					top: 0;
					transition: width .25s ease-in;

					&.center {
						max-width: 33%;
						margin: 0 auto;
					}

					&.left, &.right {
						position: absolute;
						top: 0;
						width: 0;
					}

					&.left {
						left: 0;
						// animation: xpandAndContractLeft .25s linear 0 1 alternate forwards;
					}

					&.right {
						right: 0;
					}
				}
			}
		}
		.group {
			margin-bottom: 2rem;

			p, a {
				font-weight: 600;
			}

			.title {
				margin-bottom: 0;
				font-weight: 300;
			}
		}

	}

	#galery {
		margin-top: 25vh;

		h3 {
			font-size: calc(var(--font-h2) * .85);
			margin-bottom: 10rem;
		}

		.gallery {
			display: flex;
			flex-direction: column;

			img {
				width: 100%;
			}
		}
	}

	#next {
		margin-top: 10vh;

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