<script lang="ts">
	import { page } from '$app/stores';
	import type { Restaurant } from '$lib/api.type';
	import RestaurantCard from './restaurantCard.svelte';

	let city = $page.params.city;

	export let restaurants: Array<Restaurant>;
</script>

{#if restaurants}
	<ul
		class="sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit gap-6"
	>
		{#each restaurants as restaurant, index}
			<RestaurantCard {restaurant} {city} {index} />
		{/each}
	</ul>
{/if}
