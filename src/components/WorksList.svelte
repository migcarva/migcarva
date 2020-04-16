<section>
	<Title {...title} />
	<ul class="row">
		{#each works as work}
			<li class="col-12 col-md-6">
				<a href={`/works/${work.slug}.html`}>
					<div>
						<img
							srcset={`
								images/works/${work.slug}_cover_home.png 1x,
								images/works/${work.slug}_cover_home@2x.png 2x
							`}
							alt={work.title}
						>
					</div>
					<div class="project__description">
						<div class="project__title">
							<h3 class="heading-3">{work.title}</h3>
						</div>
						<p class="project__paragraph">
							{work.description}
						</p>
					</div>
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

<style>
	li {
		font-size: 1rem;
    transition: transform .3s;
    margin-bottom: 6em;
	}

	li a,
	li a:link,
	li a:visited {
		text-decoration: none;
	}

	li a > div:first-child {
		width: 100%;
		overflow: hidden;
		transition: transform .3s;
	}

	li a > div:last-child {
		width: 100%;
		overflow: hidden;
		transition: transform .3s;
	}

	img {
		width: 100%;
		pointer-events: none;
		user-select: none;
		transition: transform .3s;
	}
</style>