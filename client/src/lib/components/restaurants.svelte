<script lang="ts">
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Restaurant } from '$lib/api.type';
	import RestaurantCard from './restaurantCard.svelte';

	let city = $page.params.city;

	// TODO:
	// Refetching on mount just for the cookie, not sure why it wouldn't work when
	// the load function runs in the client at "city/[city]" route - try to figure out
	// onMount(() => {
	// 	fetch(`${API_BASE_URL}restaurants/${city}`, {
	// 		credentials: 'include'
	// 	});
	// });

	export let restaurants: Array<Restaurant>;
</script>

{#if restaurants}
	<ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each restaurants as restaurant, index}
			<RestaurantCard {restaurant} {city} {index} />
		{/each}
	</ul>
{/if}
