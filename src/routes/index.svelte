<svelte:head>
	<title>migcarva. Welcome</title>
</svelte:head>

<section id="hero">
	<Logo />
	<Title {...heroTitle} />
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section id="about">
	<Title {...aboutTitle} />
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<script>
	import Title from '../components/Title.svelte';
	import Logo from '../components/Logo.svelte';

	let heroTitle = {
		main: "I'm Miguel Carvalho",
		lead: "I like it simple, clean and straightforward",
		isHero: true,
	}

	let aboutTitle = {
		main: "Frontend developer from Lisbon",
		lead: "Perpetually curious and forever learning",
		isHero: false,
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
