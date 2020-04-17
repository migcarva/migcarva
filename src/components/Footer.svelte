<footer>
	<h2>
		That’s all folks.<br>Let’s work together.<br>
		<span>Use my email<br><a href="mailto:info@migcarva.com">info@migcarva.com</a></span>
	</h2>
	<div class="row">
		<div class="col-4">
			<h3>On the interweb</h3>
		</div>
		<div class="col-4">
			<ul>
				{#each links as link}
					<li>
						<a class={link.name.toLowerCase()} href={link.url} target="_blank">{link.name}</a>
						<span>/</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<h4 class="footer">{year} | migcarva.com ™</h4>
</footer>

<script>
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

	let year = new Date().getFullYear();
</script>

<style lang="scss">
	footer {
		margin-top: var(--sections-top-margin);

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

				span {
					color: #DBDBDB;
				}
			}
		}
	}

	h4 {
		margin-top: 100px;
		margin-bottom: 40px;
	}
</style>
