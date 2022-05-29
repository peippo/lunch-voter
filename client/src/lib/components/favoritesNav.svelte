<script lang="ts">
	import { page } from '$app/stores';
	import { favorites } from '$lib/store';

    $: cities = $favorites.sort((a, b) => a > b ? 1 : -1);
</script>

<nav aria-label="Quicklinks">
    <ul class="flex -ml-2 sm:-ml-3 md:ml-5 mt-2 md:mt-0">
        {#each cities as city}
            <li class="m-2 sm:m-3 md:m-2 lg:m-4">
                <a
                    sveltekit:prefetch
                    href={`/city/${city}`}
                    class="capitalize lg:text-lg border-b-4 focus-visible:outline-2 focus-visible:outline-pink-600 focus-visible:outline-offset-2 focus-visible:outline-dotted transition-colors"
                    class:border-pink-500={$page.params.city === city}
                    class:hover:border-slate-300={$page.params.city !== city}
                >
                    {city}
                </a>
            </li>
        {/each}
    </ul>
</nav>