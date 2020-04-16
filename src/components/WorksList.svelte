<section>
	<h2>{title.title}<br><span>{title.lead}</span></h2><ul class="row">
		{#each works as work}
			<li class="col-12 col-md-6">
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
									{work.description}
								</p>
							</div>
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}

	</ul>
</section>

<script>
	let title = {
		title: "My work",
		lead: "Both personal and professional work",
	}

	let works = [
		{
			slug: 'tale',
			title: 'Tale',
			description: 'Tale is an application that allows you to convey an emotion through words and images',
		},
		{
			slug: 'cryptic',
			title: 'Cryptic Cup',
			description: 'Tale is an application that allows you to convey an emotion through words and images',
		},
		{
			slug: 'img43',
			title: 'IMG43',
			description: 'Tale is an application that allows you to convey an emotion through words and images',
		},
		{
			slug: 'taskhunters',
			title: 'Taskhunters for Business',
			description: 'Tale is an application that allows you to convey an emotion through words and images',
		},
		{
			slug: 'spedity',
			title: 'Spedity',
			description: 'Tale is an application that allows you to convey an emotion through words and images',
		},
		{
			slug: 'taskhuntersapp',
			title: 'Taskhunters App',
			description: 'Tale is an application that allows you to convey an emotion through words and images',
		},
	]
</script>

<style lang="scss">
	li {
		font-size: 1rem;
    transition: transform .3s;
		margin-bottom: 6em;

		&:hover {
			figure {
				div {
					transform: scale(0.98);
				}
				img {
					transform: scale(1.06);
				}
				figcaption {
					opacity: 1;
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
			transition: transform .3s;

			img {
				width: 100%;
				pointer-events: none;
				user-select: none;
				transition: transform .3s;
			}
		}

		figcaption {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: opacity .25s ease-in;
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
				opacity: .95;
			}

			h3 {
				font-family: HelveticaMedium, "Arial", sans-serif;
				font-size: 2.4em;
				font-weight: medium;
			}

			p {
				font-weight: medium;
				text-align: center;
				color: #707070;
			}
		}
	}
</style>