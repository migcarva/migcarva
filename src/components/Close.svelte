<div>
	<button on:click={handleClick}>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.07104 14.4853L11.1421 7.41422H13.9705L5.48526 15.8995L4.07104 14.4853Z" fill="white"/>
			<path d="M4.41418 5L15.7279 16.3137L15.7279 19.1421L2.99997 6.41421L4.41418 5Z" fill="white"/>
		</svg>
	</button>
</div>

<script>
	export let handleClick;
</script>

<style lang="scss">
	div {
		position: fixed;
		z-index: 100;
		top: 50%;
		left: 1.25em;
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
		}
	}
</style>