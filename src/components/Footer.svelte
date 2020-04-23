<footer class="container">
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
		margin-top: 10rem;
		margin-bottom: 2rem;

		@media (min-width: 375px) {
			margin-top: 6rem;
		}
		@media (min-width: 768px) {
			margin: var(--sections-bottom-margin) 10% calc(var(--sections-bottom-margin) / 4);
		}

		h2 {
			padding-top: 0;
		}
	}
</style>
