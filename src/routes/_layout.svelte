<!-- <Menu {segment}/> -->
<main>
	<Hamburger />
	<LogoVertical />
	<slot></slot>
	<Footer />
</main>

<script>
	// import Menu from '../components/Menu.svelte';
	import Hamburger from '../components/Hamburger.svelte';
	import LogoVertical from '../components/LogoVertical.svelte';
	import Footer from '../components/Footer.svelte';

	// export let segment;
</script>

<style>
	main {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	@media (max-width: 576px) and (orientation: portrait) {
		main {
			width: 90%;
			padding-left: 10%;
		}
	}

	@media only screen
	and (max-width: 320px)
	and (max-width: 568px)
	and (-webkit-min-device-pixel-ratio: 2) {
		main {
			width: 85%;
			padding-left: 15%;
		}
	}

	@media only screen
  and (min-width: 375px)
  and (max-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
		main {
			width: 90%;
			padding-left: 10%;
		}
	}

	@media only screen
  and (min-width: 768px)
  and (max-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {
		main {
			width: 90%;
			padding-left: 10%;
		}
	}
</style>