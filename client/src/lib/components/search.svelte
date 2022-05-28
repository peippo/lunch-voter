<script lang="ts">
	import { goto } from '$app/navigation';
	import { submitIcon } from '$lib/icons';
	import { isCity } from '$lib/utils';

	$: inputField = '';
	$: formError = false;
	$: inputHasValidCity = isCity(inputField);

	const handleSubmit = (event: { target: HTMLFormElement }) => {
		const formData = new FormData(event.target);

		for (let field of formData) {
			const [_key, value] = field;

			if (typeof value === 'string' && !isCity(value)) {
				formError = true;
			} else {
				goto(`/city/${value}`);
				inputField = '';
			}
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="flex items-center" autocomplete="off">
	<label class="w-full">
		<span class="sr-only">City search:</span>
		<input
			id="city-search"
			type="search"
			name="city"
			class="border-slate-700 border-2 focus:border-slate-700 rounded-lg max-w-[175px] md:max-w-none focus:outline-0 focus:ring-2 focus:ring-pink-500 caret-pink-500 py-2 px-3"
			class:border-red-700={!inputHasValidCity && formError}
			class:bg-red-200={!inputHasValidCity && formError}
			class:text-green-700={inputHasValidCity}
			class:caret-green-700={inputHasValidCity}
			autocomplete="off"
			placeholder="Search for city"
			on:change={() => (formError = false)}
			bind:value={inputField}
		/>
	</label>

	<button
		type="submit"
		class="text-pink-500 hover:text-pink-600 transition-colors focus:outline-0 focus:text-pink-600  ml-2"
	>
		{@html submitIcon}
		<span class="sr-only text-black">Search</span>
	</button>
</form>
