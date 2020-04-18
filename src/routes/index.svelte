<svelte:head>
	<title>migcarva. Welcome</title>
</svelte:head>

<section id="hero">
	<!-- <FlyUp top={0} options={{ x: 200, duration: 2000, delay: 300 }}> -->
		<Logo />
	<!-- </FlyUp> -->
	<FlyUp top={0} options={{ y: 128, duration: 1280, delay: 256 }}>
		<h2>
			I'm Miguel Carvalho<br>
			<span>— Perpetually curious and forever learning</span>
		</h2>
	</FlyUp>
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section id="about">
	<FlyUp top={-256} options={{ y: 128, duration: 1280, delay: 128 }}>
		<h2>
			A frontend developer from Lisbon<br>
			<span>— I enjoy simple, concise and readable code</span>
		</h2>
	</FlyUp>
		<div class="row 5a justify-content-center">
			<div class="col-2">
				<FlyUp top={-320} options={{ y: 128, duration: 1280, delay: 256 }}>
					<h3>About me</h3>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp top={-320} options={{ y: 128, duration: 1280, delay: 384 }}>
					<p>
						I started doing frontend development a long time ago, when it was my hobby and I was studying to become an architect. I spend a lot of my time programming. Not just for work, but as a general hobby. I have a strong passion for learning new things, and I’m always taking time out of my day to pick up something new.
					</p>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp top={-320} options={{ y: 128, duration: 1280, delay: 512 }}>
					<p>
						I'm currently workin as a Senior Frontend at Unbabel, where I'm part of the Language Operations Team, a crucial team supporting Unbabel's clients. I spent most of my time reviewing code, mentoring younger developers and chilling out in the caffetaria.
					</p>
				</FlyUp>
			</div>
		</div>
	<FlyUp top={-256} options={{ y: 128, duration: 1280, delay: 512 }}>
		<a class="action" href="../en/about.html">Discover more</a>
	</FlyUp>
</section>

<WorksList />

<script>
	import Logo from '../components/Logo.svelte';
	import WorksList from '../components/WorksList.svelte';
	import FlyUp from '../helpers/FlyUp.svelte';

	const aboutTitleFly = {
		top: -400,
		options: { y: 500, duration: 1280, delay: 300 }
	};

	const aboutTextFly = {
		top: -400,
		options: { y: 500, duration: 1280, delay: 300 }
	};

</script>

<style lang="scss">
	#hero {
		margin-top: 0;
		min-height: 100vh;
		@media (max-width: 767px) {
			padding-top: 1.25em;
		}

		h2 {
			margin-top: 40vh;
		}
	}

	#about {
		margin-top: calc(var(--sections-top-margin) / 2);
		@media (max-width: 767px) {
			margin-top: 0;
		}

		> div {
    	margin-bottom: 10px;
		}
	}
</style>
