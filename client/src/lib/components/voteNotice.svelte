<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { votedCity } from '$lib/store';
	import { noticeIcon } from '$lib/icons';
</script>

{#if $votedCity && $page.params.city !== $votedCity}
	<div in:fade={{ delay: 500, duration: 500 }} class="flex text-slate-400 mt-12">
		<p class="flex flex-row items-center mx-auto">
			<span class="mr-2">
				{@html noticeIcon}
			</span>

			<a
				href={`/city/${$votedCity}`}
				class="focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-2 focus-visible:outline-dotted"
			>
				You voted in
				<span class="capitalize border-b border-slate-400">{$votedCity}</span>
			</a>
		</p>
	</div>
{/if}
