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
		<Subtitle col={2}>About me</Subtitle>
		<Paragraph col={5}>
			We are a talented and ambitious young team, able to solve complex problems in a brilliant and innovative way. We explore new technologies with enthusiasm and passion, always pushing ourselves further. We take care of every detail, even the smallest.
		</Paragraph>
		<Paragraph col={5}>
			Our goal is to create and improve digital products, ensuring maximum usability and crafting an essential and orderly design. Simplicity is our strength: we highlight what really matters and we are really good at it.
		</Paragraph>
		<a class="link" href="../en/about.html">Discover more</a>
	</div>
</section>

<script>
	import Logo from '../components/Logo.svelte';
	import Title from '../components/Title.svelte';
	import Subtitle from '../components/Subtitle.svelte';
	import Paragraph from '../components/Paragraph.svelte';

	let heroTitle = {
		title: "I'm Miguel Carvalho",
		lead: "— I like all things simple, clean and straightforward",
		isHero: true,
	}

	let aboutTitle = {
		title: "Frontend developer from Lisbon",
		lead: "Perpetually curious and forever learning",
	}
</script>

<style>
	section {
		margin-top: 200px;
		padding-top: 50px;
		position: relative;
	}

	#hero {
		margin-top: 0;
		height: 100vh;
	}

	#about {
		margin-top: 20%;
	}

	@media (max-width: 767px) {
		#hero {
			padding-top: 20px;
		}

		#about{
			margin-top: 0;
		}
	}
</style>
