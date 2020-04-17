<div>
	<button>
		<svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0H10L12 2H0V0Z" fill="black"/>
			<path d="M0 6L16 6L18 8H0V6Z" fill="black"/>
		</svg>
	</button>
</div>

<script>
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