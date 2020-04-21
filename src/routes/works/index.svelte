<svelte:head>
	<title>migcarva. Works</title>
</svelte:head>

<WorksList {works} />

<script>
	import WorksList from '../../components/WorksList.svelte';

	let works = [
		{
			slug: 'work',
			title: 'Work 1',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work Adasd',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work lsdfj',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work for Business',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work 1',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work Adasd',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work lsdfj',
			client: 'Client A',
			tech: 'react + python'
		},
		{
			slug: 'work',
			title: 'Work for Business',
			client: 'Client A',
			tech: 'react + python'
		},
	];
</script>

<style>
</style>