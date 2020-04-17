	<div>
		<button on:click={handleClick}>
				<div transition:fade="{{delay: 250, duration: 300}}">
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
				</div>
		</button>
	</div>

<script>
	import { fade } from 'svelte/transition';
	export let handleClick;
	export let visible;
</script>

<style lang="scss">
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