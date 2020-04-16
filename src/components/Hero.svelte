<section>
	<!-- <h1 class="brand">migcarva.</h1> -->
	<Logo />
	<Title {...title} />
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<script>
	import Title from './Title.svelte';
	import Logo from './Logo.svelte';

	let title = {
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