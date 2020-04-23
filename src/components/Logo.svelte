<div id="top">
	<a href='/'>
		<IntersectableTransition isFade options={{ delay: 0 }}>
			<svg
				width="128" height="128"
				viewBox="0 0 128 128" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g fill={invert ? 'white' : '#171717'}>
					<path d="M0 9.14286L18.2857 0V128H0V9.14286Z" />
					<path d="M18.2858 18.2857L54.8572 0V128H36.5715V29.7143L18.2858 38.8571V18.2857Z"/>
					<path d="M54.8572 18.2857L91.4286 0V128H73.1429V29.7143L54.8572 38.8571V18.2857Z"/>
					<path d="M91.4286 18.2857L128 0V128H109.714V29.7143L91.4286 38.8571V18.2857Z"/>
				</g>
			</svg>
		</IntersectableTransition>
	</a>
</div>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	export let invert;
</script>

<style lang="scss">
	#top {
		position: absolute;
		// width: 100%;
		// max-width: var(--breakpoint-xl);
		// padding: var(--container-padding);
		top: 3em;
		z-index: 10;

		@media (min-width: 48em) {
			top: 4em;
		}

		a {
			position: absolute;
			display: block;
			width: 2rem;
			height: 2rem;
			transition: transform .3s var(--ease-for-hover);
			@media (min-width: 48em) {
				width: 3rem;
				height: 3rem;
			}

			&:hover {
				transform: var(--scale-lg);
				transition: transform .3s var(--ease-out-quart);
			}

			svg {
				width: 100%;
				height: 100%;
			}
		}
	}


</style>