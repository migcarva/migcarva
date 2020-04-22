<svelte:head>
	<title>migcarva. {work.title}</title>
</svelte:head>

<section id="{work.slug}">
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
					<p class="hover">view more</p>
				</IntersectableTransition>
			</div>
			<figcaption>
				<div class="caption">
					<IntersectableTransition
						anchor="#{work.slug}" threshold={.1} isFade
						options={{ duration: 1920, delay: 0}}
					>
						<h2>{work.title}</h2>
						<a href="{work.url}">see website</a>
					</IntersectableTransition>
				</div>
			</figcaption>
		</figure>
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
	section {
		padding-top: 25vh;

		.hero {
			position: relative;
			width: 100%;
			max-height: 65vh;

			figure {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;

				.caption {
					max-height: 4em;
				}

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
					div {
						display: flex;
						justify-content: space-between;
						transition: opacity .3s cubic-bezier(0, 0.55, 0.45, 1);
					}

					h3 {
						padding-top: 0;
						position: relative;
						display: inline-block;
						margin-bottom: 0;

						&:after {
							position: absolute;
							content: "";
							bottom: 0;
							left: 0;
							border-bottom: 2px solid var(--black);
							width: 0;
							transition: width .4s var(--ease-for-hover);
						}
					}

					p {
						color: #707070;
						font-size: calc(var(--font-base) * .75);
					}
				}
			}
		}

		figure {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			.caption {
				max-height: 4em;
			}

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
				div {
					display: flex;
					justify-content: space-between;
					transition: opacity .3s cubic-bezier(0, 0.55, 0.45, 1);
				}

				h3 {
					padding-top: 0;
					position: relative;
					display: inline-block;
					margin-bottom: 0;

					&:after {
						position: absolute;
						content: "";
						bottom: 0;
						left: 0;
						border-bottom: 2px solid var(--black);
						width: 0;
						transition: width .4s var(--ease-for-hover);
					}
				}

				p {
					color: #707070;
					font-size: calc(var(--font-base) * .75);
				}
			}
		}

		// .next {
		// 	div {
		// 		display: flex;
		// 		flex-direction: column;
		// 		justify-content: flex-end;
		// 		align-items: flex-end;

		// 		p {
		// 			margin: 0;
		// 		}

		// 		a {
		// 			display: block;
		// 			float: right;
		// 			transition: 0.3s;
		// 			margin-bottom: 2em;
		// 			font-size: var(--font-blog-p);
		// 			font-weight: var(--font-bold);

		// 			&:hover {
		// 				color: var(--action);
		// 			}
		// 		}
		// 	}
		// }
	}
</style>