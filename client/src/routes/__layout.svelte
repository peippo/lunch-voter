<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { capitalizeString } from '$lib/utils';
	import Logo from '$lib/components/logo.svelte';
	import Search from '$lib/components/search.svelte';
	import FavoritesNav from '$lib/components/favoritesNav.svelte';

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
	<div class="flex items-center">
		<Logo />
		<Search />
	</div>

	<FavoritesNav />
</header>

<main class="p-5 mb-12">
	<slot />
</main>
