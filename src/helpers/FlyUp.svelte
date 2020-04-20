<Intersection once let:intersecting top={top} anchor={anchor} threshold={threshold}>
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
  export let anchor;
  export let threshold;
  export let options;
</script>