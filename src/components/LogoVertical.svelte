<svelte:window bind:scrollY={y}/>

{#if y > 800}
	<div transition:fly="{{ y: -20, duration: 500 }}">
		<h1>
			<a href="/">migcarva.</a>
		</h1>
	</div>
{/if}

<script>
	import { fade, fly } from 'svelte/transition';
	let y;
</script>

<style lang="scss">
	div {
		position: fixed;
		z-index: 10;
		margin: 0 0 0 0;
		padding: 0;
		top: 80px;
		left: -8px;
		transform: rotate(-90deg) translate(0, 0);
		transition: transform 0.3s cubic-bezier(0.6, 0.2, 0.1, 1);
		@media only screen
			and (max-height: 500px)
			and (orientation: landscape)
			and (-webkit-min-device-pixel-ratio: 2) {
			left: -11px;
		}

		// &.isHidden {
		// 	transform: rotate(-90deg) translate(0, -100px);
		// 	transition: transform 0.2s cubic-bezier(0.6, 0.2, 0.1, 1);
		// }

		h1 {
			font-family: var(--font);
			font-weight: var(--font-bold);
			font-size: var(--font-base);
			text-align: right;

			a {
				font-family: var(--font);
				font-size: var(--font-base);

				@media only screen
					and (max-height: 500px)
					and (orientation: landscape)
					and (-webkit-min-device-pixel-ratio: 2) {
						padding-left: env(safe-area-inset-left);
				}
			}
		}
	}
</style>