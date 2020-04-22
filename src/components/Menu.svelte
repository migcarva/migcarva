<div class="button" >
	<IntersectableTransition options={{ x: -128, y: 0, delay: 512 }}>
		<button on:click={menuIsOpen.toggle}>
			<Icon name={$menuIsOpen ? 'close' : 'hamburger'} />
		</button>
	</IntersectableTransition>
</div>

{#if $menuIsOpen}
	<section transition:fly="{{delay: 100, duration: 600, x: -wWidth }}">
		<div class="container">
			<div class="logo">
				<Logo invert />
			</div>
			<Nav />
			<SocialLinks />
		</div>
	</section>
{/if}

<script>
	import { stores } from '@sapper/app';
	import { onMount, getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { quintOut } from 'svelte/easing';
	import { slide, fade, fly } from 'svelte/transition';

	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	import Hoverable from '../helpers/Hoverable.svelte';
	import Logo from './Logo.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import Icon from './core/Icon.svelte';
	import Nav from './core/Nav.svelte';

	import { menuIsOpen } from '../store.js';

	const page = getContext('page');
	page.subscribe(() => {
		menuIsOpen.reset();
	});

	let wWidth;

	onMount(() => {
    wWidth = window.innerWidth;
  });
</script>

<style lang="scss">
	section {
		background-color: var(--black);
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: hidden;

		> div {
			z-index: 10;
			height: 100vh;
			margin: 0 auto;
			@media (min-width: 48em) {
				margin: 0 auto;
			}
		}

		.logo {
			width: 2rem;
			@media (min-width: 48em) {
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
