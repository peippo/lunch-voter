import { writable } from 'svelte/store';
import { browser } from '$app/env';

const storedVotedId = (browser && localStorage.getItem('votedId')) || '';

export const votedId = writable(browser && storedVotedId);

votedId.subscribe((value) => browser && (localStorage.votedId = value));
