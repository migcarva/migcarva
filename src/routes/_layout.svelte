<Icons/>
<Menu />
<LogoVertical />
<Logo invert={false} />

<main>
	<slot></slot>
</main>

<Footer />

<script>
	import { stores } from '@sapper/app';
	import { afterUpdate, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Icons from '../components/core/Icons.svelte';
	import Menu from '../components/Menu.svelte';
	import LogoVertical from '../components/LogoVertical.svelte';
	import Logo from '../components/Logo.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
	const { page } = stores();

	const current = writable(null);
	$: $current = segment;

	setContext('page', page);
	setContext('current', current);

	afterUpdate(() => {
		// console.log(segment);
		// console.log($current);
	})
</script>

<style lang="scss">
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
		--font-h4: 0.80em;
		--font-blog-p: 1.3em;
		--font-normal: 300;
		--font-medium: 400;
		--font-bold: 600;
		--font-bolder: 700;
		--line-height-small: 1;
		--line-height-base: 1.5;
		--line-height-big: 1.7;
		--letter-spacing-small: -2px;
		--letter-spacing-base: 0;

		--sections-bottom-margin: 20vh;
		--title-bottom-margin: 3rem;

		--container-padding: 0 15% 0 10%;
		--container-padding-laptop: 0 10%;
		--container-margin: -2rem auto 0;
		--container-margin-laptop: -4rem auto 0;

		--scale-sm: scale3d(0.98, 0.98, 1);
		--scale-md: scale3d(0.96, 0.96, 1);
		--scale-lg: scale3d(0.90, 0.90, 1);

		--breakpoint-sm: 30em; /*576px*/
		--breakpoint-md: 48em;  /*768px*/
		--breakpoint-lg: 64em;  /*1024px*/
		--breakpoint-xl: 90em;  /*1440px*/

		--ease-for-hover: cubic-bezier(.215, .61, .355, 1);
		--ease-in-quart: cubic-bezier(0.5, 0, 0.75, 0);
		--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

		--shadow-smooth: 0 8px 6px -6px var(--grey-light);
	}

	main {
		margin: var(--container-margin);
	}

	@media (min-width: 48em) {
		main {
			margin: var(--container-margin-laptop);
		}
	}
</style>