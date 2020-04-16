<section>
	<h1 class="brand">migcarva</h1>
	<Title {...title} />
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<script>
	import Title from './Title.svelte';

	let title = {
		main: "I'm Miguel Carvalho",
		lead: "— I like simple and uncomplicated things",
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