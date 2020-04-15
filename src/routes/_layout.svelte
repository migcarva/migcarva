<script>
	import Menu from '../components/Menu.svelte';
	import Hamburger from '../components/Hamburger.svelte';
	import LogoVertical from '../components/LogoVertical.svelte';

	export let segment;
</script>

<style>
	main {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}
	@media (min-width: 576px) {
		main {
			max-width: 540px;
		}
	}
	@media (min-width: 768px) {
		main {
			max-width: 720px;
		}
	}
	@media (min-width: 992px) {
		main {
			max-width: 960px;
		}
	}
	@media (min-width: 1200px) {
		main {
				max-width: 1140px;
		}
	}
</style>

<Menu {segment}/>

<main>
	<Hamburger />
	<LogoVertical />
	<slot></slot>
</main>