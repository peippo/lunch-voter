<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Search from '$lib/components/search.svelte';

	const citySuggestions = ['helsinki', 'turku', 'tampere'];
</script>

<header class="flex p-3">
	<Search />
	<nav aria-label="Quicklinks">
		<ul class="flex ml-5">
			{#each citySuggestions as city}
				<li class="m-3">
					<a
						sveltekit:prefetch
						href={`/city/${city}`}
						class="capitalize border-pink-500"
						class:border-b-4={$page.params.city === city}>{city}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<slot />
