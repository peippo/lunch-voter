<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	$: isFrontPage = $page.url.pathname === '/';
</script>

<div
	class="transition-all ease-in-out duration-500"
	class:w-20={!isFrontPage}
	class:md:w-24={!isFrontPage}
	class:w-0={isFrontPage}
>
	{#if !isFrontPage}
		<h1 in:fly={{ x: -50, delay: 300 }} out:fly={{ x: -50 }}>
			<a href="/">
				<span class="block text-xl md:text-2xl text-slate-600 tracking-tight md:tracking-normal"
					>Lunch</span
				>
				<span class="block text-md md:text-xl text-pink-600 font-bold tracking-wide uppercase -mt-2"
					>voter</span
				>
			</a>
		</h1>
	{/if}
</div>
