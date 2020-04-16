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
	<div class="row qa justify-content-center">
		<div class="col-md-2 question qanda">
			<h3>About us</h3>
		</div>
		<div class="col-md-5 answer qanda">
			<p>We are a talented and ambitious young team, able to solve complex problems in a brilliant and innovative way. We explore new technologies with enthusiasm and passion, always pushing ourselves further. We take care of every detail, even the smallest.</p>
		</div>
		<div class="col-md-5 answer qanda">
			<p>Our goal is to create and improve digital products, ensuring maximum usability and crafting an essential and orderly design. Simplicity is our strength: we highlight what really matters and we are really good at it.</p>
			<a class="link" href="../en/about.html">Discover more</a>
		</div>
	</div>
</section>

<script>
	import Title from '../components/Title.svelte';
	import Logo from '../components/Logo.svelte';

	let heroTitle = {
		title: "I'm Miguel Carvalho",
		lead: "I like it simple, clean and straightforward",
		isHero: true,
	}

	let aboutTitle = {
		title: "Frontend developer from Lisbon",
		lead: "Perpetually curious and forever learning",
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
