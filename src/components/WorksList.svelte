<section>
	<Title {...title} />
	<ul class="row">
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
								<h3 class="heading-3">{work.title}</h3>
							</div>
							<p>
								{work.description}
							</p>
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}

	</ul>
</section>

<script>
	import Title from './Title.svelte';

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
					transform: translateY(-10px);
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
			margin: 0 auto;
			margin-top: 3.2em;
			transition: transform .3s;
			max-width: 90%;
			@media only screen and (min-width: 992px) {
				max-width: 70%;
			}

			div {
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
			}

			p {
				font-weight: medium;
				text-align: center;
				color: #707070;
			}
		}
	}
</style>