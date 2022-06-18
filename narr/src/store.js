import {writable} from 'svelte/store';

export let master_name = writable('Glad to meet you');
export let side_panel_toggle = writable(false);

export let redirect_url_01 = writable('https://www.google.com');

export let url_eve = writable('https://eve.shiftup.co.kr');
export let url_bu = writable('https://www.blessunleashedpc.com/');
export let url_cv = writable('https://docs.google.com/document/d/10yksl9hdvTGO4zSLz9cLQ98N4W4kPwWEJQWY49J8v1k/edit?usp=sharing')