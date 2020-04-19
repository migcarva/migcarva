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
</div>
<Disclaimer invert />

<script>
	import FlyUp from '../helpers/FlyUp.svelte';
	import Disclaimer from './Disclaimer.svelte';
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
			}
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;
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
					color: var(--grey-light);
				}
			}
		}

		&.invert {
			h3, a {
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
	a.action:hover{
		color: var(--action);
		transform: scale3d(var(--scale-sm));
	}

	a.linkedin:hover {
		color: var(--linkedin) !important;
	}

	a.github:hover {
		color: var(--grey-light) !important;
	}

	a.dribble:hover {
		color: var(--dribble) !important;
	}

	a.twitter:hover {
		color: var(--twitter) !important;
	}
</style>
