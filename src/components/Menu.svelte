<div>
	<button on:click={toggleVisibility}>
		{#if visible}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.07104 14.4853L11.1421 7.41422H13.9705L5.48526 15.8995L4.07104 14.4853Z" fill="white"/>
				<path d="M4.41418 5L15.7279 16.3137L15.7279 19.1421L2.99997 6.41421L4.41418 5Z" fill="white"/>
			</svg>
		{:else}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3 8H13L15 10H3V8Z" fill="black"/>
				<path d="M3 14L19 14L21 16H3V14Z" fill="black"/>
			</svg>
		{/if}
	</button>
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
		left: 20px;
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
