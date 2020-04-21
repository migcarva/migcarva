<section id={sectionId}>
	<IntersectableTransition anchor={`#${sectionId}`} threshold={.5}>
		{#if isSelected}
			<h2>
				Selected work<br>
				<span>— A curated list of my best work</span>
			</h2>
		{:else}
			<h2>
				All my work<br>
				<span>— Both personal and professional work</span>
			</h2>
		{/if}
	</IntersectableTransition>
	<ul class="row">
		{#each works as work, i}
			<li class="col col-6">
				<IntersectableTransition
					anchor={`#${sectionId}`} threshold={.5}
					options={{ x: 256, duration: 640, delay: 128 }}
				>
					<a href={`/works/${work.slug}.html`}>
						<figure>
							<div>
								<img
									srcset={`images/works/${work.slug}_cover_home.png 1x, images/works/${work.slug}_cover_home@2x.png 2x`}
									alt={work.title}
								/>
								<p class="hover">view more</p>
							</div>
							<figcaption>
								<h3>{work.title}</h3>
								<div>
									<p>{work.client}</p>
									<p>{work.tech}</p>
								</div>
							</figcaption>
						</figure>
					</a>
				</IntersectableTransition>
			</li>
		{/each}
	</ul>
	{#if isSelected}
		<ActionLink href="/works">
			Discover more
		</ActionLink>
	{/if}
</section>


<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	import ActionLink from './ActionLink.svelte';

	export let works;
	export let isSelected = false;

	const sectionId = isSelected ? 'selected-works' : 'works' ;
</script>

<style lang="scss">
	section {
		min-height: 100vh;
		padding-top: 25vh;
	}

	li {
		font-size: var(--font-base);
    transition: transform .3s;
		margin-bottom: 2em;

		&:hover {
			figure {
				div {
					img {
						transform: scale3d(1.16, 1.16, 1);
						transition: transform 2.2s cubic-bezier(0, 0.55, 0.45, 1);
					}
					.hover {
						opacity: .9;
						transition: opacity 1.1s cubic-bezier(0, 0.55, 0.45, 1);
					}
				}

				h3:after {
					width: 100%;
				}
			}
		}
	}

	a {
		text-decoration: none;

		&:link,
		&:visited {
			text-decoration: none;
		}
	}

	figure {
		margin: 0;
		position: relative;

		div {
			width: 100%;
			max-height: 640px;
			height: auto;
			overflow: hidden;
			margin-bottom: 1.2em;

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
				top: 44%;
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
			margin-bottom: 3em;

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
</style>