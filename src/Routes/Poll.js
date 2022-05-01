import { writable } from 'svelte/store';

export const modal = writable(null);
export const windowStyle = writable({});

let LiveStream  = true;
export default LiveStream;