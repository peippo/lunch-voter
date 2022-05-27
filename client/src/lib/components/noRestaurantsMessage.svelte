<script>
	import { fade } from 'svelte/transition';
	import { sadFaceIcon } from '$lib/icons';
	import { page } from '$app/stores';

	let city = $page.params.city;
</script>

<div
	class="flex items-center justify-center text-red-600 mt-8 mb-16"
	in:fade={{ delay: 250, duration: 500 }}
>
	<span class="mr-4">
		{@html sadFaceIcon}
	</span>
	<h2 class="text-2xl">
		Oh no, nothing to eat in <span class="capitalize">{city}</span>
	</h2>
</div>
