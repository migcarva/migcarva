<svelte:head>
	<title>migcarva. about</title>
</svelte:head>

<div class="container">
	<Logo invert={false} />
	<section id="intro">
		<IntersectableTransition>
			<h2>
				About me<br>
				<span>— Past, present and future</span>
			</h2>
		</IntersectableTransition>
		<IntersectableTransition options={{ x: 1024, y: 0, duration: 2048, delay: 256}}>
			<picture>
					<source media="(min-width: 1024px)"
						sizes="100vw"
						srcset="images/about_cover_m.webp 1024w,
                  	images/about_cover.webp 1200w">
					<img src="images/about_cover.jpg" alt="Miguel Carvalho in the nature"
							sizes="100vw"
							srcset="images/about_cover_s.jpg 480w,
											images/about_cover_m.jpg 1024w,
											images/about_cover.jpg 1200w">
			</picture>
		</IntersectableTransition>
		<!-- <a class="freccia" href="#list"></a> -->
	</section>

	<section id="history">
		<IntersectableTransition anchor="#history" threshold={.5}>
			<h2>
				Once an architect<br>
				<span>— Now a virtual space architect</span>
			</h2>
		</IntersectableTransition>
		<div class="row">
			<div class="col-2">
				<IntersectableTransition anchor='#history' threshold={.5} options={{ delay: 256 }}>
					<h3>My history</h3>
				</IntersectableTransition>
			</div>
			<div class="col-8">
				<IntersectableTransition anchor='#history' threshold={.5} options={{ delay: 512 }}>
					<p>
						I started doing frontend development a long time ago, when it was my hobby and I was studying to become an architect. After 2014 I made a shift in my career and entered the entrepreneurial world. I was trying to build a SaaS logistics startup, with 2 other friends. I was focused on the business and financial plans while also developing the webapp frontend architecture.
					</p>
					<p>
						In the end, the startup didn't work, mainly because of timming, but I figured out that I could had a career as a developer, just need some more fundamental knowledge. That's when I entered <a rel="external" href="https://www.academiadecodigo.org/">Academia de Código</a>, a Java and Javascript Bootcamp and sky rocketed my personal growth.
					</p>
					<p>
						I've been working in all kind of companies ever since. <a rel="external" href="https://eae.pt/">East Atlantic Engineering</a> is an portuguese agency, with both local portuguese clients and internacional clients. <a rel="external" href="https://brpx.com/">Bright Pixel</a> is a very special company. A group of very experienced builders, creative thinkers and investors. With a big fund to invest in startups while helping them with technical knowledge, using in house talent. <a rel="external" href="https://unbabel.com/">Unbabel</a> is a portuguese startup, in it's way to unicorn level, trying to 'create universal understanding'.
					</p>
					<p>
						I'm currently working at <a rel="external" href="https://www.iammoneysmart.com/">IAmMoney</a> building new banking solutions for the new age. As part of it's inital team, I'm thrilled to help develop the inital foundation of a big list of products.
					</p>
				</IntersectableTransition>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<ActionLink href="/works" anchor="#history" threshold={.75}>
					Discover my work
				</ActionLink>
			</div>
		</div>
	</section>

	<section id="expertise">
		<IntersectableTransition anchor='#expertise' threshold={.5}>
			<h2>
				Diverse Expertise<br>
				<span>— What I bring to a team</span>
			</h2>
		</IntersectableTransition>
			<div class="row">
				<div class="col-2">
					<IntersectableTransition anchor='#expertise' threshold={.5} options={{ delay: 0 }}>
						<h3>I'm good at</h3>
					</IntersectableTransition>
				</div>
				<div class="col-5">
					<IntersectableTransition anchor='#expertise' threshold={.65} options={{ delay: 256 }}>
						<h3>Product design</h3>
						<p>
							Whether it's an online platform, a mobile app, or a project that leverages augmented reality or artificial intelligence, I'll help you create your product at all stages.
						</p>
					</IntersectableTransition>
				</div>
				<div class="col-5">
					<IntersectableTransition  anchor='#expertise' threshold={.65} options={{ delay: 256 * 1 }}>
						<h3>Product development</h3>
						<p>
							I have been doing software architecture, mainly frontend, for a long time. I can help structuring an webstie, app or webapp in a way it's robust, scalable and optimized.
						</p>
					</IntersectableTransition>
				</div>
			</div>
			<div class="row">
				<div class="col-2"></div>
				<div class="col-5">
					<IntersectableTransition  anchor='#expertise' threshold={.65} options={{ delay: 256 * 2 }}>
						<h3>Mentoring</h3>
						<p>
							I was a educational tutor for half my life. I think it's one of my main soft skills, to pass knowledge and teach others. I love to mentor and learn with others.
						</p>
					</IntersectableTransition>
				</div>
				<div class="col-5">
					<IntersectableTransition  anchor='#expertise' threshold={.65} options={{ delay: 256 * 3 }}>
						<h3>Management</h3>
						<p>
							Organization. Processes. I can't live without them and I need to structure my work in other to succeed. I help my teams automate, centralize knowledge and reduze inefficiencies.
						</p>
					</IntersectableTransition>
				</div>
			</div>
			<ActionLink href="/blog" anchor="#expertise" threshold={.65}>
				Discover my ideas
			</ActionLink>
	</section>

	<section id="skills">
		<IntersectableTransition anchor='#skills'>
			<h2>
				Tools of the craftsman<br>
				<span>— What I use to build the web</span>
			</h2>
		</IntersectableTransition>

		<IntersectableTransition anchor='#skills' threshold={.3} options={{ delay: 256 }}>
			<div class="row">
				<div class="col-2">
						<h3>Languages</h3>
				</div>
				<div class="col-4">
					<ul>
						<li>Javascript - ES.Next</li>
						<li>Javascript - Node.js</li>
					</ul>
				</div>
				<div class="col-4">
					<ul>
						<li>Html 5</li>
						<li>CSS3, SASS, PostCSS</li>
					</ul>
				</div>
			</div>
		</IntersectableTransition>

		<IntersectableTransition anchor='#skills' threshold={.3} options={{ delay: 256 * 2 }}>
			<div class="row">
				<div class="col-2">
					<h3>MV frameworks</h3>
				</div>
				<div class="col-4">
					<ul>
						<li>React</li>
						<li>Svelte</li>
						<li>Single SPA</li>
					</ul>
				</div>
				<div class="col-4">
					<ul>
						<li>Vue.js</li>
						<li>jQuery</li>
						<li>Vanila.js ;)</li>
					</ul>
				</div>
			</div>
		</IntersectableTransition>

		<IntersectableTransition anchor='#skills' threshold={.3} options={{ delay: 256 * 3 }}>
			<div class="row">
				<div class="col-2">
					<h3>JS Libraries</h3>
				</div>
				<div class="col-4">
					<ul>
						<li>Paper.js</li>
						<li>GreenSock GSAP</li>
						<li>Styled Components</li>
					</ul>
				</div>
				<div class="col-4">
					<ul>
						<li>Anime.js</li>
						<li>Scroll Magic</li>
						<li>React 360</li>
					</ul>
				</div>
			</div>
		</IntersectableTransition>

		<IntersectableTransition anchor='#skills' threshold={.3} options={{ delay: 256 * 4 }}>
			<div class="row">
				<div class="col-2">
					<h3>State Managers</h3>
				</div>
				<div class="col-4">
					<ul>
						<li>Redux</li>
						<li>Vuex</li>
						<li>Immutable.js</li>
					</ul>
				</div>
				<div class="col-4">
					<ul>
						<li>RxJS</li>
						<li>Redux Saga</li>
						<li>Immer.js</li>
					</ul>
				</div>
			</div>
		</IntersectableTransition>

		<IntersectableTransition anchor='#skills' threshold={.3} options={{ delay: 256 * 5 }}>
			<div class="row">
				<div class="col-2">
					<h3>Tools</h3>
				</div>
				<div class="col-4">
					<ul>
						<li>Webpack</li>
						<li>Rollup</li>
						<li>Grunt</li>
					</ul>
				</div>
				<div class="col-4">
					<ul>
						<li>Parcel</li>
						<li>Gulp</li>
					</ul>
				</div>
			</div>
		</IntersectableTransition>

		<IntersectableTransition anchor='#skills' threshold={.3} options={{ delay: 256 * 10 }}>
			<div class="row">
				<div class="col-2">
				</div>
				<div class="col-8">
					<p>And much more I've used or will!</p>
				</div>
			</div>
		</IntersectableTransition>
	</section>
</div>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	import Logo from '../components/Logo.svelte';
	import ActionLink from '../components/ActionLink.svelte';

	// import mixpanel from 'mixpanel-browser';
	// mixpanel.track("About page");
	
</script>

<style lang="scss">
	section {
		padding-top: 25vh;
	}
	#intro {
		position: relative;

		img {
			max-height: 50vh;
			width: 90vw;
    	object-fit: cover;
		}
	}

	#history {
		p > a {
			position: relative;
		}
	}

	#skills {
		.row {
    	margin-bottom: 2rem;
		}
	}
</style>