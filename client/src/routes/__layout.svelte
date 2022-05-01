<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	const citySuggestions = ['helsinki', 'turku', 'tampere'];
</script>

<header>
	<nav aria-label="Quicklinks">
		<ul class="flex">
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
