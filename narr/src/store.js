import {writable} from 'svelte/store';

export let master_name = writable('Mosiggang');
export let side_panel_toggle = writable(false);

export let redirect_url_01 = writable('https://www.google.com');