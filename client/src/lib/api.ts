import { useSWR, revalidate } from '@peippo/sswr';
import type { RestaurantResponse } from '$lib/api.type';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function getRestaurants(city: string, initialData: RestaurantResponse) {
	const url = `${API_BASE_URL}restaurants/${city}`;

	const { data } = useSWR<RestaurantResponse>(url, {
		initialData,
		fetcher: async () => {
			return await fetch(url, {
				credentials: 'include'
			}).then((r) => r.json());
		}
	});

	return data;
}

export async function voteRestaurant(id: string, city: string) {
	const url = `${API_BASE_URL}vote/${id}`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			credentials: 'include'
		});

		return response.status;
	} catch (error) {
		console.log(error);
	} finally {
		revalidate(`${API_BASE_URL}restaurants/${city}`, { force: true });
	}
}
