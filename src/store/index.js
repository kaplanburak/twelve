import { writable } from "svelte/store";

export const ctx = writable();
export const start = writable();
export const stop = writable();

export const selectedComponent = writable(0);
