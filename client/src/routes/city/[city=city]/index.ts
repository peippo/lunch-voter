import * as api from '$lib/api';
import type { RequestHandler } from '.svelte-kit/types/src/routes/city/[city]/index.d';

export const get: RequestHandler = async ({ params }) => {
	const { city } = params;

	const data = await api.get(`restaurants/${city}`);

	return {
		body: data
	};
};
