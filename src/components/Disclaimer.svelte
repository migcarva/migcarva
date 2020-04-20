<div class:isMenu={$menuIsOpen}>
	<IntersectableTransition options={{ delay: $menuIsOpen ? 1024 : 256 }}>
		<h4>{year} | migcarva.com ™</h4>
	</IntersectableTransition>
	{#if !$menuIsOpen}
		<div class="logo" on:click={goToTop}>
			<IntersectableTransition options={{ delay: $menuIsOpen ? 1024 : 256 }}>
				<div class="top">
					<span>go to top</span>
				</div>
				<div class="goUp">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 3L18.9282 10.5H5.0718L12 3Z" fill="#171717"/>
						<path d="M10 10H14V21L10 17V10Z" fill="black"/>
					</svg>
				</div>
			</IntersectableTransition>
		</div>
		{/if}
</div>

<script>
	import IntersectableTransition from '../helpers/IntersectableTransition.svelte';
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

		.goUp {
			max-width: 1rem;
			margin: 0;
		}
	}
</style>
