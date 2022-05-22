<script lang="ts">
	import { page } from '$app/stores';
	import type { Restaurant } from '$lib/api.type';
	import RestaurantCard from './restaurantCard.svelte';

	let city = $page.params.city;

	export let restaurants: Array<Restaurant>;
</script>

{#if restaurants}
	<ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each restaurants as restaurant, index}
			<RestaurantCard {restaurant} {city} {index} />
		{/each}
	</ul>
{/if}
