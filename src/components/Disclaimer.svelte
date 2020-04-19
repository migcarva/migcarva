<div class="{invert ? 'isMenu disclaimer' : 'disclaimer'}">
	<FlyUp {...flyUps('disclaimer', 'h4')}>
		<h4>{year} | migcarva.com ™</h4>
	</FlyUp>
	{#if !invert}
		<div class="logo" on:click={goToTop}>
			<FlyUp {...flyUps('disclaimer', 'logo')}>
				<div class="top">
					<span>go to top</span>
				</div>
				<div class="goUp">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 3L18.9282 10.5H5.0718L12 3Z" fill="#171717"/>
						<path d="M10 10H14V21L10 17V10Z" fill="black"/>
					</svg>
				</div>
			</FlyUp>
		</div>
		{/if}
</div>

<script>
	import FlyUp from '../helpers/FlyUp.svelte';

	export let invert;

	let year = new Date().getFullYear();

	const flyUpsMobile = (section, tag, i) => {
		const flyUps = {
			disclaimer: {
				h4: {
					top: -32,
					options: { y: 128, duration: 1280, delay: (invert ? 1024 : 256) },
				},
				logo: {
					top: -32,
					options: { x: 128, duration: 1280, delay: (invert ? 1024 : 256) },
				}
			}
		};

		return flyUps[section][tag];
	};

	let flyUps = flyUpsMobile;

	function goToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
</script>

<style lang="scss">
	.disclaimer {
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
