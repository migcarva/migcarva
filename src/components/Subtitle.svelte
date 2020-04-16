<div class={col ? `col-md-${col}` : ''}>
	<h3><slot></slot></h3>
</div>

<script>
	export let col;
</script>

<style>
	h3 {
		font-family: "HelveticaMedium", Arial, sans-serif;
    font-size: 18px;
    padding-top: 4px;
	}
</style>