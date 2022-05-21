<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Restaurant } from '$lib/api.type';
	import VoteButton from '$lib/components/voteButton.svelte';
	import { removeTrailingCityName } from '$lib/utils';
	import { clockIcon, thumbUpIcon } from '$lib/icons';

	export let index: number;
	export let city: string;
	export let restaurant: Restaurant;
</script>

<li
	in:fly={{ y: -15, duration: 250, delay: 350 + index * 50 }}
	class="relative flex flex-col justify-between bg-white border-slate-300 drop-shadow-md border rounded-lg p-4"
>
	<h2 class="text-lg font-bold pr-10">{removeTrailingCityName(restaurant.name, city)}</h2>

	<span class="flex mt-1 mb-auto">
		<span class="text-slate-400 mr-2">
			{@html clockIcon}
		</span>
		<span class="sr-only">Opening hours:</span>
		{restaurant.openingHours}
	</span>

	{#if restaurant.votes > 0}
		<span
			in:fly={{ y: -15, duration: 150 }}
			out:fly={{ y: 15, duration: 150 }}
			class="absolute -top-2 -right-2 bg-slate-200 border-b border-slate-400 inline-flex items-center justify-center drop-shadow-sm rounded-full py-2 px-3"
		>
			<span class="text-pink-500 mr-2">
				{@html thumbUpIcon}
			</span>
			{restaurant.votes}
		</span>
	{/if}
	<VoteButton id={restaurant.id} {city} />
</li>
