import exp from 'constants';
import { writable } from 'svelte/store';

// Create a writable store and set the initial value to false
export const choicebol = writable(false);
export const result = writable("");
export const  playBol = writable(false);
export const  score = writable(0);
export const displaychoiceplay = writable("");
export const displaychoicecomp = writable("");