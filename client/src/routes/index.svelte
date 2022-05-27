<script>
	import { fly, fade } from 'svelte/transition';
	import FrontpageIllustration from '$lib/components/frontpageIllustration.svelte';
</script>

<div class="text-center" transition:fade={{ duration: 250 }}>
	<FrontpageIllustration />

	<h1 class="flex items-end justify-center" in:fade>
		<span
			in:fly={{ x: -20, delay: 500 }}
			class="text-5xl md:text-6xl lg:text-7xl text-slate-600 tracking-tight md:tracking-normal"
			>Lunch</span
		>
		<span
			in:fly={{ x: -20, delay: 750 }}
			class="text-5xl md:text-6xl lg:text-7xl text-pink-600 font-bold tracking-wide uppercase -mt-2"
			>voter</span
		>
	</h1>

	<p class="text-lg mt-2" in:fade={{ delay: 1000 }}>
		Browse daily restaurant menus and vote for your favorite!
	</p>

	<p class="inline-flex text-sm border-b border-slate-400 mx-auto mt-8" in:fade={{ delay: 1100 }}>
		<a href="https://github.com/peippo/lunch-voter">Github</a>
	</p>
</div>
