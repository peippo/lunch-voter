<script>
	import { fade } from 'svelte/transition';
	import { sadFaceIcon } from '$lib/icons';
</script>

<div class="flex items-center justify-center mt-8 mb-16" in:fade={{ delay: 250, duration: 500 }}>
	<span class="text-red-600 mr-4">
		{@html sadFaceIcon}
	</span>
	<div class="flex flex-col">
		<h1 class="text-2xl text-red-600">Sorry, we seem to have ran into an issue</h1>
		<p class="text-slate-600">
			Please try again later or go to the <a
				href="/"
				class="border-b border-slate-400 hover:border-slate-300">frontpage</a
			>
		</p>
	</div>
</div>
