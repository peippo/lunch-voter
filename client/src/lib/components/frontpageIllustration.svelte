<script>
	import { fly } from 'svelte/transition';
	import { burgerIcon, pizzaIcon, potIcon } from '$lib/icons';
</script>

<div class="flex justify-center mt-10 mb-2">
	<span
		class="animate-float text-pink-400 hidden md:block"
		in:fly={{ y: -15, duration: 500, delay: 300 }}
	>
		<div class="-rotate-3">
			{@html potIcon}
		</div>
	</span>
	<span class="animate-float-fast text-pink-500" in:fly={{ y: -15, duration: 500, delay: 500 }}>
		<div class="rotate-6">
			{@html burgerIcon}
		</div>
	</span>
	<span class="animate-float-slow text-pink-300" in:fly={{ y: -15, duration: 500, delay: 400 }}>
		<div class="rotate-3">
			{@html pizzaIcon}
		</div>
	</span>
</div>
