<svelte:head>
	<title>migcarva. Welcome</title>
</svelte:head>

<section>
	<Logo />
	<Title {...heroTitle} />
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section>
	<Logo />
	<Title {...heroTitle} />
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<script>
	import Title from './Title.svelte';
	import Logo from './Logo.svelte';

	let heroTitle = {
		main: "I'm Miguel Carvalho",
		lead: "I like it simple, clean and straightforward",
		isHero: true,
	}
	let aboutTitle = {
		main: "I'm Miguel Carvalho",
		lead: "I like it simple, clean and straightforward",
		isHero: true,
	}
</script>

<style>
	section {
		height: 100vh;
		margin-top: 0;
		padding-top: 50px;
		position: relative;
	}
	@media (max-width: 767px) {
		section {
			padding-top: 20px;
		}
	}
</style>
