<div class={invert ? 'invert row' : 'row'}>
	<div class="col-4">
		<FlyUp {...flyUps('links', 'h3')}>
			<h3>On the interweb</h3>
		</FlyUp>
	</div>
	<div class="col-4">
		<ul>
			{#each links as link, i}
				<li>
					<FlyUp  {...flyUps('links', 'li', i)}>
						<a class={link.name.toLowerCase()} href={link.url} target="_blank">{link.name}</a>
						<span>/</span>
					</FlyUp>
				</li>
			{/each}
		</ul>
	</div>
	<div class="disclaimer">
		<FlyUp {...flyUps('links', 'h4')}>
			<h4 class="footer">{year} | migcarva.com ™</h4>
		</FlyUp>
		{#if !invert}
			<div class="logo" on:click={goToTop}>
				<FlyUp {...flyUps('links', 'logo')}>
					<div class="top">
						<span>go to top</span>
					</div>
					<Logo />
				</FlyUp>
			</div>
			{/if}
	</div>
</div>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import Logo from './Logo.svelte';

	export let invert;

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
			links: {
				h3: {
					top: -48,
					options: { x: 256, duration: 1280, delay: (invert ? 1024 : 256) },
				},
				li: {
					top: -48,
					options: { x: 256, duration: 1280, delay: (invert ? 1024 : 256) + 128 * (i + 1) },
				},
				h4: {
					top: -32,
					options: { y: 128, duration: 1280, delay: (invert ? 1024 : 256) },
				},
				logo: {
					top: -32,
					options: { x: 128, duration: 1280, delay: (invert ? 1024 : 256) },
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
	div {
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

		&.invert {
			h3, h4, a, span {
				color: white;
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
	}
</style>
