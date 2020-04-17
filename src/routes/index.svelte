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
		<div class="col-2">
			<h3>About me</h3>
		</div>
		<div class="col-5">
			<p>
				We are a talented and ambitious young team, able to solve complex problems in a brilliant and innovative way. We explore new technologies with enthusiasm and passion, always pushing ourselves further. We take care of every detail, even the smallest.
			</p>
		</div>
		<div class="col-5">
			<p>
				Our goal is to create and improve digital products, ensuring maximum usability and crafting an essential and orderly design. Simplicity is our strength: we highlight what really matters and we are really good at it.
			</p>
		</div>
	</div>
	<a class="action" href="../en/about.html">Discover more</a>
</section>

<WorksList />

<script>
	import Logo from '../components/Logo.svelte';
	import WorksList from '../components/WorksList.svelte';

	let hTitle = {
		title: "I'm Miguel Carvalho",
		lead: "— I like all things simple, clean and straightforward",
	}

	let aTitle = {
		title: "Frontend developer from Lisbon",
		lead: "— Perpetually curious and forever learning",
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

		> div {
			margin-top: 60px;
    	margin-bottom: 10px;
		}
	}
</style>
