<Menu {segment} />
<LogoVertical />
<main>
	<slot></slot>
	<Footer />
</main>

<script>
	import Menu from '../components/Menu.svelte';
	import LogoVertical from '../components/LogoVertical.svelte';
	import Footer from '../components/Footer.svelte';

	let segment;
</script>

<style>
	:global(:root) {
		--black: #171717;
		--grey: #707070;
		--grey-light: #CBCFD3;
		--action: #24C9BA;

		--dribble: #ea4c89;
		--github: #24292e;
		--linkedin: #007bb5;
		--twitter: #55acee;

		--font: 'Raleway', 'Arial', sans-serif;
		--font-base: 1em;
		--font-h2: 2em;
		--font-h3: var(--font-base);
		--font-h4: 0.75em;
		--font-normal: 300;
		--font-medium: 400;
		--font-bold: 600;
		--line-height-small: 1;
		--line-height-base: 1.5;
		--letter-spacing-small: -2px;
		--letter-spacing-base: 0;

		--scale-sm: scale3d(0.98, 0.98, 1);
		--scale-md: scale3d(0.96, 0.96, 1);
		--scale-lg: scale3d(0.90, 0.90, 1);

		--breakpoint-xs: 0;
		--breakpoint-sm: 30em; /*576px*/
		--breakpoint-md: 48em;  /*768px*/
		--breakpoint-lg: 64em;  /*1024px*/
		--breakpoint-xl: 90em;  /*1440px*/

		--ease-in-quart: cubic-bezier(0.5, 0, 0.75, 0);
		--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
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