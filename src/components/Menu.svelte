<div class="button" >
	<FlyUp {...flyUps('menu', 'button')}>
		<button on:click={menuOpen.toggle}>
			{#if isMenuOpen}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.41417 5L22.4142 16.3137L22.4141 19.1421L2.41417 7.82842L2.41417 5Z" fill="white"/>
					<path d="M22.4142 5L2.41419 16.3137L2.41424 19.1421L22.4142 7.82842L22.4142 5Z" fill="white"/>
				</svg>
			{:else}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 17H20L22 19H2V17Z" fill="black"/>
					<path d="M2 5H8L10 7H2V5Z" fill="black"/>
					<path d="M2 11L14 11L16 13H2V11Z" fill="black"/>
				</svg>
			{/if}
		</button>
	</FlyUp>
</div>

{#if isMenuOpen}
	<section transition:fly="{{delay: 100, duration: 600, x: -wWidth }}">
		<div>
			<div class="logo">
				<Logo invert />
			</div>
			<nav>
				<ul>
					{#each links as link, i}
						<li>
							<FlyUp {...flyUps('menu', 'li', i)}>
								<a
									on:click={menuOpen.reset}
									rel=prefetch
									aria-current='{segment === undefined ? "page" : undefined}'
									href={`/${link === 'home' ? '' : link}`}
								>
									{link}
								</a>
							</FlyUp>
						</li>
					{/each}
				</ul>
			</nav>
			<SocialLinks invert />
		</div>
	</section>
{/if}

<script>
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { slide, fade, fly } from 'svelte/transition';
	import FlyUp from '../helpers/FlyUp.svelte';
	import Logo from './Logo.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import { menuOpen } from '../store.js';

	export let segment;

	let isMenuOpen;
	let menuStore = menuOpen.subscribe(state => isMenuOpen = state);

	let wWidth;

	onMount(() => {
    wWidth = window.innerWidth;
  });

	const links = [ 'home', 'about', 'works', 'blog'];

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			menu: {
				button: {
					top: 0,
					options: { x: -128, duration: 1280, delay: 512 },
				},
				h3: {
					top: -48,
					options: { y: 128, duration: 1280, delay: 256 },
				},
				li: {
					top: -48,
					options: { x: 256, duration: 1280, delay: 256 + 128 * (i + 1) },
				},
			},
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;
</script>

<style lang="scss">
	section {
		background-color: var(--black);
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		padding: 0 10% 0 15%;
		overflow: hidden;
		@media (min-width: 768px)  {
			padding-left: 10%;
		}

		.logo {
			padding-top: 2rem;
			width: 2rem;
			@media (min-width: 48em) {
				padding-top: 4rem;
				width: 3rem;
			}
		}

		a {
			color: white;
		}

		nav {
			margin: 7.5vh 0;
			@media (min-width: 375px) {
				margin: 15vh 0;
			}
			ul {
				li {
					a {
						font-size: calc(var(--font-h2) * .75);
					}
				}
			}
		}
	}

	.button {
		position: fixed;
		z-index: 200;
		top: 50%;
		left: 1em;
		transition: transform 0.3s var(--ease-out-quart);
		@media only screen
			and (max-height: 500px)
			and (orientation: landscape)
			and (-webkit-min-device-pixel-ratio: 2) {
			padding-left: env(safe-area-inset-left);
		}

		&:hover{
			transform: var(--scale-lg);
		}

		button {
			padding: .4em .8em;
			padding-left: 0;
			cursor: pointer;
		}
	}
</style>
