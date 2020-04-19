<svelte:window bind:scrollY={y}/>

<footer>
	<FlyUp {...flyUps('footer', 'h2')}>
		<h2>
			Want to get in touch?<br>
			<span>Use my email<br><a href="mailto:info@migcarva.com">info@migcarva</a></span>
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
	<div class="disclaimer">
		<FlyUp {...flyUps('footer', 'h4')}>
			<h4 class="footer">{year} | migcarva.com ™</h4>
		</FlyUp>
		<div class="logo" on:click={goToTop}>
			<FlyUp {...flyUps('footer', 'logo')}>
				<div class="top">
					<span>go to top</span>
				</div>
				<Logo />
			</FlyUp>
		</div>
	</div>
</footer>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';
	import Logo from '../components/Logo.svelte';
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

	let y;
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
					top: -32,
					options: { y: 128, duration: 1280, delay: 256 },
				},
				logo: {
					top: -32,
					options: { x: 128, duration: 1280, delay: 256 },
				}
			}
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;

	function goToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
</script>

<style lang="scss">
	footer {
		padding: 8em 0 6em;
		@media (min-width: 375px) {
			padding: 6em 0;
		}
		@media (min-width: 768px) {
			padding: var(--sections-bottom-margin) 0 calc(var(--sections-bottom-margin) / 4);
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

	.disclaimer {
		display: flex;
		justify-content: space-between;
		margin: 6em 0 0;
		position: relative;

		.top {
			position: absolute;
			width: 2em;
			height: 2em;
			top: 0;
			right: 0;

			&:hover {
				span {
					opacity: 1;
				}
			}
			span {
				width: 6em;
				text-align: right;
				font-size: .75em;
				position: absolute;
				top: -2em;
				right: 0;
				opacity: 0;
				transition: opacity .3s ease-in;
			}
		}

		.logo {
			max-width: 1rem;
		}
	}


</style>
