<div class:isMenu={$menuIsOpen}>
	<IntersectableTransition options={{ delay: $menuIsOpen ? 1024 : 256 }}>
		<h4>{year} | migcarva.com ™</h4>
	</IntersectableTransition>
	{#if !$menuIsOpen}
		<button class="logo" on:click={goToTop}>
			<IntersectableTransition options={{ delay: $menuIsOpen ? 1024 : 256 }}>
				<Icon name="go-up" />
				<div class="top">
					<span>top</span>
				</div>
			</IntersectableTransition>
		</button>
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
			width: 24px;
			height: 24px;
			top: 0;
			right: 0;
			cursor: pointer;

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
				right: 50%;
				opacity: 1;
				transform: translateX(50%);
				transition: opacity .3s ease-in;
				cursor: pointer;

				@media (min-width: 768px)  {
					opacity: 0;
				}
			}
		}

		.logo {
			margin: 0;
			z-index: 100;
		}

		button {
			padding: 0;
		}
	}
</style>
