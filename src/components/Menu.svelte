<div class="button" >
	<FlyUp {...flyUps('menu', 'button')}>
		<button on:click={() => open = !open}>
			<Icon name={open ? 'close' : 'hamburger'} />
		</button>
	</FlyUp>
</div>

{#if open}
	<section transition:fly="{{delay: 100, duration: 600, x: -wWidth }}">
		<div>
			<div class="logo">
				<Logo invert />
			</div>
			<Nav {segment} {page} />
			<SocialLinks invert />
		</div>
	</section>
{/if}

<script>
	import { stores } from '@sapper/app';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { quintOut } from 'svelte/easing';
	import { slide, fade, fly } from 'svelte/transition';

	import FlyUp from '../helpers/FlyUp.svelte';
	import Hoverable from '../helpers/Hoverable.svelte';
	import Logo from './Logo.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import Icon from './core/Icon.svelte';
	import Nav from './core/Nav.svelte';

	export let segment;
	export let page;

	let open = false;
	let visible = true;

	page.subscribe(() => {
		open = false;
	});

	const current = writable(null);
	setContext('nav', current);

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

	$: $current = segment;
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
