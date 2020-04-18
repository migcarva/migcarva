<Intersection once let:intersecting top={top}>
	{#if intersecting}
    <div transition:fly="{options}">
		  <slot></slot>
    </div>
	{/if}
</Intersection>

<script>
	import { fly } from 'svelte/transition';
  import Intersection from '../observers/Intersection.svelte';
  export let top;
  export let options;
</script>