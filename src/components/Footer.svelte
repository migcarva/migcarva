<footer>
	<IntersectableTransition options={{delay: 256}}>
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
</script>

<style lang="scss">
	footer {
		width: 100%;
		max-width: var(--breakpoint-xl);
		margin: 0 auto;
		padding: 8em 10% 6em 15%;

		@media (min-width: 375px) {
			padding: 6em 10% 6em 15%;
		}
		@media (min-width: 768px) {
			padding: var(--sections-bottom-margin) 10% calc(var(--sections-bottom-margin) / 4);
		}

		h2 {
			padding-top: 0;
		}
	}
</style>
