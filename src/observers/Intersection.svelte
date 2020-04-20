<div bind:this={container}>
	<slot {intersecting}></slot>
</div>

<script>
	import { onMount } from 'svelte';

	export let once = false;
	export let debug = false;
	export let anchor = '';
	export let threshold = 0;
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;

	let intersecting = false;
	let container;

	onMount(() => {
		let lAnchor = anchor !== '' ? document.querySelector(anchor) : container;
		if (debug) lAnchor.style.border = '1px solid red';
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
			const observer = new IntersectionObserver(entries => {
				intersecting = entries[0].isIntersecting;
				if (intersecting && once) {
					observer.unobserve(lAnchor);
				}
			}, {
				rootMargin,
				threshold
			});
			observer.observe(lAnchor);
			return () => observer.unobserve(lAnchor);
		}

		function handler() {
			const bcr = container.getBoundingClientRect();
			intersecting = (
				(bcr.bottom + bottom) > 0 &&
				(bcr.right + right) > 0 &&
				(bcr.top - top) < window.innerHeight &&
				(bcr.left - left) < window.innerWidth
			);
			console.log(intersecting);

			if (intersecting && once) {
				window.removeEventListener('scroll', handler);
			}
		}

		window.addEventListener('scroll', handler);

		return () => window.removeEventListener('scroll', handler);
	});
</script>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>