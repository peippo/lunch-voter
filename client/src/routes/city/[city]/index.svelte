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
	import type { RestaurantResponse } from '$lib/api.type';

	export let data: RestaurantResponse;

	$: restaurants = data?.restaurants;
</script>

{#if restaurants}
	<ul>
		{#each restaurants as restaurant}
			<li>
				{restaurant.name}
			</li>
		{/each}
	</ul>
{/if}
