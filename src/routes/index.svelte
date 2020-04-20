<svelte:head>
	<title>migcarva.</title>
</svelte:head>

<section id="hero">
	<IntersectableTransition options={{ y: 128, duration: 1280, delay: 0 }}>
		<h2>
			I'm Miguel Carvalho<br>
			<span>— Perpetually curious and forever learning</span>
		</h2>
	</IntersectableTransition>
</section>

{#if showScrollText}
	<div class="scroll">
		<p in:fly="{{ y: -64, delay: 128, duration: 1280 }}" out:fade="{{ duration: 1280, delay: 0 }}">
			scroll down
		</p>
	</div>
{/if}

<section id="about">
	<IntersectableTransition anchor='#about' threshold={.5} options={{ y: 128, duration: 1280, delay: 0 }}>
		<h2>
			A frontend developer from Lisbon<br>
			<span>— I enjoy simple, concise and readable code</span>
		</h2>
	</IntersectableTransition>
	<div class="row 5a justify-content-center">
		<div class="col-2">
			<IntersectableTransition {...IntersectableTransitions('about', 'h3')}>
				<h3>About me</h3>
			</IntersectableTransition>
		</div>
		<div class="col-5">
			<IntersectableTransition {...IntersectableTransitions('about', 'p1')}>
				<p>
					I started doing frontend development a long time ago, when it was my hobby and I was studying to become an architect. I spend a lot of my time programming. Not just for work, but as a general hobby. I have a strong passion for learning new things, and I’m always taking time out of my day to pick up something new.
				</p>
			</IntersectableTransition>
		</div>
		<div class="col-5">
			<IntersectableTransition {...IntersectableTransitions('about', 'p2')}>
				<p>
					I'm currently working as a senior frontend developer at <a href="https://unbabel.com">Unbabel</a>, where I'm part of the Language Operations Team, a crucial team supporting Unbabel's clients. I spent most of my time reviewing code, mentoring younger developers and chilling out in the caffetaria.
				</p>
			</IntersectableTransition>
		</div>
	</div>
	<ActionLink href="/about" options={IntersectableTransitions('about', 'a')}>Discover more</ActionLink>
</section>

<WorksList />

<script>
	import { fade, fly } from 'svelte/transition';
	import { bounceIn } from 'svelte/easing';
	import Logo from '../components/Logo.svelte';
	import WorksList from '../components/WorksList.svelte';
	import ActionLink from '../components/ActionLink.svelte';
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';

	const IntersectableTransitionsMobile = (section, tag, i) => {
		const IntersectableTransitions = {
			about: {
				h2: {
					anchor: '#about',
					threshold: .5,
					options: { y: 128, duration: 1280, delay: 0 },
				},
				h3: {
					anchor: '#about',
					threshold: .75,
					options: { y: 128, duration: 1280, delay: 0 },
				},
				p1: {
					anchor: '#about',
					threshold: .75,
					options: { y: 128, duration: 1280, delay: 256},
				},
				p2: {
					anchor: '#about',
					threshold: .75,
					options: { y: 128, duration: 1280, delay: 384 },
				},
				a: {
					anchor: '#about',
					threshold: .95,
					options: { duration: 640, delay: 0 },
				}
			}
		}

		return IntersectableTransitions[section][tag];
	};

	let IntersectableTransitions = IntersectableTransitionsMobile;

	let showScrollText = false;

	function toggleScrollText() {
		showScrollText = !showScrollText;
	}

	function animateScrollText() {
		setTimeout(() => {
			toggleScrollText();
		}, 1280);
	}

	setTimeout(() => {
		toggleScrollText();
		animateScrollText();
	}, 512);
</script>

<style lang="scss">
	.scroll {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
		bottom: 1rem;
		left: 0;

		p {
			margin: 0 auto;
			font-size: var(--font-h3);
		}
	}

	section {
		min-height: 100vh;
	}

	#hero {
		position: relative;
		display: flex;
		align-items: center;

		h2 {
			margin-bottom: 0;
		}
	}

	#about {
		padding-top: 25vh;
		> div {
    	margin-bottom: 10px;
		}
	}
</style>
