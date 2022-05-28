<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Logo from '$lib/components/logo.svelte';
	import Search from '$lib/components/search.svelte';
	import { capitalizeString } from '$lib/utils';

	const citySuggestions = ['helsinki', 'turku', 'tampere', 'oulu', 'espoo'];

	$: isCityPage = Boolean($page.params.city);
	$: pageTitle = isCityPage
		? `${capitalizeString($page.params.city)} - Lunch Voter`
		: 'Lunch Voter';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta name="twitter:title" content={pageTitle} />
</svelte:head>

<header class="flex flex-col md:flex-row items-center bg-slate-200 min-h-[100px] p-5">
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
						class="capitalize border-b-4 focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-2 focus-visible:outline-dotted transition-colors"
						class:border-pink-500={$page.params.city === city}
						class:hover:border-slate-300={$page.params.city !== city}
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
