<svelte:head>
	<title>migcarva.</title>
</svelte:head>

<section id="hero">
	<FlyUp {...flyUps('hero', 'h2')}>
		<h2>
			I'm Miguel Carvalho<br>
			<span>— Perpetually curious and forever learning</span>
		</h2>
	</FlyUp>
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section id="about">
	<FlyUp {...flyUps('about', 'h2')}>
		<h2>
			A frontend developer from Lisbon<br>
			<span>— I enjoy simple, concise and readable code</span>
		</h2>
	</FlyUp>
		<div class="row 5a justify-content-center">
			<div class="col-2">
				<FlyUp  {...flyUps('about', 'h3')}>
					<h3>About me</h3>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp {...flyUps('about', 'p1')}>
					<p>
						I started doing frontend development a long time ago, when it was my hobby and I was studying to become an architect. I spend a lot of my time programming. Not just for work, but as a general hobby. I have a strong passion for learning new things, and I’m always taking time out of my day to pick up something new.
					</p>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp {...flyUps('about', 'p2')}>
					<p>
						I'm currently working as a senior frontend developer at <a href="https://unbabel.com">Unbabel</a>, where I'm part of the Language Operations Team, a crucial team supporting Unbabel's clients. I spent most of my time reviewing code, mentoring younger developers and chilling out in the caffetaria.
					</p>
				</FlyUp>
			</div>
		</div>
	<FlyUp {...flyUps('about', 'a')}>
		<a class="action" href="/about">Discover more</a>
	</FlyUp>
</section>

<WorksList />

<script>
	import Logo from '../components/Logo.svelte';
	import WorksList from '../components/WorksList.svelte';
	import FlyUp from '../helpers/FlyUp.svelte';

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			hero: {
				h2: {
					top: 0,
					options: { y: 128, duration: 1280, delay: 256 },
				},
			},
			about: {
				h2: {
					top: -128,
					options: { y: 128, duration: 1280, delay: 512 },
				},
				h3: {
					top: -192,
					options: { y: 128, duration: 1280, delay: 0 },
				},
				p1: {
					top: -192,
					options: { y: 256, duration: 1280, delay: 0 },
				},
				p2: {
					top: -256,
					options: { y: 256, duration: 1280, delay: 0 },
				},
				a: {
					top: -256,
					options: { x: -256, duration: 1280, delay: 0 },
				}
			}
		}

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;

</script>

<style lang="scss">
	#hero {
		position: relative;
		padding-top: 0;
		min-height: 100vh;

		h2 {
			margin-bottom: 0;
		}
	}

	#about {
		> div {
    	margin-bottom: 10px;
		}
	}
</style>
