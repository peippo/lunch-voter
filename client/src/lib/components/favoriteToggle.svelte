<script lang="ts">
	import { fade } from 'svelte/transition';
	import { favorites } from '$lib/store';
	import { starExclamation, starOutline, starSolid } from '$lib/icons';

	export let city: string;

	$: isFavorite = $favorites.includes(city);
	$: isFavoriteNavFull = $favorites.length > 4;
	$: isDisabled = isFavoriteNavFull && !isFavorite;
</script>

<button
	class="flex items-center self-center group text-pink-600 focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-2 focus-visible:outline-dotted"
	disabled={isDisabled}
	class:text-slate-300={isDisabled}
	in:fade={{ delay: 500, duration: 500 }}
	out:fade={{ duration: 200 }}
	on:click={isFavorite
		? () => ($favorites = $favorites.filter((_city) => _city !== city))
		: () => ($favorites = [...$favorites, city])}
>
	{#if isFavorite}
		<span class="sr-only">Remove from</span>
		<span class="hidden group-hover:block text-slate-600 mr-3">Remove from</span>
		<span>{@html starSolid}</span>
	{:else if isFavoriteNavFull}
		<span>{@html starExclamation}</span>
	{:else}
		<span class="sr-only">Add to</span>
		<span class="hidden group-hover:block text-slate-600 mr-3">Add to</span>
		<span>{@html starOutline}</span>
	{/if}

	{#if isDisabled}
		<span class="hidden sm:block text-slate-300 ml-3">Favorites full</span>
	{:else}
		<span class="hidden sm:block text-slate-500 group-hover:text-slate-600 ml-3">Favorites</span>
	{/if}
</button>
