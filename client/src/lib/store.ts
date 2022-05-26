import { writable } from 'svelte/store';
import { browser } from '$app/env';

const storedVotedId = (browser && localStorage.getItem('votedId')) || '';
export const votedId = writable(browser && storedVotedId);
votedId.subscribe((value) => browser && (localStorage.votedId = value));

const storedVotedCity = (browser && sessionStorage.getItem('votedCity')) || '';
export const votedCity = writable(browser && storedVotedCity);
votedCity.subscribe((value) => browser && (sessionStorage.votedCity = value));
