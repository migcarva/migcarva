<div>
	<FlyUp {...flyUps('menu', 'button')}>
		<button on:click={toggleVisibility}>
			{#if visible}
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

{#if visible}
	<section transition:fly="{{delay: 100, duration: 600, x: -wWidth }}">
		<div>
			<ul>
				<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
				<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>
				<li><a aria-current='{segment === "about" ? "page" : undefined}' href='works'>works</a></li>
				<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
			</ul>
		</div>
	</section>
{/if}

<script>
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { slide, fade, fly } from 'svelte/transition';
	import FlyUp from '../helpers/FlyUp.svelte';

	export let segment;

	let wWidth;
	let visible = false;

	onMount(() => {
    wWidth = window.innerWidth;
  });

	function toggleVisibility() {
		visible = !visible;
	}

	const hamburgerProps = {
		visible,
		handleClick: toggleVisibility,
	}

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			menu: {
				button: {
					top: 0,
					options: { x: -128, duration: 1280, delay: 512 },
				},
			},
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;
</script>

<style lang="scss">
	section {
		background-color: #171717;
		background-color: rosybrown;
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		margin-top: 0;
		padding-top: 50px;
		/* transform: translateY(-100%); */
		transition: transform 0.2s ease-out;
	}
	/* .menu.open {
			transform: translateY(0);
			transition: transform 0.2s ease-out;
	} */
	div {
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
