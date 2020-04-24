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
		margin-top: 6rem;
		margin-bottom: 2rem;
		@media (min-width: 375px) {
			margin-top: 10rem;
		}
		@media (min-width: 48em) {
			--container-padding: var(--container-padding-laptop);
		}


		h2 {
			padding-top: 0;
		}
	}
</style>
