<footer>
	<FlyUp {...flyUps('footer', 'h2')}>
		<h2>
			Thanks for your time.<br>
			Want to get in touch?<br>
			<span>Use my email<br><a href="mailto:info@migcarva.com">info@migcarva.com</a></span>
		</h2>
	</FlyUp>
	<div class="row">
		<div class="col-4">
			<FlyUp {...flyUps('footer', 'h3')}>
				<h3>On the interweb</h3>
			</FlyUp>
		</div>
		<div class="col-4">
			<ul>
				{#each links as link, i}
					<li>
						<FlyUp  {...flyUps('footer', 'li', i)}>
							<a class={link.name.toLowerCase()} href={link.url} target="_blank">{link.name}</a>
							<span>/</span>
						</FlyUp>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<FlyUp {...flyUps('footer', 'h4')}>
		<h4 class="footer">{year} | migcarva.com ™</h4>
	</FlyUp>
</footer>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';
	const links = [
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/migcarva',
		},
		{
			name: 'Github',
			url: 'https://www.Github.com/migcarva',
		},
		{
			name: 'Dribble',
			url: 'https://dribbble.com/migcarva',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/migcarva/',
		},
	];

	let year = new Date().getFullYear();

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			footer: {
				h2: {
					top: -48,
					options: { y: 128, duration: 1280, delay: 256 },
				},
				h3: {
					top: -48,
					options: { y: 128, duration: 1280, delay: 256 },
				},
				li: {
					top: -48,
					options: { x: 256, duration: 1280, delay: 256 + 128 * (i + 1) },
				},
				h4: {
					top: -48,
					options: { y: -128, duration: 1280, delay: 256 },
				}
			}
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;
</script>

<style lang="scss">
	footer {
		padding: var(--sections-bottom-margin) 0 calc(var(--sections-bottom-margin) / 4);

		@media (max-width: 767px) {
			padding: 10em 0 2.5em;
		}

		h2 {
			padding-top: 0;
		}

		h3 {
			padding-top: 4px;
		}

		ul {

			li {
				display: inline;

				span {
					color: #DBDBDB;
				}
			}
		}
	}

	h4 {
		margin: 6em 0 0;
	}
</style>
