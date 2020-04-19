<svelte:head>
	<title>migcarva. about</title>
</svelte:head>

<section id="intro">
	<FlyUp {...flyUps('intro', 'h2')}>
		<h2>
			About me<br>
			<span>— Past, present and future</span>
		</h2>
	</FlyUp>
	<FlyUp {...flyUps('intro', 'img')}>
		<img src="images/about_cover.png" alt="">
	</FlyUp>
	<!-- <a class="freccia" href="#list"></a> -->
</section>

<section id="history">
	<FlyUp {...flyUps('history', 'h2')}>
		<h2>
			Once an architect<br>
			<span>— Now a virtual space architect</span>
		</h2>
	</FlyUp>
	<div class="row 5a justify-content-center">
		<div class="col-2">
			<FlyUp  {...flyUps('history', 'h3')}>
				<h3>My history</h3>
			</FlyUp>
		</div>
		<div class="col-8">
			<FlyUp {...flyUps('history', 'p')}>
				<p>
					I started doing frontend development a long time ago, when it was my hobby and I was studying to become an architect. After 2014 I made a shift in my career and entered the entrepreneurial world. I was trying to build a SaaS logistics startup, with 2 other friends. I was focused on the business and financial plans while also developing the webapp frontend architecture.
				</p>
				<p>
					In the end, the startup didn't work, mainly because of timming, but I figured out that I could had a career as a developer, just need some more fundamental knowledge. That's when I entered <a href="https://www.academiadecodigo.org/">Academira de Código</a>, a Java and Javascript Bootcamp and sky rocketed my personal growth.
				</p>
				<p>
					I've been working in all kind of companies ever since. <a href="https://eae.pt/">East Atlantic Engineering</a> is an portuguese agency, with both local portuguese clients and internacional clients. <a href="https://brpx.com/">Bright Pixel</a> is a very special company. A group of very experienced builders, creative thinkers and investors. With a big fund to invest in startups while helping them with technical knowledge, using in house talent. <a href="https://unbabel.com/">Unbabel</a> is a portuguese startup, in it's way to unicorn level, trying to 'create universal understanding'.
				</p>
			</FlyUp>
		</div>
	</div>
	<FlyUp {...flyUps('history', 'a')}>
		<a class="action" href="/works">Discover my work</a>
	</FlyUp>
</section>

<section id="expertise">
	<FlyUp {...flyUps('expertise', 'h2')}>
		<h2>
			Diverse Expertise<br>
			<span>— What I bring to a team</span>
		</h2>
	</FlyUp>
		<div class="row 5a justify-content-center">
			<div class="col-2">
				<FlyUp  {...flyUps('expertise', 'h3')}>
					<h3>Im an expert in</h3>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp {...flyUps('expertise', 'p1')}>
					<h3>Product design</h3>
					<p>
						Whether it's an online platform, a mobile app, or a project that leverages augmented reality or artificial intelligence, I'll help you create your product at all stages.
					</p>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp {...flyUps('expertise', 'p1')}>
					<h3>Product development</h3>
					<p>
						I have been doing software architecture, mainly frontend, for a long time. I can help structuring an webstie, app or webapp in a way it's robust, scalable and optimized.
					</p>
				</FlyUp>
			</div>
		</div>
		<div class="row 5a justify-content-center">
			<div class="col-2"></div>
			<div class="col-5">
				<FlyUp {...flyUps('expertise', 'p1')}>
					<h3>Mentoring</h3>
					<p>
						I was a educational tutor for half my life. I think it's one of my main soft skills, to pass knowledge and teach others. I love to mentor and learn with others.
					</p>
				</FlyUp>
			</div>
			<div class="col-5">
				<FlyUp {...flyUps('expertise', 'p1')}>
					<h3>Management</h3>
					<p>
						Organization. Processes. I can't live without them and I need to structure my work in other to succeed. I help my teams automate, centralize knowledge and reduze inefficiencies.
					</p>
				</FlyUp>
			</div>
		</div>
</section>

