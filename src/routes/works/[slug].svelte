<svelte:head>
	<title>migcarva. {work.title}</title>
</svelte:head>

<div class="hero">
	<figure>
		<div>
			<IntersectableTransition
				anchor="#{work.slug}" threshold={.1}
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
				anchor="#{work.slug}" threshold={.1} isFade
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

<section id="{work.slug}" class="container">
	<div>
		yo
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

			.hover {
				width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				text-align: center;
				transform: translate(-50%, -50%);
				color: white;
				font-size: 3em;
				font-weight: var(--font-medium);
				text-shadow: 0 4px 4px var(--grey-light);
				opacity: 0;
				transition: opacity .3s cubic-bezier(0, 0.55, 0.45, 1);
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
</style>