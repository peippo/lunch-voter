<script lang="ts">
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Restaurant } from '$lib/api.type';
	import VoteButton from '$lib/components/voteButton.svelte';

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
	<ul>
		{#each restaurants as restaurant}
			<li class="my-2">
				{restaurant.name}
				<VoteButton id={restaurant.id} />
			</li>
		{/each}
	</ul>
{/if}
