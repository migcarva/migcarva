<svelte:head>
	<title>migcarva. Welcome</title>
</svelte:head>

<section id="hero">
	<Logo />
	<h2>
		I'm Miguel Carvalho<br>
		<span>— Perpetually curious and forever learning</span>
	</h2>
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section id="about">
	<h2>
		Frontend developer from Lisbon<br>
		<span>— I like my code to be simple, readable and optimized</span>
	</h2>
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
</script>

<style lang="scss">
	section:first-of-type {
		margin-top: 0;
		min-height: 100vh;
		@media (max-width: 767px) {
			padding-top: 1.25em;
		}

		h2 {
			margin-top: 40vh;
		}
	}

	section {
		@media (max-width: 767px) {
			margin-top: 0;
		}

		> div {
			margin-top: 60px;
    	margin-bottom: 10px;
		}
	}
</style>
