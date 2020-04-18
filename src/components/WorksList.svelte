<section>
	<FlyUp top={0} options={{ y: 128, duration: 1280, delay: 128 }}>
		<h2>{title.title}<br><span>{title.lead}</span></h2>
	</FlyUp>
	<ul class="row">
		{#each works as work, i}
			<li class="col col-6">
				<FlyUp
					top={0}
					options={{ y: 256, duration: 1280, delay: i % 2 === 0 || i > 0 ? (128 + 128 * (i - 1)) : (128 + 128 * i) }}>
					<a href={`/works/${work.slug}.html`}>
						<figure>
							<div>
								<img
									srcset={`images/works/${work.slug}_cover_home.png 1x, images/works/${work.slug}_cover_home@2x.png 2x`}
									alt={work.title}
								/>
							</div>
							<p>view more</p>
							<figcaption>
								<h3>{work.title}</h3>
								<div>
									<p>{work.client}</p>
									<p>{work.tech}</p>
								</div>
							</figcaption>
						</figure>
					</a>
				</FlyUp>
			</li>
		{/each}
	</ul>
	<FlyUp top={0} options={{ y: 128, duration: 1280, delay: 256 }}>
		<a class="action" href="../en/about.html">Discover more</a>
	</FlyUp>
</section>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';
	let title = {
		title: "My work",
		lead: "— Both personal and professional work",
	}

	let works = [
		{
			slug: 'work',
			title: 'Work 1',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work Adasd',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work lsdfj',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work for Business',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work for you',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work App',
			client: 'Client A',
			tech: 'react + python'
		},
	]
</script>

<style lang="scss">
	li {
		font-size: var(--font-base);
    transition: transform .3s;
		margin-bottom: 2em;

		&:hover {
			figure {
				img {
					transform: scale3d(1.16, 1.16, 1);
					transition: transform 2.2s cubic-bezier(0, 0.55, 0.45, 1);
				}
				> p {
					opacity: .9;
					transition: opacity 1.1s cubic-bezier(0, 0.55, 0.45, 1);
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

		&.action {
			margin-top: 0m;
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

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				pointer-events: none;
				user-select: none;
				transition: transform .6s cubic-bezier(0, 0.55, 0.45, 1);
			}
		}

		> p {
			width: 100%;
			position: absolute;
			top: 0;
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

				&:after {
					position: absolute;
					content: "";
					bottom: 0;
					left: 0;
					border-bottom: 2px solid var(--black);
					width: 0;
					transition: width .4s cubic-bezier(.215,.61,.355,1);
				}
			}

			p {
				color: #707070;
				font-size: calc(var(--font-base) * .75);
			}
		}
	}
</style>