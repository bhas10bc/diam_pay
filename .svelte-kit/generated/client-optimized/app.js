export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/dashboard": [4,[2]],
		"/dashboard/assets": [5,[2]],
		"/dashboard/contacts": [6,[2]],
		"/dashboard/send": [7,[2]],
		"/dashboard/settings/dev": [8,[2]],
		"/dashboard/settings/kyc": [9,[2]],
		"/dashboard/transfers": [10,[2]],
		"/login": [11],
		"/signup": [12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';