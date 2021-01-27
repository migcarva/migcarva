<svelte:head>
	<title>migcarva.</title>
</svelte:head>

<div class="container">
	<Logo invert={false} />
	<section id="hero">
		<IntersectableTransition>
			<h2>
				I'm Miguel Carvalho<br>
				<span>— Perpetually curious and forever learning</span>
			</h2>
		</IntersectableTransition>
	</section>

	{#if showScrollText}
		<div class="scroll">
			<p in:fly="{{ y: -64, delay: 1024, duration: 1280 }}" out:fade="{{ duration: 1280, delay: 0 }}">
				scroll down
			</p>
		</div>
	{/if}

	<section id="about">
		<IntersectableTransition anchor='#about' threshold={.5}>
			<h2>
				A frontend developer from Lisbon<br>
				<span>— I enjoy simple, concise and readable code</span>
			</h2>
		</IntersectableTransition>
		<div class="row">
			<div class="col-2">
				<IntersectableTransition anchor='#about' threshold={.75}>
					<h3>About me</h3>
				</IntersectableTransition>
			</div>
			<div class="col-5">
				<IntersectableTransition anchor='#about' threshold={.75} options={{ delay: 256 }}>
					<p>
						I started doing frontend development a long time ago, when it was my hobby and I was studying to become an architect. I spend a lot of my time programming. Not just for work, but as a general hobby. I have a strong passion for learning new things, and I’m always taking time out of my day to pick up something new.
					</p>
				</IntersectableTransition>
			</div>
			<div class="col-5">
				<IntersectableTransition anchor='#about' threshold={.75} options={{ delay: 384 }}>
					<p>
						I'm currently working as an agile engineer at <a href="https://www.iammoneysmart.com/">IAmMoney</a>, building a new kind of banking experience. <strike>I spent most of my time reviewing code, mentoring younger developers and chilling out in the caffetaria.</strike> I spent most of my time reviewing code, mentoring younger developers and chilling out with my family.
					</p>
				</IntersectableTransition>
			</div>
		</div>
		<ActionLink href="/about" anchor="#about" threshold={.75}>
			Discover more
		</ActionLink>
	</section>

	<WorksList isSelected works={selectedWorks} />

	<div class="hidden">
		<a href="/about">visit the about page</a>
		<a href="/blog">visit the blog page</a>
	</div>
</div>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`works.json`).then(r => r.json()).then(works => {
			return { works };
		});
	}
</script>

<script>
	import { fade, fly } from 'svelte/transition';
	import Logo from '../components/Logo.svelte';
	import WorksList from '../components/WorksList.svelte';
	import ActionLink from '../components/ActionLink.svelte';
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';

	// import { v4 as uuidv4 } from 'uuid';
	// import { Mixpanel } from '../mixpanel.js'; 

	// Mixpanel.track('Homepage hit');
	// Mixpanel.track("Video play", {"genre": "hip-hop", "duration in seconds": 42});

	// const USER_ID = uuidv4();
	// Mixpanel.identify(USER_ID);

	// Mixpanel.people.set({
	// 	"USER_ID": USER_ID,    // use human-readable names
	// });

  export let works;

	let showScrollText = false;

	function toggleScrollText() {
	  showScrollText = !showScrollText;
	}

	function animateScrollText() {
		setTimeout(() => {
		  toggleScrollText();
	  }, 1024 * 3);
	}

	setTimeout(() => {
	  toggleScrollText();
	  animateScrollText();
	}, 1024);

	let selectedWorks = works.filter(work => work.isSelected);
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
