import { writable } from 'svelte/store'
export const test = writable(false)

let shown = false;
export function help() {
   shown = !shown;
}
export function hide(){
   shown = false;
}