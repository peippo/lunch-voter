<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

	// SSR fetch
	export const load: Load = async ({ params, fetch, url }) => {
		const { city } = params;
		const response = await fetch(`${API_BASE_URL}restaurants/${city}`, {
			credentials: 'include'
		}).then((res) => res.json());

		return {
			props: {
				initialData: response,
				city: city,
				url: url.href
			}
		};
	};
</script>

<script lang="ts">
	import { getRestaurants } from '$lib/api';
	import { votedId } from '$lib/store';
	import { fly, fade } from 'svelte/transition';
	import type { RestaurantResponse } from '$lib/api.type';
	import Restaurants from '$lib/components/restaurants.svelte';
	import VoteNotice from '$lib/components/voteNotice.svelte';
	import NoRestaurantsMessage from '$lib/components/noRestaurantsMessage.svelte';

	export let initialData: RestaurantResponse;
	export let city: string;
	export let url: string;

	$: data = getRestaurants(city, initialData);
	$: restaurants = $data?.restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));

	$: $votedId = $data?.alreadyVoted ? $data?.alreadyVoted : '';
</script>

{#key url}
	{#if city}
		<h1
			class="city-title text-4xl md:text-5xl lg:text-6xl text-slate-500 my-5 capitalize"
			in:fly={{ x: -20, duration: 500, delay: 250 }}
			out:fly={{ x: 25, duration: 250 }}
		>
			{city}
		</h1>
	{/if}

	<div out:fade|local={{ duration: 250 }}>
		{#if restaurants}
			<Restaurants {restaurants} />
		{/if}

		{#if restaurants?.length === 0}
			<NoRestaurantsMessage />
		{/if}
	</div>

	<VoteNotice />
{/key}
