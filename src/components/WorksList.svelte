<section>
	<h2>{title.title}<br><span>{title.lead}</span></h2><ul class="row">
		{#each works as work}
			<li class="col col-6">
				<a href={`/works/${work.slug}.html`}>
					<figure>
						<div>
							<img
								srcset={`images/works/${work.slug}_cover_home.png 1x, images/works/${work.slug}_cover_home@2x.png 2x`}
								alt={work.title}
							>
						</div>
						<figcaption>
							<div>
								<h3>{work.title}</h3>
								<p>
									description: 'lorem	lorem lol ipsum lipsum lol lorem',
								</p>
							</div>
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
	<a class="action" href="../en/about.html">Discover more</a>
</section>

<script>
	let title = {
		title: "My work",
		lead: "— Both personal and professional work",
	}

	let works = [
		{
			slug: 'tale',
			title: 'Work 1',
			description: 'lorem	lorem lol ipsum lipsum lol lorem',
		},
		{
			slug: 'cryptic',
			title: 'Work Adasd',
			description: 'lorem	lorem lol ipsum lipsum lol lorem',
		},
		{
			slug: 'img43',
			title: 'Work lsdfj',
			description: 'lorem	lorem lol ipsum lipsum lol lorem',
		},
		{
			slug: 'taskhunters',
			title: 'Work for Business',
			description: 'lorem	lorem lol ipsum lipsum lol lorem',
		},
		{
			slug: 'spedity',
			title: 'Work for you',
			description: 'lorem	lorem lol ipsum lipsum lol lorem',
		},
		{
			slug: 'taskhuntersapp',
			title: 'Work App',
			description: 'lorem	lorem lol ipsum lipsum lol lorem',
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
				div {
					transform: scale3d(0.98, 0.98, 1);
				}
				img {
					transform: scale3d(1.06, 1.06, 1);
				}
				figcaption {
					opacity: 1;
					div {
						opacity: .95;
						// box-shadow: 0 8px 6px -6px #E1E1E1;
					}
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
			overflow: hidden;
			transition: transform .3s cubic-bezier(0, 0.55, 0.45, 1);

			img {
				width: 100%;
				pointer-events: none;
				user-select: none;
				transition: transform .3s cubic-bezier(0, 0.55, 0.45, 1);
			}
		}

		figcaption {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: opacity .35s cubic-bezier(0, 0.55, 0.45, 1);
			width: 100%;
			height: 100%;

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				background-color: white;
				margin: 1em;
				padding: 2em;
				width: calc(100% - 2em);
				height: calc(100% - 2em);
				opacity: 0;
				transition: opacity .3s cubic-bezier(0, 0.55, 0.45, 1);
			}

			h3 {
				font-size: calc(var(--font-h3) * 2);
			}

			p {
				text-align: center;
				color: #707070;
			}
		}
	}
</style>