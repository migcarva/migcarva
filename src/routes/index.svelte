<svelte:head>
	<title>migcarva. Welcome</title>
</svelte:head>

<section id="hero">
	<Logo />
	<h2>{@html hTitle.title}<br><span>{@html hTitle.lead}</span></h2>
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section id="about">
	<h2>{@html aTitle.title}<br><span>{@html aTitle.lead}</span></h2>
	<div class="row qa justify-content-center">
		<Subtitle col={2}>About me</Subtitle>
		<Paragraph col={5}>
			We are a talented and ambitious young team, able to solve complex problems in a brilliant and innovative way. We explore new technologies with enthusiasm and passion, always pushing ourselves further. We take care of every detail, even the smallest.
		</Paragraph>
		<Paragraph col={5}>
			Our goal is to create and improve digital products, ensuring maximum usability and crafting an essential and orderly design. Simplicity is our strength: we highlight what really matters and we are really good at it.
			<a class="link" href="../en/about.html">Discover more</a>
		</Paragraph>
	</div>
</section>

<WorksList />

<section id="contact">
	<h2>{@html cTitle.title}<br><span>{@html cTitle.lead}</span></h2>
</section>

<script>
	import Logo from '../components/Logo.svelte';
	import Subtitle from '../components/Subtitle.svelte';
	import Paragraph from '../components/Paragraph.svelte';

	import WorksList from '../components/WorksList.svelte';

	let hTitle = {
		title: "I'm Miguel Carvalho",
		lead: "— I like all things simple, clean and straightforward",
		isHero: true,
	}

	let aTitle = {
		title: "Frontend developer from Lisbon",
		lead: "— Perpetually curious and forever learning",
	}

	let cTitle = {
		title: "That’s all folks.<br>Let’s work together.",
		lead: 'Please email <br><a href="mailto:info@migcarva.com">info@migcarva.com</a>',
	}
</script>

<style lang="scss">
	#hero {
		margin-top: 0;
		height: 100vh;
		@media (max-width: 767px) {
			padding-top: 20px;
		}

		h2 {
			margin-top: 30vh;
		}
	}

	#about {
		margin-top: 20%;
		@media (max-width: 767px) {
			margin-top: 0;
		}
	}

	#contact {
		margin-top: 240px;
		@media (max-width: 767px) {
			margin-top: 160px;
		}

		h2 {
			padding-top: 0;
		}
	}
</style>
