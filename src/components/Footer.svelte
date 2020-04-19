<svelte:window bind:scrollY={y}/>

<footer>
	<FlyUp {...flyUps('footer', 'h2')}>
		<h2>
			Want to get in touch?<br>
			<span>Use my email<br><a href="mailto:info@migcarva.com">info@migcarva</a></span>
		</h2>
	</FlyUp>
	<SocialLinks />
</footer>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';
	import SocialLinks from './SocialLinks.svelte';
	const links = [
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/migcarva',
		},
		{
			name: 'Github',
			url: 'https://www.Github.com/migcarva',
		},
		{
			name: 'Dribble',
			url: 'https://dribbble.com/migcarva',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/migcarva/',
		},
	];

	let y;
	let year = new Date().getFullYear();

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			footer: {
				h2: {
					top: -48,
					options: { y: 128, duration: 1280, delay: 256 },
				},
				h3: {
					top: -48,
					options: { y: 128, duration: 1280, delay: 256 },
				},
				li: {
					top: -48,
					options: { x: 256, duration: 1280, delay: 256 + 128 * (i + 1) },
				},
			}
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;
</script>

<style lang="scss">
	footer {
		padding: 8em 0 6em;
		@media (min-width: 375px) {
			padding: 6em 0;
		}
		@media (min-width: 768px) {
			padding: var(--sections-bottom-margin) 0 calc(var(--sections-bottom-margin) / 4);
		}

		h2 {
			padding-top: 0;
		}
	}
</style>
