<div class={col ? `col-md-${col}` : ''}>
	<p>
		<slot></slot>
	</p>
</div>

<script>
	export let col;
</script>

<style>
	p {
		color: #707070;
    font-size: 18px;
    line-height: 30px;
	}

	/* p span {
		color: #171717;
	} */

	@media (max-width: 767px) {
		p {
			font-size: 16px;
			line-height: 28px;
		}
	}
</style>