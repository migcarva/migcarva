<footer id="contact">
	<h2>{@html cTitle.title}<br><span>{@html cTitle.lead}</span></h2>
	<div class="row">
		<Column size="4">
			<h3>On the interweb</h3>
		</Column>
		<Column size="8">
			<ul>
				{#each links as link}
					<li>
						<a class={link.name.toLowerCase()} href={link.url} target="_blank">{link.name}</a>
						<span>/</span>
					</li>
				{/each}
			</ul>
		</Column>
	</div>
	<h4 class="footer">© {year} migcarva.com</h4>
</footer>

<script>
	import Column from './Column.svelte';

	let cTitle = {
		title: "That’s all folks.<br>Let’s work together.",
		lead: 'Please email <br><a href="mailto:info@migcarva.com">info@migcarva.com</a>',
	}

	let links = [
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

	let year = new Date().getFullYear();
</script>

<style lang="scss">
	#contact {
		margin-top: 240px;

		@media (max-width: 767px) {
			margin-top: 160px;
		}

		h2 {
			padding-top: 0;
		}

		h3 {
			padding-top: 4px;
		}

		ul {

			li {
				display: inline;
				font-size: 18px;

				span {
					color: #DBDBDB;
				}
			}
		}
	}

	h4 {
		font-family: var(--font);
		font-weight: medium;
		margin-top: 100px;
		margin-bottom: 40px;
		font-size: 14px;
		font-weight: 400;
		@media (max-width: 767px) {
			font-size: 11px;
		}
	}


</style>
