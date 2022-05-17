<script type="ts">
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
	export let id: string;

	const handleClick = (id: string) => {
		fetch(`${API_BASE_URL}vote/${id}`, {
			method: 'POST',
			credentials: 'include'
		});
	};
</script>

<button class="bg-pink-500 text-white py-1 px-2" on:click={() => handleClick(id)}>Vote</button>