<section id="skills">
	<FlyUp {...flyUps('skills', 'h2')}>
		<h2>
			Tools of the craftsman<br>
			<span>— What I use to build the web</span>
		</h2>
	</FlyUp>

	<div class="row 5a justify-content-center">
		<div class="col-2">
			<FlyUp  {...flyUps('skills', 'h3')}>
				<h3>Languages</h3>
			</FlyUp>
		</div>
		<div class="col-5">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Javascript - ES.Next</li>
					<li>Javascript - Node.js</li>
				</ul>
			</FlyUp>
		</div>
		<div class="col-5">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Html 5</li>
					<li>CSS3, SASS, PostCSS</li>
				</ul>
			</FlyUp>
		</div>
	</div>

	<div class="row 5a justify-content-center">
		<div class="col-2">
			<FlyUp  {...flyUps('skills', 'h3')}>
				<h3>MV frameworks</h3>
			</FlyUp>
		</div>
		<div class="col-5">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>React</li>
					<li>Svelte</li>
					<li>Single SPA</li>
				</ul>
			</FlyUp>
		</div>
		<div class="col-5">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Vue.js</li>
					<li>jQuery</li>
					<li>Vanila.js ;)</li>
				</ul>
			</FlyUp>
		</div>
	</div>

	<div class="row 5a justify-content-center">
		<div class="col-2">
			<FlyUp  {...flyUps('skills', 'h3')}>
				<h3>JS Libraries</h3>
			</FlyUp>
		</div>
		<div class="col-4">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Paper.js</li>
					<li>GreenSock GSAP</li>
					<li>Styled Components</li>
				</ul>
			</FlyUp>
		</div>
		<div class="col-4">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Anime.js</li>
					<li>Scroll Magic</li>
					<li>React 360</li>
				</ul>
			</FlyUp>
		</div>
	</div>

	<div class="row 5a justify-content-center">
		<div class="col-2">
			<FlyUp  {...flyUps('skills', 'h3')}>
				<h3>State Managers</h3>
			</FlyUp>
		</div>
		<div class="col-4">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Redux</li>
					<li>Vuex</li>
					<li>Immutable.js</li>
				</ul>
			</FlyUp>
		</div>
		<div class="col-4">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>RxJS</li>
					<li>Redux Saga</li>
					<li>Immer.js</li>
				</ul>
			</FlyUp>
		</div>
	</div>

	<div class="row 5a justify-content-center">
		<div class="col-2">
			<FlyUp  {...flyUps('skills', 'h3')}>
				<h3>Tools</h3>
			</FlyUp>
		</div>
		<div class="col-4">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Webpack</li>
					<li>Rollup</li>
					<li>Grunt</li>
				</ul>
			</FlyUp>
		</div>
		<div class="col-4">
			<FlyUp {...flyUps('skills', 'p1')}>
				<ul>
					<li>Parcel</li>
					<li>Gulp</li>
				</ul>
			</FlyUp>
		</div>
	</div>

	<div class="row 5a justify-content-center">
		<div class="col-2">
		</div>
		<div class="col-8">
			<FlyUp {...flyUps('skills', 'p1')}>
				<p>And much more I've used or will!</p>
			</FlyUp>
		</div>
	</div>
</section>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			intro: {
				h2: {
					top: 0,
					options: { y: 128, duration: 1280, delay: 0 },
				},
				img: {
					top: 0,
					options: { x: 1280, duration: 2560, delay: 256 },
				},
			},
			history: {
				h2: {
					top: 0,
					options: { y: 128, duration: 1280, delay: 0 },
				},
				h3: {
					top: -512,
					options: { y: 128, duration: 1280, delay: 0 },
				},
				p: {
					top: -512,
					options: { y: 256, duration: 1280, delay: 0 },
				},
				a: {
					top: -512,
					options: { x: -256, duration: 1280, delay: 0 },
				}
			},
			expertise: {
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
			},
			skills: {
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
			}
		}

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;
</script>

<style lang="scss">
	#intro {
		position: relative;

		h2 {
			margin-top: 30vh;
		}

		img {
			max-height: 50vh;
		}
	}

	#skills {
		.row {
    	margin-bottom: 2rem;
		}
	}
</style>