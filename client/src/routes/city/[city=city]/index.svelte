<script lang="ts" context="module">
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch, url }) => {
		const { city } = params;
		const response = await fetch(`${API_BASE_URL}restaurants/${city}`, {
			credentials: 'include'
		}).then((res) => res.json());

		return {
			props: {
				data: response,
				url: url.href
			}
		};
	};
</script>

<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { RestaurantResponse } from '$lib/api.type';
	import Restaurants from '$lib/components/restaurants.svelte';

	export let data: RestaurantResponse;
	export let url: string;

	$: restaurants = data.restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
</script>

{#key url}
	{#if $page.params.city}
		<h1
			class="text-4xl md:text-5xl lg:text-6xl text-slate-500 my-5 capitalize"
			in:fly={{ x: -20, duration: 500, delay: 250 }}
			out:fly={{ x: 25, duration: 250 }}
		>
			{$page.params.city}
		</h1>

		<div out:fade|local={{ duration: 250 }}>
			<Restaurants {restaurants} />
		</div>
	{/if}
{/key}
