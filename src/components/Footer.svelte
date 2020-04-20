<svelte:window bind:scrollY={y}/>

<footer>
	<IntersectableTransition {...IntersectableTransitions('footer', 'h2')}>
		<h2>
			Want to get in touch?<br>
			<span>Use my email<br><a href="mailto:info@migcarva.com">info@migcarva</a></span>
		</h2>
	</IntersectableTransition>
	<SocialLinks />
</footer>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
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

	const IntersectableTransitionsMobile = (section, tag, i) => {
		const IntersectableTransitions = {
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

		return IntersectableTransitions[section][tag];
	};

	let IntersectableTransitions = IntersectableTransitionsMobile;
</script>

<style lang="scss">
	footer {
		width: 100%;
		padding: 8em 10% 6em 15%;
		@media (min-width: 375px) {
			padding: 6em 0;
			padding-left: 10%;
		}
		@media (min-width: 768px) {
			padding: var(--sections-bottom-margin) 10% calc(var(--sections-bottom-margin) / 4);
		}

		h2 {
			padding-top: 0;
		}
	}
</style>
