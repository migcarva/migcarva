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
</script>

<style>
	:global(:root) {
		--black: black;
		--grey: #171717;
		--action: #24C9BA;

		--dribble: #ea4c89;
		--github: #24292e;
		--linkedin: #007bb5;
		--twitter: #55acee;

		--font: 'Raleway', 'Arial', sans-serif;
		--font-base: 1em;
		--font-normal: 300;
		--font-medium: 400;
		--font-bold: 600;
		--line-height-base: 1.5;
		--line-height-extra: 1.75;

		--scale-sm: 0.98, 0.98, 1;
		--scale-md: 0.96, 0.96, 1;
		--scale-lg: 0.94, 0.94, 1;

		--breakpoint-xs:0;
		--breakpoint-sm:576px;
		--breakpoint-md:768px;
		--breakpoint-lg:992px;
		--breakpoint-xl:1200px;

	}

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