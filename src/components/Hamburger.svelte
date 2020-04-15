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

<div>
	<button>
		<img src="/images/hamburger.svg" alt="Menu trigger">
	</button>
</div>