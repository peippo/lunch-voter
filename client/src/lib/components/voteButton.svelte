<script type="ts">
	import { voteRestaurant } from '$lib/api';
	import { votedId } from '$lib/store';

	export let id: string;
	export let city: string;

	let hasError = false;

	const handleClick = async (id: string) => {
		const status = await voteRestaurant(id, city);
		hasError = status !== 200;
	};
</script>

<button
	disabled={$votedId !== '' && $votedId !== id}
	class="bg-pink-500 hover:bg-pink-600 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors text-white disabled:text-slate-400 rounded-b-lg p-2 -ml-4 -mr-4 -mb-4 mt-6"
	class:bg-red-500={hasError}
	class:hover:bg-red-600={hasError}
	on:click={() => handleClick(id)}
>
	{#if !hasError}
		{#if $votedId === id}
			Remove vote
		{:else}
			Vote
		{/if}
	{:else}
		Error voting :(
	{/if}
</button>
