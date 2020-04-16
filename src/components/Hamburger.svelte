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

<style>
	div {
		position: fixed;
		z-index: 100;
		top: 50%;
		left: 20px;
		transition: transform 0.3s cubic-bezier(0.6, 0.2, 0.1, 1);
	}

	/* div.hidden{
		transform: translate(-100px, 0px);
    transition: transform 0.2s cubic-bezier(0.6, 0.2, 0.1, 1);
	} */

	div:hover{
		transform: scale(0.90);
		transform: scale(0.90);
		transition: transform 0.2s ease-out;
	}

	div button {
		padding: 4px;
		padding-left: 0px;
	}

	@media only screen and (max-height: 500px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
		div {
			padding-left: env(safe-area-inset-left);
		}
	}
</style>