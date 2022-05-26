<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Logo from '$lib/components/logo.svelte';
	import Search from '$lib/components/search.svelte';

	const citySuggestions = ['helsinki', 'turku', 'tampere', 'oulu', 'espoo'];
</script>

<header class="flex flex-col md:flex-row items-center bg-slate-200 p-5">
	<div class="flex">
		<Logo />
		<Search />
	</div>
	<nav aria-label="Quicklinks">
		<ul class="flex -ml-2 sm:-ml-3 md:ml-5 mt-2 md:mt-0">
			{#each citySuggestions as city}
				<li class="m-2 sm:m-3">
					<a
						sveltekit:prefetch
						href={`/city/${city}`}
						class="capitalize border-pink-500"
						class:border-b-4={$page.params.city === city}
					>
						{city}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="p-5 mb-12">
	<slot />
</main>
