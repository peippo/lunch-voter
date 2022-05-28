<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	$: isFrontPage = $page.url.pathname === '/';
</script>

<div
	class="transition-all ease-in-out duration-500 mr-3 md:mr-4"
	class:w-logo-small={!isFrontPage}
	class:md:w-logo-large={!isFrontPage}
	class:w-0={isFrontPage}
>
	{#if !isFrontPage}
		<h1 in:fly={{ x: -50, delay: 300 }} out:fly={{ x: -50 }}>
			<a href="/" class="focus:outline-none group">
				<span
					class="block text-xl md:text-2xl text-slate-600 group-hover:text-slate-500 group-focus:text-slate-500 tracking-tight md:tracking-normal"
					>Lunch</span
				>
				<span
					class="block text-md md:text-xl text-pink-600 group-hover:text-pink-500 group-focus:text-pink-500 font-bold tracking-wide uppercase -mt-2"
					>voter</span
				>
			</a>
		</h1>
	{/if}
</div>
