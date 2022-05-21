<script type="ts">
	import { invalidate } from '$app/navigation';

	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
	import { votedId } from '$lib/store';

	export let id: string;
	export let city: string;

	let isError = false;

	const handleClick = async (id: string) => {
		const response = await fetch(`${API_BASE_URL}vote/${id}`, {
			method: 'POST',
			credentials: 'include'
		});

		if (response.status === 200) {
			// TODO: storing votedId in the store for now, "alreadyVoted" inside RestaurantResponse
			// returns as null in browser for some reason...
			if ($votedId === id) {
				$votedId = '';
			} else {
				$votedId = id;
			}
		} else {
			isError = true;
		}

		// Rerun load function to update the data
		invalidate(`/city/${city}`);
	};
</script>

<button
	disabled={$votedId !== '' && $votedId !== id}
	class="bg-pink-500 hover:bg-pink-600 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors text-white disabled:text-slate-400 rounded-b-lg p-2 -ml-4 -mr-4 -mb-4 mt-6"
	class:bg-red-500={isError}
	class:hover:bg-red-600={isError}
	on:click={() => handleClick(id)}
>
	{#if !isError}
		{#if $votedId === id}
			Remove vote
		{:else}
			Vote
		{/if}
	{:else}
		Error voting :(
	{/if}
</button>
