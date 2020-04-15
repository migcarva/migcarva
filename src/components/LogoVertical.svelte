<script>
</script>

<style>
	div {
		font-family: HelvetiaBold, "Arial", sans-serif;
		position: fixed;
		z-index: 10;
		margin: 0 0 0 0;
		padding: 0;
		text-align: right;
		top: 80px;
		left: -28px;
		transform: rotate(-90deg) translate(0, 0);
		transition: transform 0.3s cubic-bezier(0.6, 0.2, 0.1, 1);
	}

	div a.name {
    font-family: HelvetiaBold, "Arial", sans-serif;
    font-size: 18px;
	}

	div a.contact span {
		font-style: italic;
	}

	div.hidden {
		transform: rotate(-90deg) translate(0, -100px);
		transition: transform 0.2s cubic-bezier(0.6, 0.2, 0.1, 1);
	}

	div span {
			color: #b0b0b0;
	}

	div:hover{
		transform: rotate(-90deg) translate(0, 0) scale(0.95);
		transition: transform 0.2s ease-out;
	}

	@media only screen and (max-height: 500px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
		div {
			left: -11px;
		}
		div a.name {
			padding-left: env(safe-area-inset-left);
		}
	}
</style>

<div id="page-title" class="home">
	<a href="/" class="name">mig<span>carva</span></a>
</div>