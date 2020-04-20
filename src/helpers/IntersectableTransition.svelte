<Intersection once let:intersecting top={top} anchor={anchor} threshold={threshold} debug={debug}>
	{#if (intersecting && !isFade)}
    <div transition:fly="{flyOptions}">
		  <slot></slot>
    </div>
	{/if}
  {#if (intersecting && isFade)}
    <div transition:fade="{fadeOptions}">
		  <slot></slot>
    </div>
	{/if}
</Intersection>

<script>
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
  import Intersection from '../observers/Intersection.svelte';
  export let top = 0;
  export let anchor = '';
  export let threshold = 0;
  export let options;
  export let isFade = false;
  export let debug = false;

  const flyOptions = {
    // easing: cubicOut,
    ...options
  };

  const fadeOptions = {
    //  easing: cubicOut,
    ...options
  };
</script>