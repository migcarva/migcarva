<Intersection once let:intersecting anchor={anchor} threshold={threshold} debug={debug}>
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
  export let anchor = '';
  export let threshold = 0;
  export let options = {};
  export let isFade = false;
  export let debug = false;

  const flyOptions = {
    y: 128,
    x: 0,
    duration: 1280,
    delay: 0,
    // easing: cubicOut,
    ...options
  };

  const fadeOptions = {
    //  easing: cubicOut,
    ...options
  };
</script>