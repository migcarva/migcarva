<div class="menu">
	<div>x</div>
	<div>
		<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
	</ul>
	</div>
</div>

<script>
	export let segment;
</script>

<style>
	.menu {
			background-color: #171717;
			position: fixed;
			z-index: 100;
			width: 100%;
			height: 100%;
			padding-top: 50px;
			transform: translateY(-100%);
			transition: transform 0.2s ease-out;
	}
	/* .menu.open {
			transform: translateY(0);
			transition: transform 0.2s ease-out;
	} */
</style>
