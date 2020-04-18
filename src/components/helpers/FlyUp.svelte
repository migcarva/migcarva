<Intersection once let:intersecting top={0}>
	{#if intersecting}
    <div transition:fly="{{ y: 500, duration: 1000, delay: 300 }}">
		  <slot></slot>
    </div>
	{/if}
</Intersection>

<script>
	import { fly } from 'svelte/transition';
	import Intersection from '../observers/Intersection.svelte';
</script>