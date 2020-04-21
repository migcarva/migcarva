<div class:isMenu={$menuIsOpen}>
	<IntersectableTransition options={{ delay: $menuIsOpen ? 1024 : 256 }}>
		<h4>{year} | migcarva.com ™</h4>
	</IntersectableTransition>
	{#if !$menuIsOpen}
		<div class="logo">
			<IntersectableTransition options={{ delay: $menuIsOpen ? 1024 : 256 }}>
				<Icon name="go-up" />
				<div class="top" on:click={goToTop}>
					<span>go to top</span>
				</div>
			</IntersectableTransition>
		</div>
		{/if}
</div>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
	import Icon from './core/Icon.svelte';
	import { menuIsOpen } from '../store.js';

	let year = new Date().getFullYear();

	function goToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
</script>

<style lang="scss">
	div {
		display: flex;
		justify-content: space-between;
		margin: 6em 0 0;
		position: relative;

		&.isMenu {
			h4 {
				color: white;
			}
		}

		.top {
			position: absolute;
			margin: 0;
			width: 2em;
			height: 2em;
			top: 0;
			right: 0;

			&:hover {
				span {
					opacity: 1;
				}
			}

			span {
				text-align: right;
				font-size: .75em;
				position: absolute;
				top: -2em;
				right: -64%;
				opacity: 0;
				transition: opacity .3s ease-in;
			}
		}

		.logo {
			margin: 0;
			z-index: 100;
		}
	}
</style>
