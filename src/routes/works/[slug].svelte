<svelte:head>
	<title>migcarva. {work.title}</title>
</svelte:head>

<div id="hero" class="hero">
	<figure>
		<div>
			<IntersectableTransition
				anchor="#hero" threshold={.1}
				options={{ y: 1280, duration: 1280, delay: 0}}
			>
				<img
					src="/images/works/{work.slug}/thumb.png"
					alt={work.title}
				/>
			</IntersectableTransition>
		</div>
		<figcaption>
			<IntersectableTransition
				anchor="#hero" threshold={.1} isFade
				options={{ duration: 1920, delay: 1024}}
			>
				<h2>{work.title}</h2>
				<a href="{work.url}">
					<p>see website</p>
					<div>
						<div class="left"></div>
						<div class="center"></div>
						<div class="right"></div>
					</div>
				</a>
			</IntersectableTransition>
		</figcaption>
	</figure>
</div>

<section id="details" class="container">
	<div class="row">
		<div class="col-6">
			<div class="row">
				<div class="col-6 group">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 0}}
					>
						<p class="title">CLIENT</p>
						<a href="{work.client.url}">{work.client.name}</a>
					</IntersectableTransition>
				</div>
				<div class="col-6 group">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 256}}
					>
						<p class="title">EMPLOYER</p>
						<a href="{work.employer.url}">{work.employer.name}</a>
					</IntersectableTransition>
				</div>
			</div>
			<div class="row">
				<div class="col-6 group">
					<IntersectableTransition
						anchor="#details" threshold={.75}
						options={{ y: 128, duration: 1280, delay: 512}}
					>
						<p class="title">TECHNOLOGY</p>
						<p>{work.tech}</p>
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

<section id="galery" class="container">
	<IntersectableTransition>
		<h3>{work.punchline}</h3>
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
	.hero {
		position: relative;
		width: 100%;
		height: 75vh;

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

			figcaption {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;

				:global(> div div) {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				h2 {
					color: white;
					font-size: calc(var(--font-h2) * 1.25);
					margin-bottom: 1rem;
				}

				a {
					position: relative;

					&:hover {
						.left, .right {
							width: 45%;
						}
					}

					p {
						color: white;
						font-size: calc(var(--font-h3) * 1.5);
						margin-bottom: 0;
					}

					div {
						position: relative;
						width: 100%;
						height: 2px;

						div {
							display: flex;
							height: 2px;
							background: white;
							top: 0;
							transition: width .25s ease-in;

							&.center {
								max-width: 24%;
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
			}
		}
	}

	#details {
		margin-top: 10vh;
		min-height: 30vh;

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
		margin-top: 15vh;
		h3 {
			font-size: calc(var(--font-h2) * .85);
		}
	}
</style>