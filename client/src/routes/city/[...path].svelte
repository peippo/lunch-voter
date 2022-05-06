<script context="module">
	/** @type {import('./[...path]').Load} */
	export function load({ params }) {
		return {
			props: {
				path: params.path
			}
		};
	}
</script>

<script lang="ts">
	export let path: string;
</script>

<h1>
	<span class="block text-4xl text-pink-500">404</span> <strong>{path}</strong> does not seem to be a
	city in Finland
</h1>
