<script lang="ts">
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Restaurant } from '$lib/api.type';
	import VoteButton from '$lib/components/voteButton.svelte';
	import { removeTrailingCityName } from '$lib/utils';
	import { clockIcon, thumbUpIcon } from '$lib/icons';

	$: city = $page.params.city;

	// TODO:
	// Refetching on mount just for the cookie, not sure why it wouldn't work when
	// the load function runs in the client at "city/[city]" route - try to figure out
	onMount(async () => {
		fetch(`${API_BASE_URL}restaurants/${city}`, {
			credentials: 'include'
		});
	});

	export let restaurants: Array<Restaurant>;
</script>

{#if restaurants}
	<ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each restaurants as restaurant}
			<li
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
						class="absolute -top-2 -right-2 bg-slate-200 border-b border-slate-400 inline-flex items-center justify-center drop-shadow-sm rounded-full py-2 px-3"
					>
						<span class="text-pink-500 mr-2">
							{@html thumbUpIcon}
						</span>
						{restaurant.votes}
					</span>
				{/if}
				<VoteButton id={restaurant.id} />
			</li>
		{/each}
	</ul>
{/if}
