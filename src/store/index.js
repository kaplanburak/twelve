import { writable, readable } from "svelte/store";
import { NoteHelper } from "../helpers";

// Audio Context API
export const ctx = writable();
export const startPlaying = writable();
export const stopPlaying = writable();

// Scales Page
export const selectedScale = writable([]);

// Octave Component
const defaultKey = "G";
const defaultPitch = 4;

export const pitchRange = readable([1, 2, 3, 4, 5, 6, 7]);

export const currentKey = writable(defaultKey);
export const currentPitch = writable(defaultPitch);
export const currentTwelve = writable([]);
