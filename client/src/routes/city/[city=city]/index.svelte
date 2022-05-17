<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const { city } = params;
		const response = await fetch(`/city/${city}/__data.json`).then((res) => res.json());

		return {
			props: {
				data: response
			}
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { RestaurantResponse } from '$lib/api.type';
	import Restaurants from '$lib/components/restaurants.svelte';

	export let data: RestaurantResponse;

	$: city = $page.params.city;
	$: restaurants = data.restaurants;
</script>

<h1 class="capitalize">{city}</h1>

{#key city}
	<Restaurants {restaurants} />
{/key}
