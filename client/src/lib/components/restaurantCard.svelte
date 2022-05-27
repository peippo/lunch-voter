<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Restaurant } from '$lib/api.type';
	import VoteButton from '$lib/components/voteButton.svelte';
	import { removeDishAttributes, removeTrailingCityName } from '$lib/utils';
	import { clockIcon, externalLinkIcon, noticeIcon, thumbUpIcon } from '$lib/icons';

	export let index: number;
	export let city: string;
	export let restaurant: Restaurant;

	const restaurantName = removeTrailingCityName(restaurant.name, city);

	const hasLunch = restaurant.openingHours !== 'ei lounasta';
	const hasHours = hasLunch && restaurant.openingHours !== '';
	const hasMenu = restaurant.dishes.length > 0;
	$: hasVotes = restaurant.votes > 0;
</script>

<li
	in:fly={{ x: -15, duration: 250, delay: 350 + index * 50 }}
	class="relative flex flex-col justify-between bg-white border-slate-300 drop-shadow-md border rounded-lg break-inside-avoid overflow-hidden [transform:translate3d(0,0,0)] p-4 mb-6"
>
	<h2 class="text-lg font-bold pr-10">{restaurantName}</h2>

	{#if !hasLunch}
		<span class="flex mt-1 mb-auto">
			<span class="text-red-500 mr-2">
				{@html noticeIcon}
			</span>
			<span class="text-slate-600">No lunch today</span>
		</span>
	{/if}

	{#if hasHours}
		<span class="flex mt-1" class:mb-auto={!hasMenu}>
			<span class="text-slate-400 mr-2">
				{@html clockIcon}
			</span>
			<span class="sr-only">Opening hours:</span>
			{restaurant.openingHours}
		</span>
	{/if}

	{#if hasMenu}
		<h3 class="sr-only">Menu</h3>
		<ul class="flex flex-col mt-3 mb-auto">
			{#each restaurant.dishes as dish}
				<li class="text-sm border-b last:border-b-0 mb-2 pb-2">
					<div>
						{removeDishAttributes(dish.name)}
						<strong>{dish.price}</strong>
						{#each dish.attributes as attribute}
							<span
								class="bg-slate-300 text-slate-700 text-xs py-1 px-2 mx-1 rounded-full uppercase"
								>{attribute}</span
							>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	{/if}

	{#if !hasMenu}
		<a
			class="flex items-center text-sm text-slate-500 focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-2 focus-visible:outline-dotted mt-4"
			href={`https://www.google.com/search?q=${encodeURIComponent(restaurantName)}+${city}`}
		>
			<span class="mr-2">
				{@html externalLinkIcon}
			</span>
			Search for menu on Google
		</a>
	{/if}

	{#if hasVotes}
		<span
			in:fly={{ x: 15, duration: 150 }}
			out:fly={{ x: 15, duration: 150 }}
			class="absolute top-2 right-0 bg-slate-200 border-b border-slate-400 inline-flex items-center justify-center drop-shadow-sm rounded-tl-full rounded-bl-full py-2 px-3"
		>
			<span class="sr-only">Current votes: </span>
			<span class="text-pink-500 mr-2">
				{@html thumbUpIcon}
			</span>
			{restaurant.votes}
		</span>
	{/if}
	<VoteButton {restaurantName} id={restaurant.id} {city} />
</li>
