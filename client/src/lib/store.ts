import { writable } from 'svelte/store';
import { browser } from '$app/env';

const storedVotedId = (browser && localStorage.getItem('votedId')) || '';
const storedVotedCity = (browser && sessionStorage.getItem('votedCity')) || '';
const storedFavorites =
	(browser && JSON.parse(localStorage.getItem('favorites') || '["helsinki","turku", "tampere"]')) ||
	'';

export const votedId = writable(browser && storedVotedId);
export const votedCity = writable(browser && storedVotedCity);
export const favorites = writable<Array<string>>((browser && storedFavorites) || []);

votedId.subscribe((value) => browser && (localStorage.votedId = value));
votedCity.subscribe((value) => browser && (sessionStorage.votedCity = value));
favorites.subscribe((value) => browser && (localStorage.favorites = JSON.stringify(value)));
