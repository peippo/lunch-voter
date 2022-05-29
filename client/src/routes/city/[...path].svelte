<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params }) => {
		return {
			props: {
				path: params.path
			}
		};
	};
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { signpostIcon } from '$lib/icons';
	import { capitalizeString } from '$lib/utils';

	export let path: string;
</script>

<div class="flex items-center justify-center mt-8 mb-16" in:fade={{ delay: 250, duration: 500 }}>
	<span class="text-red-600 mr-4">
		{@html signpostIcon}
	</span>
	<div class="flex flex-col">
		<h1 class="text-2xl text-red-600">
			<strong>{capitalizeString(path)}</strong> does not seem to be a city in Finland
		</h1>
		<p class="text-slate-600">
			Maybe try the capital, <a
				href="/city/helsinki"
				class="border-b border-slate-400 hover:border-slate-300">Helsinki</a
			>
		</p>
	</div>
</div>
