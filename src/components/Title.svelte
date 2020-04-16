<h2 class={isHero && 'isHero'}>
	{main}<br>
	<span>{lead}</span>
</h2>

<script>
	export let main;
	export let lead;
	export let isHero;
</script>

<style>
	h2 {
		padding-top: 40px;
		margin-bottom: 100px;
		font-size: 50px;
		font-family: HelveticaBold, "Arial", sans-serif;
		line-height: 1;
		letter-spacing: -1.5px;
	}

	h2 span {
		color: #CBCFD3;
	}

	h2.isHero {
		margin-top: 30vh;
	}

	@media (max-width: 767px){
		h2 {
			font-size: 28px;
			margin-bottom: 60px;
		}
	}

	@media only screen
  and (max-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
		h2 {
			font-size: 28px;
			margin-bottom: 40px;
		}
	}
</style>