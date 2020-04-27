<section id={sectionId}>
	<IntersectableTransition>
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
			<li class="col col-6" id="{sectionId}-{work.slug}">
				<a href={`/works/${work.slug}`}>
					<div>
						<figure>
							<div>
								<IntersectableTransition
									anchor="#{sectionId}-{work.slug}" threshold={.1}
									options={{ y: 256, duration: 1280, delay: i % 2 === 0 ? 0 : 256}}
								>
									<img
										src="/images/works/{work.slug}/thumb.webp"
										alt={work.title}
									/>
									<!-- <p class="hover">view more</p> -->
								</IntersectableTransition>
							</div>
							<figcaption>
								<div class="caption">
									<IntersectableTransition
										anchor="#{sectionId}-{work.slug}" threshold={.1} isFade
										options={{ duration: 1920, delay: i % 2 === 0 ? 0 : 256}}
									>
										<h3>{work.title}</h3>
										<div>
											<p>{work.client.name}</p>
											<p>{work.tech}</p>
										</div>
									</IntersectableTransition>
								</div>
							</figcaption>
						</figure>
					</div>
				</a>
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

	let list = works;
</script>

<style lang="scss">
	section {
		min-height: 100vh;
		padding-top: 25vh;
	}

	li {
		font-size: var(--font-base);
    transition: transform .3s;
		margin-bottom: 8em;

		&:hover {
			figure {
				div {
					img {
						transform: scale3d(1.16, 1.16, 1);
						transition: transform 2.2s cubic-bezier(0, 0.55, 0.45, 1);
					}
					// .hover {
					// 	opacity: .9;
					// 	transition: opacity 1.1s cubic-bezier(0, 0.55, 0.45, 1);
					// }
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

		> div {
			position: relative;
			width: 100%;

			&:before {
				content: "";
				display: block;
				padding-top: 120%;
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

			// .hover {
			// 	width: 100%;
			// 	position: absolute;
			// 	top: 50%;
			// 	left: 50%;
			// 	text-align: center;
			// 	transform: translate(-50%, -50%);
			// 	color: white;
			// 	font-size: 3em;
			// 	font-weight: var(--font-medium);
			// 	text-shadow: 0 4px 4px var(--grey-light);
			// 	opacity: 0;
			// 	transition: opacity .3s cubic-bezier(0, 0.55, 0.45, 1);
			// }
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
</style>