<script>
	export let name;
	export let size = 24;
</script>

<svg class="icon" width={size} height={size}>
	<use xlink:href='#{name}' />
</svg>

<style>
	.icon {
		position: relative;
		overflow: hidden;
		vertical-align: middle;
		-o-object-fit: contain;
		object-fit: contain;
		-webkit-transform-origin: center center;
		transform-origin: center center;
		fill: none;
	}
</style>