<Intersection once let:intersecting top={top} anchor={anchor} threshold={threshold} debug={debug}>
	{#if intersecting}
    <div transition:fade="{options}">
		  <slot></slot>
    </div>
	{/if}
</Intersection>

<script>
	import { fade } from 'svelte/transition';
  import Intersection from '../observers/Intersection.svelte';
  export let top = 0;
  export let anchor = '';
  export let threshold = 0;
  export let options;
  export let debug = false;
</script>