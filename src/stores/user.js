import { writable } from 'svelte/store';

const user = writable({ user: null, token: null });

export default user;
