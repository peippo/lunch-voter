<script lang="ts">
	import { goto } from '$app/navigation';
	import { submitIcon } from '$lib/icons';
	import { isCity } from '$lib/utils';

	$: inputField = '';
	$: formError = false;

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
	<label>
		<span class="sr-only">City search:</span>
		<input
			id="city-search"
			type="search"
			name="city"
			class="border-slate-700 border-2 rounded-lg py-2 px-3 mr-2"
			class:border-red-700={formError}
			class:bg-red-200={formError}
			autocomplete="off"
			placeholder="Search for city"
			on:change={() => (formError = false)}
			bind:value={inputField}
		/>
	</label>

	<button type="submit" class="text-pink-500">
		{@html submitIcon}
		<span class="sr-only">Search</span>
	</button>
</form>
